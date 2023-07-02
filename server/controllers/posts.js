import postMessage from "../models/postMessage.js";

export const getPost = async (req,res)=>{
    try{
        const postMessages = await postMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
};

export const createPost = async (req,res) =>{
    try{
        const post = req.body;
        const newpost = new postMessage(post);
        await newpost.save();

        res.json(201).json(newpost);
    }
    catch(error){
        res.json(409).json({message: error.message});
    }
}