import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Pacientes.css";
import iconchatbot from "../assets/iconchatbot.svg";
import iconinteractua from "../assets/iconinteractua.svg";
import iconpaciente from "../assets/iconpaciente.svg";
import iconHome from "../assets/iconHome.svg";
import iconPost from "../assets/iconPost.svg";

const Pacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [nombre, setNombre] = useState("");
    const [edad, setEdad] = useState("");
    const [estado, setEstado] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [imagen, setImagen] = useState(null);

    useEffect(() => {
        fetchPacientes();
    }, []);

    const fetchPacientes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/pacientes');
            setPacientes(response.data);
        } catch (error) {
            console.error("Error fetching patients:", error);
        }
    };

    const handleAddPaciente = async () => {
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('edad', edad);
        formData.append('estado', estado);
        formData.append('ubicacion', ubicacion);
        formData.append('imagen', imagen);

        try {
            await axios.post('http://localhost:5000/api/pacientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            fetchPacientes();
            setNombre("");
            setEdad("");
            setEstado("");
            setUbicacion("");
            setImagen(null);
            setShowForm(false);
        } catch (error) {
            console.error("Error adding patient:", error);
        }
    };

    const handleDeletePaciente = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/pacientes/${id}`);
            fetchPacientes();
        } catch (error) {
            console.error("Error deleting patient:", error);
        }
    };

    return (
        <div className="pacientes">
            <h2>Pacientes</h2>
            <div className="pacientes-list">
                {pacientes.map((paciente) => (
                    <div key={paciente.id} className="paciente">
                        <img src={paciente.imagen} alt={paciente.nombre} />
                        <div className="characters_paciente">
                            <p>
                                <strong>Nombre:</strong> {paciente.nombre}
                            </p>
                            <p>
                                <strong>Edad:</strong> {paciente.edad}
                            </p>
                            <p>
                                <strong>Estado:</strong> {paciente.estado}
                            </p>
                            <p>
                                <strong>Ubicación:</strong> {paciente.ubicacion}
                            </p>
                            <button onClick={() => handleDeletePaciente(paciente.id)}>
                                Borrar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button className="floating-button" onClick={() => setShowForm(true)}>
                +
            </button>
            {showForm && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Agregar Paciente</h2>
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="Edad"
                            value={edad}
                            onChange={(e) => setEdad(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Ubicación"
                            value={ubicacion}
                            onChange={(e) => setUbicacion(e.target.value)}
                        />
                        <input
                            type="file"
                            onChange={(e) => setImagen(e.target.files[0])}
                        />
                        <button onClick={handleAddPaciente}>Agregar Paciente</button>
                        <button onClick={() => setShowForm(false)}>Cancelar</button>
                    </div>
                </div>
            )}
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

export default Pacientes;
