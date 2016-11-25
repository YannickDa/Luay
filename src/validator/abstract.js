export default class AbstractValidator {
  constructor() {
    this.errors = [];
    this.isValid();
  }

  isValid(value, context = {}) {
    throw new Error(`You need to define a isValid method for ${this.constructor.name} validator`);
  }

  error(error) {
    this.errors.push(error);
    return this;
  }

  getErrors() {
    return this.errors;
  }
}
