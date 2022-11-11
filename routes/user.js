const express = require('express');
const users    = express.Router();

let dataBase = [
    {id:1, name:"Thu Aung", age:24},
    {id:2, name:"Win Htet", age:23},
    {id:3, name:"Ye Linn Aung", age:3}
];

users.get('/',(req,res)=>{
    res.json(dataBase);
});

users.get('/:id',(req,res)=>{
    let id = req.params.id;
    let callUser = dataBase.find(user=> user.id == id);
    if(callUser){
        res.json(callUser);
    }else{
        res.json({msg:"Your calling id Not Found Data!"});
    }
})

users.post('/',(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;
    let newUser = {
        id:id,
        name:name,
        age:age
    }
    dataBase.push(newUser);
    res.json(dataBase);
})

users.patch('/:id',(req,res)=>{
    let id = req.params.id;
    let editUser = dataBase.find(user=> user.id == id);

    if(editUser){
        editUser.id = req.body.id;
        editUser.name = req.body.name;
        editUser.age = req.body.age;
        res.json(dataBase);
    }else{
        res.json({msg:"Your edit id is Not Found Data!"});
    }
})

users.delete('/:id',(req,res)=>{
    let id = req.params.id;
    dataBase = dataBase.filter(user=> user.id != id);
    res.json(dataBase);
})



module.exports = users;