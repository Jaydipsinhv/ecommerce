import cors from 'cors';
import express from 'express';

const app = express();

app.set('trust proxy', true);
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb' }));
app.disable('x-powered-by');

app.use(cors());

app.use(async (req, _res, next) => {
  try {
    // handle authentication here
    console.log('here to handle common middleware');
    next();
  } catch (error) {
    next(error);
  }
});

app.use('/api/v1', (req, res) => {
  // handle routes here
  console.log('here in api routes');
  res.sendStatus(200).json({ message: 'Ecommerce API running...!' });
});


process.on('unhandledRejection', (err: any) => {
  console.error('unhandled rejection:', err);
});

export { app };
