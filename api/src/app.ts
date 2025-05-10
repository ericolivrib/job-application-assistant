import express from 'express';

const app = express();

const host: string = String(process.env.SERVER_HOST);
const port: number = Number(process.env.SERVER_PORT);

app.listen(port, host, () => console.info(`Servidor rodando em ${host}:${port}`));