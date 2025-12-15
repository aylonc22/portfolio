import { useEffect, useState } from "react";
import './ChatAssitant.css'
import { getGroqResponse } from "../../api/groq";

const ChatAssitant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [respone, setRespone] = useState("");

    const PHRASES :string[] =[
        "👨‍💻 Peek my code?",
        "🚀 Check projects",
        "⚡ Curious about tech?",
        "💡 Ask a dev tip",
        "🛠 How I built this",
        "🤔 Wanna see logic?",
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

const handleSend = async () => {
    if(message.length < 1) return;
    const test = await getGroqResponse(message);
    setRespone(test);
    console.log(test);
}

    return isOpen ?  <div className="chat-window">
        <div className="chat-header">
        <span>Assistant</span>
        <button className="chat-close" onClick={() => setIsOpen(false)}>
            ✕
        </button>
        </div>

        <div className="chat-body">
        {respone.length > 0 ? respone :"Chat content goes here"}
        </div>

        <div className="chat-input">
        <input onChange={e=>setMessage(e.target.value)} placeholder="Type a message..." />
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