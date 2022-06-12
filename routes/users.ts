import * as Router from 'koa-router';
import User from '../controller/user';

const router = new Router();

router.prefix('/users');

router.get('/user', User.getUsers);

export default router;
