import { Router } from "express"; 
import { libro } from "./controller.js";

//instancio ruta
export const router = Router();

router.get('/libros', libro.getAll);
router.get('/libro/:id', libro.getOne);

router.post('/libros/add', libro.add);
router.put('/libros/update', libro.update)
router.delete('/libros/delete', libro.delete);