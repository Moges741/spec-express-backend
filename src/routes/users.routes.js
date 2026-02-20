import express from 'express';
const router = express.Router();

router.get('/users', (req, res)=> {
    res.send("All Users");
})
router.get('/users/:id', (req, res)=> {
    res.send(`Users with id ${req.params.id}`);
})

export default router;