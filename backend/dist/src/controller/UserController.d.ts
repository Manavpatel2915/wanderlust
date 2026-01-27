import type { Request, Response } from 'express';
import type { UserBody } from '../types/type';
declare const addUser: (req: Request<{}, {}, UserBody>, res: Response) => Promise<Response>;
declare const allUser: (req: Request<{}, {}, UserBody>, res: Response) => Promise<Response>;
export { addUser, allUser, };
//# sourceMappingURL=UserController.d.ts.map