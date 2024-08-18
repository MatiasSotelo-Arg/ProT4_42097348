import express from 'express';
import morgan from 'morgan';
import {router} from './routes.js';

const app = express();

//instanciando metodos 
app.set('port',3000);
app.use(morgan('dev'));
app.use(express.json());

app.use(router);

//levantamos servicio e indico a la app cual es el puerto
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
