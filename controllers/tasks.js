const getAllTasks = (req, res) => {
  res.send("all tasks");
};
const createTask = (req, res) => {
  res.json({ success: true, data: req.body });
};
const getTask = (req, res) => {
  res.send("single task");
};
const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};
const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
