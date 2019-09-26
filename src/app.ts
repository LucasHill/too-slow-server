import express from 'express';
import bodyParser from 'body-parser';
import { encryptPassword } from './controllers/encryption';

const app = express();
app.use(bodyParser.json());


app.post('/encryptPassword', encryptPassword);

export default app;