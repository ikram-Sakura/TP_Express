const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (_, file, cb) => {
    const types = /jpeg|jpg|png|gif/;
    const isValid = types.test(path.extname(file.originalname).toLowerCase());
    cb(null, isValid);
  }
});

app.use('/uploads', express.static('uploads'));

app.get('/', (req, res) => {
  res.send(`
    <h2>Upload Image</h2>
    <form method="post" enctype="multipart/form-data" action="/upload">
      <input type="file" name="image" required /><br>
      <button type="submit">Envoyer</button>
    </form>
  `);
});

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).send("Fichier invalide");
  res.send(`<h3>Image uploadée:</h3><img src="/uploads/${req.file.filename}" width="200"/>`);
});

app.listen(3008, () => console.log('Upload app: http://localhost:3008'));
