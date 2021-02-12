const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

app.use(express.json())


//models
require('./src/models/User')
const User = mongoose.model('users')
require('./src/models/Product')
const Product = mongoose.model('products')

//conexão db Mongo
require('./src/db/connect')

//GET
app.get('/users', async(req, res) => {
    const usersResponse = await User.find();
    const usersJson = await usersResponse;

    return res.json(usersJson); 
});

app.get('/products', async(req, res) => {
    const productsResponse = await Product.find();
    const productsJson = await productsResponse;

    return res.json(productsJson);
});


//POST
app.post("/users", async(req, res) => {
    const validate = await User.findOne({email:req.body.email})

    if(validate) {
        return res.json({message: "E-mail já cadastrado"})
    } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        });

        bcrypt.genSalt(10, (error, salt) => {
            //gerando o hash com salt
            bcrypt.hash(newUser.password, salt,(error, hash) => {
                if(error) {
                    res.json({message: "Erro ao cadastrar usuário"})
                } else{
                    //inserindo o hash na senha do usuário
                    newUser.password = hash
                    newUser.save()

                    res.json({message: "Cadastrado com sucesso", user: newUser})
                }
            })
        })        
    }    
});

app.post("/products", async(req, res) => {
    const validate = await User.findOne({email:req.body.email})

    if(validate) {
        return res.json({message: "E-mail já cadastrado"})
    } else {
        const newProduct = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
        });

        newProduct.save()

        res.json({message: "Cadastrado com sucesso", product: newProduct})

    }    
});

//PUT
app.put('/users/:id', async(req, res) => {
    const {id} = req.params
    //buscando um usuário
    const user = await User.findOne({_id: id})

    //alterando os dados do usuário
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password

    //salvando alterações
    user.save()

    res.json({message: "Dados alterados com sucesso!", user: user})
})


//DELETE
app.delete('/users/:id', async (req, res)=>{
    const{id} = req.params
    const user = await User.findOneAndDelete({ _id: id })

    res.json({message: "usuário deletado com sucesso", user: user})
})


app.listen(3333)