import express from 'express';
import mongoose from 'mongoose';

import { serverEnv } from './env/server.env';
import { router } from './router';
import { mongoEnv } from './env/mongo.env';
import { errorHandler } from './middleware/error.middleware';

const { url: mongoUrl } = mongoEnv;

mongoose.connect(mongoUrl)
    .then((data) => console.info('DB connected'))
    .catch((error) => console.error('DB failed: ' + error));

const app = express();
app.use(express.json());
app.use(router);
app.use(errorHandler);

const { port, host, url } = serverEnv

app.listen(port, host, () => console.info(`Servidor rodando em ${url}`));