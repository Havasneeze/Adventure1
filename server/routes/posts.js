import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js';
//don't forget to put .js for node.  In react we dont need it.


const router = express.Router();

//routes will be reached to localhost:5000/posts

router.get('/', getPosts);
router.get('/', createPost);

export default router;