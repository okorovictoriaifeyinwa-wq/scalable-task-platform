const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Tasks array (temporary storage)
let tasks = [];

// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST new task
app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});