import express from 'express'
import { createCourse } from './routes';

const app = express();

app.listen(3344);

app.get("/", createCourse)
