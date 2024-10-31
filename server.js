const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post('/submit', (req, res) => {
  const { name, email, text } = req.body;
  console.log('Received data:', { name, email, text });

  res.json({ message: `Thank you for your interest, ${name}.` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
