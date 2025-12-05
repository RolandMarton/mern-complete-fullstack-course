import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../../controllers/notesController.js";

const router = express.Router();

router.get('/', getAllNotes);
router.post('/:id', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;