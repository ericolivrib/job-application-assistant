import express from 'express';
import { serverConfig } from './config/server.config';
import { router } from './router';

const app = express();
app.use(express.json());
app.use(router);

const { port, host, url } = serverConfig;

app.listen(port, host, () => console.info(`Servidor rodando em ${url}`));