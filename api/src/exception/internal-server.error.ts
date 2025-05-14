import { HttpError } from "./http.error";

export class InternalServerError extends HttpError {
    constructor(err: unknown) {
        super(500, 'Falha interna do servidor');
        console.error(err);
    }
}