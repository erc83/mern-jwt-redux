import {Router} from "express";
import { getPosts, createPost, updatePost, deletePost } from "../controllers/post.controller.js"

const router = Router();

// localhost:5000/posts
router.get('/', getPosts);

router.post('/', createPost);

router.patch('/:id', updatePost);

router.delete('/:id', deletePost);



export default router;