import React, { useState } from 'react';
import Message, { MessageBody } from './ComponentsAlzhibot/Message';
import { Link } from 'react-router-dom';
import './Alzhibot.css'; // Importa el archivo CSS
import iconchatbot from "../assets/iconchatbot.svg";
import iconinteractua from "../assets/iconinteractua.svg";
import iconpaciente from "../assets/iconpaciente.svg";
import iconHome from "../assets/iconHome.svg";
import iconPost from "../assets/iconPost.svg";

const Alzhibot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message) => {
        const userMessage = { sender: false, author: 'tú:', text: message };
        setMessages([...messages, userMessage]);
        setLoading(true);

        const response = await fetch('http://52.14.122.227:5005/webhooks/rest/webhook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sender: 'user1', message: message })
        });

        const data = await response.json();
        const botMessages = data.map((msg) => ({ sender: true, author: 'Alzhibot:', text: msg.text }));
        setMessages([...messages, userMessage, ...botMessages]);
        setLoading(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(input);
        setInput('');
    };

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <Message key={index} sender={msg.sender}>
                        <MessageBody author={msg.author} text={msg.text} />
                    </Message>
                ))}
                {loading && (
                    <div className="loading-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>

            <form onSubmit={handleSubmit} className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="form-control me-2"
                />
                <button type="submit" className="btn custom-btn">Enviar</button>
            </form>
            <nav className='nav'>
                <Link to="/" className="nav_category">
                    <img src={iconHome} className='iconCategories_nav' alt="IconAlzhibot" />
                    Inicio
                </Link>
                <Link to="/Pacientes" className="nav_category">
                    <img src={iconpaciente} className='iconCategories_nav' alt="IconAlzhibot" />
                    Pacientes
                </Link>
                <Link to="/Post" className="nav_category">
                    <img src={iconPost} className='iconCategories_nav' alt="IconAlzhibot" />
                    Post
                </Link>
                <Link to="/interactua" className="nav_category">
                    <img src={iconinteractua} className='iconCategories_nav' alt="IconAlzhibot" />
                    Interactua
                </Link>
                <Link to="/alzhibot" className="nav_category">
                    <img src={iconchatbot} className='iconCategories_nav' alt="IconAlzhibot" />
                    Alzhibot
                </Link>
            </nav>
        </div>
        
    );
};

export default Alzhibot;
