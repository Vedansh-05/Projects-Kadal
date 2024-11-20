import express from "express";

import {getProject, createProject} from "../controllers/posts.js";

const router = express.Router();

router.get("/", getProject);
router.post("/", createProject);

export default router;