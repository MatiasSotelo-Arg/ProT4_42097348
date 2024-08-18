import {pool} from './database.js';

//Clase Libros
class LibroController {

    //Metodos
    async getAll(req, res) {
        const [resultado] = await pool.query('SELECT * FROM libros');
    
        res.json(resultado);
    }   
}

export const libro = new LibroController();