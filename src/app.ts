import express from 'express';

const app = express();

app.get('/', function(_req, res) {
  res.send('Hello World!');
});

export default app;