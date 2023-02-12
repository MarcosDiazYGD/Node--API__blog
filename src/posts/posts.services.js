const postControllers = require("./posts.controllers");

const getAllPosts = (req, res) => {
    postControllers
        .findAllPosts()
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
};

const postPost = (req, res) => {
    const post = req.body;
    if (!post.content || !post.userName) {
        res.status(404).json({
            message: "Missing data",
            fields: {
                content: "string",
                userName: "string",
            },
        });
    }
    postControllers
        .createPost(post)
        .then((data) => res.status(201).json(data))
        .catch((err) => res.status(400).json(err));
};

const getPostById = (req, res) => {
    postControllers
        .findPostById(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
};

const patchPost = (req, res) => {
    const id = req.params.id;
    const updt = req.body;
    postControllers
        .updatePost(id, updt)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
};

const deletePost = (req, res) => {
    postControllers.deletePost(req.params.id)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(400).json(err));
};

module.exports = {
    getAllPosts,
    postPost,
    getPostById,
    patchPost,
    deletePost,
};
