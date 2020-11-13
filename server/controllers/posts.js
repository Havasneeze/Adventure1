import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();

export const getPosts = async (req, res) => {  // make with async and await
    try {
        const postMessages = await PostMessage.find(); //retrieving data from DB  
        //takes time so this is an asychronous action
        console.log(postMessages);
        res.status(200).json(postMessages); //returns all messages that we have
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createPost = async (req, res) => {
    //post req have access to req.body
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}