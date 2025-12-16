import { useEffect, useRef } from "react";
import type { ChatMessage } from "../../../Types/chat";
import './Body.css'

type BodyProps = {
    messages: ChatMessage[]
}
const Body = ({ messages }:BodyProps) => {

    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        chatEndRef.current?.scrollIntoView({behavior:"smooth"});
    },[messages]);
    
    return (
        <div className="chat-body">
            {messages.map((msg, i) => (
                    <div
                    key={i}
                    className={`chat-row ${msg.role === 'user' ? 'right' : 'left'}`}
                    >
                    {msg.role === 'assistant' && (
                        <div className="chat-avatar">
                            <span className="logo">&gt;</span>
                            <span className="cursor">_</span>
                        </div>
                    )}

                    <div className={`chat-bubble ${msg.role}`}>
                        {msg.isTyping ? (
                        <span className="typing-dots">
                            <span></span><span></span><span></span>
                        </span>
                        ) : (
                        msg.content
                        )}
                    </div>
                    {msg.role === 'user' && (
                        <div className="chat-user">
                            <span className="logo">&lt;</span>
                            <span className="cursor">_</span>
                        </div>
                    )}
                    <div ref={chatEndRef}/>
                    </div>
                ))}      
        </div>
    );
}

export default Body;