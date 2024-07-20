import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import iconchatbot from '../assets/iconchatbot.svg';
import iconespecialistas from '../assets/iconespecialistas.svg';
import iconinteractua from '../assets/iconinteractua.svg';
import iconpaciente from '../assets/iconpaciente.svg';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="profile">
          <p>CLAUDIA ISABELA HINOJO</p>
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
      <section className="recommended-specialists">
        <h2>Especialistas Recomendados</h2>
        {/* Aquí van los especialistas */}
      </section>
      <section className="trending">
        <h2>Tendencias</h2>
        {/* Aquí van las tendencias */}
      </section>
    </div>
  );
};

export default Home;
