import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Interactua.css';
import trend1 from '../assets/trend1.png';
import trend2 from '../assets/trend2.png';
import trend3 from '../assets/trend3.png';
import { FaShare, FaComment, FaHeart } from 'react-icons/fa';
import iconchatbot from "../assets/iconchatbot.svg";
import iconinteractua from "../assets/iconinteractua.svg";
import iconpaciente from "../assets/iconpaciente.svg";
import iconHome from "../assets/iconHome.svg";
import iconPost from "../assets/iconPost.svg";

const Interactua = () => {
    const [currentBanner, setCurrentBanner] = useState(0);
    const [posts, setPosts] = useState([]);

    const banners = [
        { id: 1, imgSrc: trend1 },
        { id: 2, imgSrc: trend2 },
        { id: 3, imgSrc: trend3 }
    ];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts');
                const sortedPosts = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
                setPosts(sortedPosts);
            } catch (error) {
                console.error('Error al obtener los posts:', error);
            }
        };

        fetchPosts();

        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleLike = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, meGusta: post.meGusta + 1 } : post
        ));
    };

    return (
        <div className="interactua">
            <h2>Recientes</h2>
            <div className="carousel">
                <div className="carousel-inner" style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
                    {banners.map(banner => (
                        <div className="carousel-item" key={banner.id}>
                            <Link to="/Interactua">
                                <img src={banner.imgSrc} alt={`Banner ${banner.id}`} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="box_hashs">
                <Link>
                    <button className='btn_hash'>#Salud</button>
                </Link>
                <Link>
                    <button className='btn_hash'>#Mental</button>
                </Link>
                <Link>
                    <button className='btn_hash'>#Alzheimer</button>
                </Link>
            </div>
            <h2 className='title_post'>Publicaciones</h2>
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <img src={iconHome} alt={`${post.id} avatar`} />
                            <div className="post-info">
                                <p className="nombre">Juan</p>
                                <p className="comentario">{post.text}</p>
                            </div>
                        </div>
                        {post.media && post.media.length > 0 && (
                            <img src={post.media} alt={`Post ${post.id}`} className="post-img" />
                        )}
                        <div className="post-footer">
                            <div className="icon">
                                <FaShare />
                            </div>
                            <div className="icon">
                                <FaComment /> {post.comentarios}
                            </div>
                            <div className="icon" onClick={() => handleLike(post.id)}>
                                <FaHeart /> {post.meGusta}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
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

export default Interactua;
