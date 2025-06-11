import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

// MIDDLEWARES

// CORS
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);
// JSON VALIDATER AND LIMITER
app.use(express.json({ limit: '16kb' }));

app.use(
    express.urlencoded({
        extended: true,
        limit: '16kb',
    })
);

app.use(express.static('public'));

app.use(cookieParser());

// ROUTES
// import userRouter from './api/routes/user.routes.js';
import productRoutes from './api/routes/product.routes.js'



app.use('/api/products', productRoutes);




export { app };
