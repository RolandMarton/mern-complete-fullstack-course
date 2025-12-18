import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import ratelimit from './middlewares/rateLimiter.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(ratelimit);

// Routes
app.use('/api/notes', notesRoutes);

// Start server after DB connection
connectDB().then(() => {
	app.listen(PORT, () => {
		console.log('Server is running on port', PORT);
	});
});
