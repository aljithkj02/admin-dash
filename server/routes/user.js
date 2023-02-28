import { Router } from 'express';
import { authorize } from '../middlewares/authorization.js'
import { getData, updateUser } from '../controllers/user.controller.js';

const router = Router();

router.get('/', authorize, getData )

router.patch('/update-user', authorize, updateUser )

export default router;