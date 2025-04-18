const express = require('express');
const app = express();
app.use(express.json());

let tasks = [
  { id: 1, title: 'Faire les courses' },
  { id: 2, title: 'Étudier ExpressJS' }
];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).send('Tâche non trouvée');
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).send('Tâche non trouvée');
  task.title = req.body.title;
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.send('Tâche supprimée');
});

app.listen(3000, () => console.log('Serveur lancé sur http://localhost:3000'));
