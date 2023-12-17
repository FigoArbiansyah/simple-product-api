export class InternalServerError extends Error {
  constructor(message = 'Internal Server Error') {
    super(message);
    this.name = 'Internal Server Error';
    this.date = new Date();
  }
}