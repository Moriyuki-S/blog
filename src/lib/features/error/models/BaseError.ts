export abstract class BaseError extends Error {
	readonly status: number;
	readonly source: string;
	readonly code: string;
	readonly message: string;

	constructor(status: number, source: string, code: string, message: string) {
		super();
		this.status = status;
		this.source = source;
		this.code = code;
		this.message = message;
	}
}
