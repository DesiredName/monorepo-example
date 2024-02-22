import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import catch_all from './middleware/catch-all.js';
import catch_error from './middleware/catch-error.js';
import BuildMainRouter from './routes/index.js';

const app = express();

// setup app

app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));

// setup routes
const routes = BuildMainRouter();

app.use('/api', routes);

// setup common routes middleware

app.use(catch_all);
app.use(catch_error);

// launch

const port = 3030;

app.listen(port, async () => {
    console.log(`API started ${port}`);
}).on('error', (ex) => {
    console.error('Unhandled error on API start', ex);
});
