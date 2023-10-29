import express from 'express';
import { json } from 'body-parser';
import cors, { CorsOptions } from 'cors';
import cookieParser from 'cookie-parser';
import { companyRoutes } from './routes/companyRoute';
import { userRoutes } from './routes/userRoute';

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

// readdirSync('./src/routes/').map((route: string) => {
//   console.log('imported: ', route);
//   app.use('/api/v1', require('./routes/' + route));
// });

app.use('/api/v1', companyRoutes, userRoutes);

app.all('*', async (req, res) => {
  res.send('all');
});

export { app };
