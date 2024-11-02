import express from 'express';
import { router as PatientsRouter } from './router/router';

const baseUrl = '/api';
const app = express();

app.use(express.json());

app.use(`${baseUrl}/patients`, PatientsRouter);

export { app };
