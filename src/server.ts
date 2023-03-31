import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { userRoutes } from '@routes/UserRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);

app.listen((process.env.PORT || 80), () => {
    console.log(`Server running on port ${process.env.PORT || 80}`);
});
