const { CustomErrorApi } = require("../errors/custom_errors");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomErrorApi) {
    console.log("budur");
    return res.status(err.statusCode).json({
      msg: err.message,
    });
  }

  res.status(500).json({ msg: "Something went wrong" });
};

module.exports = errorHandler;
