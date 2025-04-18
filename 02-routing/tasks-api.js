const express = require('express');
const app = express();

app.use(express.json());

let tasks = [
  { id: 1, title: "Apprendre Express", done: false },
  { id: 2, title: "Faire les exercices", done: true },
];

app.get('/tasks', (req, res) => res.json(tasks));

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Tâche non trouvée");
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    done: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send("Tâche non trouvée");
  task.title = req.body.title || task.title;
  task.done = req.body.done ?? task.done;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3001, () => console.log('Tasks API running on http://localhost:3001'));
