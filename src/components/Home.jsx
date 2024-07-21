import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import iconchatbot from '../assets/iconchatbot.svg';
import iconespecialistas from '../assets/iconespecialistas.svg';
import iconinteractua from '../assets/iconinteractua.svg';
import iconpaciente from '../assets/iconpaciente.svg';
import trend1 from '../assets/trend1.png';
import trend2 from '../assets/trend2.png';
import trend3 from '../assets/trend3.png';
import iconPerson from "../assets/iconPerson.svg";
import iconHome from "../assets/iconHome.svg";
import iconPost from "../assets/iconPost.svg";

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="profile">
          <p>CLAUDIA ISABELA HINOJO</p>
          <Link to='/Profile'>
            <img src={iconPerson} className='iconPerson' alt="iconPerson"/>
          </Link>
        </div>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="categories">
            <Link to="/alzhibot" className="category">
                <img src={iconchatbot} className='iconCategories' alt="IconAlzhibot"/>
                Alzhibot
            </Link>
            <Link to="/especialistas" className="category">
                <img src={iconespecialistas} className='iconCategories' alt="IconAlzhibot"/>
                Especialistas
            </Link>
            <Link to="/interactua" className="category">
                <img src={iconinteractua} className='iconCategories' alt="IconAlzhibot"/>
                Interactua
            </Link>
            <Link to="/pacientes" className="category">
            <img src={iconpaciente} className='iconCategories' alt="IconAlzhibot"/>
                Paciente
            </Link>
        </div>
      </header>
      <section className="trending">
        <h2 className='title_trending'>Tendencias</h2>
        <div className='imgstrending'>
            <Link to="/pacientes" className='link_trending'>
                <img src={trend1} alt="" className='imgtrend'/>
            </Link>
            <Link to="/pacientes" className='link_trending'>
                <img src={trend2} alt="" className='imgtrend'/>
            </Link>
            <Link to="/pacientes" className='link_trending'>
                <img src={trend3} alt="" className='imgtrend'/>
            </Link>
        </div>
      </section>
      <section className='professionalvideos'>
        <h2 className='title_trending'>Videos profesionales</h2>
        <div className="videosprof">
            <iframe className='video_prof' src="https://www.youtube.com/embed/1YXIQxpYQ8Y?si=LdAB5GxBBkljzxJ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='video_prof' src="https://www.youtube.com/embed/OQUfsnkmsL8?si=zBX5nChV_ZtnbWwm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe className='video_prof' src="https://www.youtube.com/embed/1YXIQxpYQ8Y?si=LdAB5GxBBkljzxJ6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </section>
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

export default Home;
