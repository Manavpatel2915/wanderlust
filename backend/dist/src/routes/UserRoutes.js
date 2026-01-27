import { Router } from "express";
import { addUser, allUser, } from '../controller/UserController';
const router = Router();
router.get('/adduser', addUser);
export default router;
//# sourceMappingURL=UserRoutes.js.map