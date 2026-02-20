let users = [];
let idIncrementor = 0;
const createUser = (req, res, next) => {
    try {
        const {name} = req.body;
        if(!name) {
            res.json({message : "Name is Required"});
        }
        const newUser = {
            id : idIncrementor++,
            name
        }
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        next(error)
        
    }
}
const getUsers = (req, res, next) => {
    try {
        res.json(users);   
    } catch (error) {
        next(error)   
    }
}
const getUserById = (req, res, next) => {
    try {

        
    } catch (error) {
        
    }
}