import {Router} from "express";
import { getPosts, createPost } from "../controllers/post.controller.js"

const router = Router();

// localhost:5000/posts
router.get('/', getPosts);

router.post('/', createPost);

export default router;