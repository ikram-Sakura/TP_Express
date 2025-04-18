const express = require('express');
const app = express();

const posts = [
  { id: 1, title: "Article 1", year: 2023, month: 12, category: "tech" },
  { id: 2, title: "Article 2", year: 2024, month: 4, category: "lifestyle" },
];

app.get('/posts/:year/:month?', (req, res) => {
  const { year, month } = req.params;
  const filtered = posts.filter(post =>
    post.year == year && (!month || post.month == month)
  );
  res.json(filtered);
});

app.get('/categories/:categoryName/posts', (req, res) => {
  const { categoryName } = req.params;
  const filtered = posts.filter(post => post.category === categoryName);
  res.json(filtered);
});

app.listen(3002, () => console.log('Blog API sur http://localhost:3002'));
