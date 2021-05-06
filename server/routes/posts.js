import {Router} from "express";
import { getPosts, createPost, updatePost } from "../controllers/post.controller.js"

const router = Router();

// localhost:5000/posts
router.get('/', getPosts);

router.post('/', createPost);

router.patch('/:id', updatePost);

export default router;