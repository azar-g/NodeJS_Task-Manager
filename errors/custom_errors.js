class CustomErrorApi extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    // this.message = message;
  }
}

const customError = (code, mes) => {
  console.log(code, mes);
  return new CustomErrorApi(code, mes);
};

module.exports = { CustomErrorApi, customError };
