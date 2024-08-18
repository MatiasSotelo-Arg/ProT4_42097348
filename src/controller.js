import {pool} from './database.js';

//Clase Libros
class LibroController {

    //Metodos

    //Buscar
    async getAll(req, res) {
        const [resultado] = await pool.query('SELECT * FROM libros');
    
        res.json(resultado);
    }   

    async getOne(req, res) {
        const {id} = req.params;

        const [resultado] = await pool.query('SELECT * FROM libros WHERE id = ?', [id]);

        res.json(resultado);
    }

    //Agregar
    async add(req, res) {
        const libro = req.body;

        const [resultado] = await pool.query(`INSERT INTO libros(nombre,autor,anio_publicacion,isbn) VALUES (?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn]);

        res.json({"Nuevo libro agregado:": resultado.insertId});
    }
}

export const libro = new LibroController();