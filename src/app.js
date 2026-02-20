import express from 'express' 
const app = express();
import router from './routes/users.routes.js'
import errorHandler from './middleware/error.middleware.js';
app.use(express.json());
app.use('/users', router);

//error should be last 
app.use(errorHandler);

app.listen(5000, ()=> {
    console.log("Server is running on 5000")
});
