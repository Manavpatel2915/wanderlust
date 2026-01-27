import db from '../config/sqldbconnnect';
// import { where } from 'sequelize';
// import { error } from 'node:consol';
const User = db.User;
const Post = db.Post;
const addUser = async (req, res) => {
    const data = req.body;
    try {
        const newUser = await User.create(data);
        const NewPost1 = await Post.create({
            title: "first_post",
            content: "wonderfull post ",
            image: "hello.jpg",
            like: 10,
            user_id: newUser.id
        });
        const NewPost2 = await Post.create({
            title: "Secound_post",
            content: "nice post ",
            image: "2nd.jpg",
            like: 20,
            user_id: newUser.id
        });
        return res.status(201).json(newUser);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Failed to create user',
            error: error instanceof Error ? error.message : error
        });
    }
};
const allUser = async (req, res) => {
    const data = req.body;
    try {
        const newUser = await User.create(data);
        return res.status(201).json(newUser);
    }
    catch (error) {
        return res.status(500).json({
            message: 'Failed to create user',
            error: error instanceof Error ? error.message : error
        });
    }
};
export { addUser, allUser, };
//# sourceMappingURL=UserController.js.map