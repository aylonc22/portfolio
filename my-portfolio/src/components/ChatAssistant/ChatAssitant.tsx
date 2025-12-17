import { useEffect, useState } from "react";
import './ChatAssitant.css'
import { getGroqResponse } from "../../api/groq";
import { typeText } from "../../utility/text";
import Body from "./Body/Body";


type ChatMessage = {
    role: 'user' | 'assistant';
    content: string;
    isTyping?: boolean;
};

const ChatAssitant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>(()=>{
        const stored = localStorage.getItem('chat');
        return stored ? JSON.parse(stored) : [];
    });
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");   
    const [loading, setLoading] = useState(false);

    const PHRASES :string[] =[
        "Ask me about aylon",
    ]


const TYPING_SPEED = 100; 
const DISPLAY_DURATION = 4000; 

useEffect(()=>{
    let charIndex = 0;
    let typingInterval:ReturnType<typeof setInterval>;
    let timeout:ReturnType<typeof setTimeout>;

    const currentPhrase = PHRASES[index];
    setDisplayText("");

    typingInterval = setInterval(()=>{
        setDisplayText(currentPhrase.slice(0, charIndex+1));
        charIndex++;
        if(charIndex === currentPhrase.length){
        clearInterval(typingInterval);

        timeout = setTimeout(()=>{
            setIndex((i)=> (i + 1) % PHRASES.length );
        }, DISPLAY_DURATION);
        }
    }, TYPING_SPEED);

    return () => {
        clearInterval(typingInterval);
        clearTimeout(timeout);
    }
}, [index]);

useEffect(() => {
    localStorage.setItem('chat', JSON.stringify(messages));    
}, [messages]);

useEffect(() => {
    const saved = localStorage.getItem('chat');
    if (saved) setMessages(JSON.parse(saved));
}, []);

const handleSend = async () => {
    if(message.trim().length < 1 || loading) return;
    if(messages[messages.length-1]?.isTyping) return;
    const userMessage: ChatMessage = {
    role: 'user',
    content: message,
    };

    const typingMessage: ChatMessage = {
    role: 'assistant',
    content: '...',
    isTyping: true,
    };
    setMessages(prev=>[...prev,userMessage,typingMessage]);
    setMessage("");
    setLoading(true)
    const data = await getGroqResponse(message);   
    if(data != "Oops, something went wrong."){
        setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = {
                role: 'assistant',
                content: '',
            };
            return copy;
            });
    } else{
        setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
            role: 'assistant',
            content: '',
        };
        return copy;
        });
    }
    const text =
    data !== "Oops, something went wrong."
    ? data
    : "Error. Please try again.";
    typeText(text, (partial) => {
            setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = {
                role: 'assistant',
                content: partial,
                isTyping: text != partial
            };
            return copy;
            });
        });
    setLoading(false);
    
}

const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>)=>{
    if (e.key === 'Enter' && !e.shiftKey) { 
        e.preventDefault();
            handleSend();
    }
}

    return isOpen ?  <div className="chat-window">
        <div className="chat-header">
        <span>Aylon's Assistant</span>
        <button className="chat-close" onClick={() => setIsOpen(false)}>
            ✕
        </button>
        </div>

        <Body messages={messages}/>

        <div className="chat-input">
        <input onKeyDown={(e)=>handleKeyDown(e)} onChange={e=>setMessage(e.target.value)} value={message} placeholder="Type a message..." />
        <button onClick={()=>handleSend()}>Send</button>
        </div>
    </div>:
    <div className="chat-launcher">

        <button onClick={()=>setIsOpen(true)} className="chat-button">
            <span className="logo">&gt;</span>
            <span className="cursor">_</span>
        </button>
        <span className="chat-hint">
            {displayText}
            <span className="typing-dots"></span>
            </span>
    </div>
}

export default ChatAssitant;