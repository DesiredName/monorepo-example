import { User } from '@monorepo/db-client-entries';
import DBClientServiceBuilder from '@monorepo/db-client';
import { Router, Request, Response } from 'express';

const router = Router();
const users_service = DBClientServiceBuilder({
    connection_string: 'https://some.domain.com/api'
});

router.get('/list', async (req: Request, res: Response<User[]>) => {
    const list = await users_service.users.list();

    if (list.is_ok === true) {
        res.json(list.data);
    } else {
        res.json([]);
    }
});

export default router;
