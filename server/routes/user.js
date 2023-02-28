import { Router } from 'express';
import { authorize } from '../middlewares/authorization.js'
import { getData, updateUser, updateRole } from '../controllers/user.controller.js';

const router = Router();

router.get('/:query', authorize, getData );

router.patch('/update-user', authorize, updateUser );

router.patch('/update-role', authorize, updateRole );

export default router;