import React, { useState } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de tener axios instalado
import iconchatbot from "../assets/iconchatbot.svg";
import iconinteractua from "../assets/iconinteractua.svg";
import iconpaciente from "../assets/iconpaciente.svg";
import iconHome from "../assets/iconHome.svg";
import iconPost from "../assets/iconPost.svg";

const Post = () => {
    const [text, setText] = useState('');
    const [isAnonymous, setIsAnonymous] = useState(false);
    const [media, setMedia] = useState([]);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleToggleAnonymous = () => {
        setIsAnonymous(!isAnonymous);
    };

    const handlePost = async () => {
        const formData = new FormData();
        formData.append('text', text);
        formData.append('isAnonymous', isAnonymous);

        media.forEach(file => {
            formData.append('media', file);
        });

        try {
            const response = await axios.post('http://localhost:5000/api/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Post creado:', response.data);
        } catch (error) {
            console.error('Error al crear el post:', error);
        }
    };

    const handleMediaChange = (e) => {
        setMedia(Array.from(e.target.files));
    };

    return (
        <div className="post-container">
            <div className="post-header">
                <button className="back-button">←</button>
                <button className="publish-button" onClick={handlePost}>Publicar</button>
            </div>
            <textarea
                placeholder="Empieza a escribir aquí"
                value={text}
                onChange={handleTextChange}
                maxLength="500"
                rows="10"
            />
            <div className="media-options">
                <label className="media-button">
                    🖼️
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleMediaChange}
                        style={{ display: 'none' }}
                    />
                </label>
                <label className="media-button">
                    🎥
                    <input
                        type="file"
                        accept="video/*"
                        multiple
                        onChange={handleMediaChange}
                        style={{ display: 'none' }}
                    />
                </label>
            </div>
            <div className="media-preview">
                {media.map((file, index) => (
                    <div key={index} className="media-preview-item">
                        {file.type.startsWith('image/') ? (
                            <img src={URL.createObjectURL(file)} alt="preview" />
                        ) : (
                            <video src={URL.createObjectURL(file)} controls />
                        )}
                    </div>
                ))}
            </div>
            <div className="anonymous-toggle">
                <input
                    type="radio"
                    checked={isAnonymous}
                    onChange={handleToggleAnonymous}
                />
                <label>Post anónimo</label>
            </div>
            <div className="tag-options">
                <input
                    type="text"
                    placeholder="Añadir un tag"
                />
            </div>
            <nav className='nav'>
                <Link to="/" className="nav_category">
                    <img src={iconHome} className='iconCategories_nav' alt="IconHome"/>
                    Inicio
                </Link>
                <Link to="/Pacientes" className="nav_category">
                    <img src={iconpaciente} className='iconCategories_nav' alt="IconPaciente"/>
                    Pacientes
                </Link>
                <Link to="/Post" className="nav_category">
                    <img src={iconPost} className='iconCategories_nav' alt="IconPost"/>
                    Post
                </Link>
                <Link to="/interactua" className="nav_category">
                    <img src={iconinteractua} className='iconCategories_nav' alt="IconInteractua"/>
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

export default Post;
