import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app = express() as Application;

app.set('trust proxy', true);
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb' }));
app.disable('x-powered-by');
app.use(cors());

app.use(async (req, res, next) => {
  try {
    // handle authentication here
    console.log('here to handle common middleware');
    next();
  } catch (error) {
    next(error);
  }
});

app.get('/api/v1', (req: Request, res: Response, next): void => {
  try {
    console.log('GET /api/v1');
    const data = { message: 'Hello World' };
    res.status(200).json(data);
    return;
  } catch (error) {
    next(error);
  }
});


process.on('unhandledRejection', (err: any) => {
  console.error('unhandled rejection:', err);
});

export { app };
