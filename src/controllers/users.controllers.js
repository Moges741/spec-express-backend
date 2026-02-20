let users = [];
let idIncrementor = 0;
const createUser = (req, res) => {
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
       res.json({message : error.message})
        
    }
}
const getUsers = (req, res) => {
    try {
        res.json(users);   
    } catch (error) {
       res.json({message : error.message})
    }
}
const getUserById = (req, res) => {
    try {
        const user= users.find(u => u.id === Number(req.params.id));
        if(!user){
            res.status(404).json({message: "User not found"});
        }
        res.json(user) 
    } catch (error) {
    res.json({message : error.message})
    }
}
const updateUser = (req, res) =>{
    try {
        const user = users.find(u => u.id === Number(req.params.id));
        if(!user){
            res.json({message : 'User not found'})
        }
    user.name = req.body.name || user.name;
    res.json(user)

    } catch (error) {
    res.json({message : error.message})

    }
}

const deleteUser = (req, res) => {
    try {
        const index = users.findIndex(u => u.id === Number(req.params.id));
        if(index === -1){
            res.json({message : 'User not found'})
        }
    
        
    } catch (error) {
        
    }
}