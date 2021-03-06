function SagaError(err, detail) {
  this.name = 'SagaError';
  this.message = err.message;
  this.detail = detail;
  this.stack = err.stack;
  this.sourceErr = err;
}

SagaError.prototype = Object.create(Error.prototype);
SagaError.prototype.constructor = SagaError;

export default SagaError;
