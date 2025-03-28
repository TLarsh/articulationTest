const Test = require('../models/Test');

exports.createTest = async (req, res) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    res.json(test);
  } catch (error) {
    res.status(404).json({ message: 'Test not found' });
  }
};
