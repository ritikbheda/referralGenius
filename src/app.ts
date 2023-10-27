import express from 'express';
import { json } from 'body-parser';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000'];

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    // Check if the request origin is in the allowed origins list
    if (allowedOrigins.includes(origin || '') || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (cookies)
};

app.use(cors(corsOptions));
app.all('*', async (req, res) => {
  res.send('all');
});

export { app };
