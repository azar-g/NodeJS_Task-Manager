const Task = require("../models/Task");
const asyncHandler = require("../middleware/asyncHandler");
const { customError } = require("../errors/custom_errors");

const getAllTasks = asyncHandler(async (req, res, next) => {
  const allTasks = await Task.find({});
  res.status(200).json({ success: true, tasks: allTasks });
});

const createTask = asyncHandler(async (req, res, next) => {
  const task = await Task.create(req.body);
  res.status(200).json({ task });
});

const getTask = asyncHandler(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({
    _id: taskId,
  });
  if (!task) {
    return next(customError(404, "No Task Found"));
    // return res.status(404).json({ msg: "No Task Found" });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncHandler(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({
    _id: taskId,
  });
  if (!task) {
    return next(customError(404, "No Task Found"));
  }
  res.status(200).json({ msg: `task with id ${taskId} deleted` });
});

const updateTask = asyncHandler(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(customError(404, "No Task Found"));
  }
  res.status(200).json({ succes: true, data: task });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
