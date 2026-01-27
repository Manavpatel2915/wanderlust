import { Router } from "express";
import {
    addUser,
    allUser,
} from '../controller/UserController'


const router = Router();

router.post('/adduser', addUser);
export default router;