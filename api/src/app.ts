import express from 'express';
import mongoose from 'mongoose';

import { serverConfig } from './config/server.config';
import { router } from './router';

const mongodbUrl = String(process.env.MONGODB_URL);

mongoose.connect(mongodbUrl)
    .then((_) => console.info('DB connected'))
    .catch((_) => console.error('DB failed'));

const app = express();
app.use(express.json());
app.use(router);

const { port, host, url } = serverConfig;

app.listen(port, host, () => console.info(`Servidor rodando em ${url}`));