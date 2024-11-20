import express from 'express';
import { getProject, createProject } from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProject);
router.post('/', auth, createProject); 

export default router;