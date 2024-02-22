import { Router } from 'express';

import users from './users/index.js';

function BuildMainRouter() {
    const router = Router();

    router.use('/users', users);

    return router;
}

export default BuildMainRouter;
