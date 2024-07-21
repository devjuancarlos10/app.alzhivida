import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import profilePic from '../assets/iconHome.svg'; // Asegúrate de que la ruta a la imagen sea correcta
import iconchatbot from "../assets/iconchatbot.svg";
import iconinteractua from "../assets/iconinteractua.svg";
import iconpaciente from "../assets/iconpaciente.svg";
import iconHome from "../assets/iconHome.svg";
import iconPost from "../assets/iconPost.svg";

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <button className="back-button">←</button>
                <button className="vip-button">Actualiza a Alzhivida VIP</button>
            </div>
            <div className="profile-info">
                <img src={profilePic} alt="Claudia Isabela Hinojo" className="profile-pic" />
                <div className="profile-details">
                    <h2>CLAUDIA ISABELA HINOJO <span className="verified">✔</span></h2>
                    <p>¡Hola! Soy Claudia Isabela Hinojo, psicóloga gerontológica en una clínica. Mi enfoque es apoyar a cuidadores de adultos mayores. Ofrezco orientación y herramientas para hacer más llevadero el cuidado de sus seres queridos.</p>
                    <div className="tags">
                        <span className="tag">Perú - Lima</span>
                        <span className="tag">Psicólogo gerontológico</span>
                        <span className="tag">Presencial-virtual</span>
                    </div>
                </div>
            </div>
            <div className="profile-education">
                <h3>Educación</h3>
                <p>Título: Universidad Nacional</p>
                <p>Certificación: Especialista</p>
            </div>
            <div className="profile-contact">
                <h3>Contacto</h3>
                <p>📞 +51 987 654 321</p>
                <p>🐦 @Claudia</p>
                <p>📸 @Claudia</p>
                <p>📘 @Claudia</p>
            </div>
            <nav className='nav'>
                <Link to="/" className="nav_category">
                    <img src={iconHome} className='iconCategories_nav' alt="IconAlzhibot"/>
                    Inicio
                </Link>
                <Link to="/Pacientes" className="nav_category">
                    <img src={iconpaciente} className='iconCategories_nav' alt="IconAlzhibot"/>
                    Pacientes
                </Link>
                <Link to="/Post" className="nav_category">
                    <img src={iconPost} className='iconCategories_nav' alt="IconAlzhibot"/>
                    Post
                </Link>
                <Link to="/interactua" className="nav_category">
                    <img src={iconinteractua} className='iconCategories_nav' alt="IconAlzhibot"/>
                    Interactua
                </Link>
                <Link to="/alzhibot" className="nav_category">
                    <img src={iconchatbot} className='iconCategories_nav' alt="IconAlzhibot"/>
                    Alzhibot
                </Link>
            </nav>
        </div>
    );
};

export default Profile;
