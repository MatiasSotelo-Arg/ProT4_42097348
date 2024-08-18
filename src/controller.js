import {pool} from './database.js';

//Clase Libros
class LibroController {

    //Metodos
    async getAll(req, res) {
        const [resultado] = await pool.query('SELECT * FROM libros');
    
        res.json(resultado);
    }   

    async getOne(req, res) {
        const {id} = req.params;

        const [resultado] = await pool.query('SELECT * FROM libros WHERE id = ?', [id]);

        res.json(resultado);
    }
}

export const libro = new LibroController();