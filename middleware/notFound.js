const notFound = (req, res) => {
  return res.status(404).send("The Route doesn't exist");
};

module.exports = { notFound };
