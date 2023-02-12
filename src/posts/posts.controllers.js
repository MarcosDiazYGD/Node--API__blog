const Posts = require("../models/posts.models");

const findAllPosts = async () => {
    //? Your code here:
    const data = await Posts.findAll();
    return data;
};

const findPostById = async (id) => {
    //? Your code here:
    const data = await Posts.findOne({
        where: {
            id: id,
        },
    });
    return data;
};

const createPost = async (post) => {
    //? Your code here:
    const { content, userName, isPublished } = post;
    const newPost = {
        content: content,
        userName: userName,
        isPublished: isPublished,
    };
    const data = await Posts.create(newPost);
    return data;
};

const updatePost = async (id, updt) => {
    //? Your code here:
    const data = await Posts.update(updt, {
        where: {
            id: id,
        },
    });

    return data;
    // [1] Se refiere al numero de datos actualizados
    // [0] Significa que el id no existe
};

const deletePost = async (id) => {
    //? Your code here:
    const data = await Posts.destroy({
        where: {
            id: id,
        },
    });
    return data;
    // 1 Significa que todo salio bien
    // 0 Significa que el id no existe
};

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost,
};
