import express from 'express';
import multer from 'multer';
import path from 'path';
import pg from 'pg';
import cors from 'cors';
import fs from 'fs';

const { Pool } = pg;

// Configuración de Express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Configuración de la base de datos PostgreSQL
const pool = new Pool({
    user: 'postgres', 
    host: 'localhost', 
    database: 'alzhivida',
    password: 'iaai2024',
    port: 5432,
});

// Endpoint para obtener los posts
app.get('/api/posts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los posts:', error);
        res.status(500).send('Server Error');
    }
});

// Endpoint para subir el post
app.post('/api/posts', upload.array('media'), async (req, res) => {
    const { text, isAnonymous } = req.body;
    const files = req.files;
    const mediaUrls = files.map(file => file.path);
    const meGusta = 0;

    try {
        const result = await pool.query(
            'INSERT INTO posts (text, is_anonymous, media, meGusta) VALUES ($1, $2, $3, $4) RETURNING *',
            [text, isAnonymous, mediaUrls, meGusta]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error al insertar el post:', error);
        res.status(500).send('Server Error');
    }
});

// Endpoint para obtener los pacientes
app.get('/api/pacientes', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM pacientes ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Error al obtener los pacientes:', error);
        res.status(500).send('Server Error');
    }
});

// Endpoint para subir pacientes
app.post('/api/pacientes', upload.single('imagen'), async (req, res) => {
    const { nombre, edad, estado, ubicacion } = req.body;
    const imagen = req.file.path;

    try {
        const result = await pool.query(
            'INSERT INTO pacientes (nombre, edad, estado, ubicacion, imagen) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [nombre, edad, estado, ubicacion, imagen]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error al insertar el paciente:', error);
        res.status(500).send('Server Error');
    }
});

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
