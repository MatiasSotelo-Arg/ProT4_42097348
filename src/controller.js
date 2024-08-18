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

        const [resultado] = await pool.query(`INSERT INTO libros(nombre,autor,categoria,anio_publicacion,isbn) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn]);

        res.json({"Nuevo libro agregado:": resultado.insertId});
    }

    //Actualizar 
    async update(req, res) {
        const libro = req.body;

        const [resultado] = await pool.query(`UPDATE libros SET nombre=(?), autor=(?), categoria=(?), anio_publicacion=(?), isbn=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.anio_publicacion, libro.isbn, libro.id]);

        res.json({"registro actualizado": resultado.changedRows});
    }

    //Eliminar
    async delete(req, res) {
        const libro = req.body;

        const [resultado] = await pool.query(`DELETE FROM libros WHERE isbn=(?)`, [libro.isbn]);

        res.json({"libro eliminado": resultado.affectedRows});
    }
}

export const libro = new LibroController();