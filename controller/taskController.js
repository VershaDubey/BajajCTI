const Task = require('../schema/Tasks');

// create Task
exports.createTask = async (req, res) => {
  try {
    const { title, due } = req.body;

    const task = await Task.create({
      title,
      due,
      user: req.user.id, // user id set from token
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

// get All Tasks of Logged-in User
exports.getTasks = async (req,res) => {
    try {
        // const task = await Task.find({user:req.user.id});
          const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    }catch (err){
        res.status(500).json({msg: 'Server error', error:err.message});
    }
};
// get Single Task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });

    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

// update Task
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { $set: req.body },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};

// delete Task
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!deletedTask) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    res.json({ msg: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
