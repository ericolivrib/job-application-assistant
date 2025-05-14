import express from 'express';
import mongoose from 'mongoose';

import { serverEnv } from './env/server.env';
import { router } from './router';
import { mongoEnv } from './env/mongo.env';

const { url: mongoUrl } = mongoEnv;

mongoose.connect(mongoUrl)
    .then((_) => console.info('DB connected'))
    .catch((error) => console.error('DB failed: ' + error));

const app = express();
app.use(express.json());
app.use(router);

const { port, host, url } = serverEnv

app.listen(port, host, () => console.info(`Servidor rodando em ${url}`));