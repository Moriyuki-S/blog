import { BaseError } from './BaseError';

export class BadRequestError extends BaseError {
	constructor(source: string, code: string, message: string, status: number = 400) {
		super(status, source, code, message);
	}
}
