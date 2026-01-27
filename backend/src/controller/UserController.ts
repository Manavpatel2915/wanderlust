import type{ Request, Response } from 'express';
import db from '../config/sqldbconnnect';
import type { UserBody, ParamWithId,PostBody} from '../types/type';
// import { where } from 'sequelize';
// import { error } from 'node:consol';

const User = db.User;
const Post = db.Post;

const addUser = async (
  req: Request<{}, {}, UserBody>,
  res: Response
): Promise<Response> => {
  const data = req.body;
try{
  const newUser = await User.create(data);
  
  const NewPost1 = await Post.create(
    {
      title : "first_post",
      content:"wonderfull post ",
      image :"hello.jpg",
      like : 10,
      user_id :newUser.user_id
    }
  );
  const NewPost2 = await Post.create(
    {
      title : "Secound_post",
      content:"nice post ",
      image :"2nd.jpg",
      like : 20,
      user_id : newUser.user_id
    }
  )
  console.log(newUser.user_id);
  
  return res.status(201).json(newUser);
} catch (error: unknown) {
        return res.status(500).json({
            message: 'Failed to create user',
            error: error instanceof Error ? error.message : error
        });
}
  
};
const allUser = async (
  req: Request<{}, {}, UserBody>,
  res: Response
): Promise<Response> => {
  const data = req.body;
try{
  const newUser = await User.create(data);
  
  return res.status(201).json(newUser);
} catch (error: unknown) {
        return res.status(500).json({
            message: 'Failed to create user',
            error: error instanceof Error ? error.message : error
        });
}
  
};
       
    


export {
    addUser,
    allUser,
}

     