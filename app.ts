import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Define routes here, for example:
app.get('/api', (req, res) => {
  res.send('Hello World!');
});

export default app;
