import { Router } from 'express';
import { authorize } from '../middlewares/authorization.js'
import { getData } from '../controllers/user.controller.js';

const router = Router();

router.get('/', authorize, getData )

export default router;