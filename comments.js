// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
  {
    name: 'Stacey',
    comment: 'Good job!',
  },
  {
    name: 'Emilia',
    comment: 'Really cool!',
  },
  {
    name: 'Rob',
    comment: 'Well done!',
  },
];

// Create a route for /comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});