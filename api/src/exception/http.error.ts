export class HttpError extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super(message);
        this.statusCode = statusCode
    }

    get body() {
        return {
            message: this.message
        }
    }
}