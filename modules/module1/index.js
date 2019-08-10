const { VError } = require('verror');

class NotImplementedError extends VError {
  constructor(...args) {
    super(...args);
  }
}

class UndefinedError extends VError {
  constructor(...args) {
    super(...args);
  }
}

module.exports = {
  NotImplementedError,
  UndefinedError
};

