import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { userRoutes } from '@routes/UserRoutes';
import { machineRoutes } from '@routes/MachineRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);
app.use(machineRoutes);

app.listen((process.env.PORT || 80), () => {
    console.log(`Server running on port ${process.env.PORT || 80}`);
});
