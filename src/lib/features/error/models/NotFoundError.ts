import { BaseError } from "./BaseError"

export class NotFoundError extends BaseError {
    constructor(source: string, code: string, message: string, status: number = 404) {
        super(status, source, code, message);
    }
}