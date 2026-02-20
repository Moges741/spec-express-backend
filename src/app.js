import express from 'express' 
const app = express();
import router from './routes/users.routes.js'

app.use('/', router);

app.listen(4000);
