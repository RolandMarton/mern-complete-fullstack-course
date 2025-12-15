import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());

app.use('/api/notes', notesRoutes);

dotenv.config();
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
	console.log('Server is running on port', PORT);

	connectDB();
});
