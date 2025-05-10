import express from 'express';
import { serverConfig } from './config/server.config';

const app = express();

const { port, host, url } = serverConfig;

app.listen(port, host, () => console.info(`Servidor rodando em ${url}`));