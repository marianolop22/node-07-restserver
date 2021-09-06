const { request, response } = require('express');


const userGet = (req = request,res = response) => {

    const {q, nombre = 'no name', apikey} = req.query;

    res.json({
        msg: 'peticion a la api - controlador',
        q,
        nombre, apikey
    });
}

const userPut = (req = request,res = response) => {

    const {id} = req.params; //esto es para extraer :id



    res.status(400).json({
        msg: 'put a la api',
        id
    })
}

const userPost = (req,res = response) => {

    const {nombre, edad} = req.body;

    res.status(201).json({
        msg: 'post a la api',
        nombre,
        edad
    });
}

const userPatch = (req = request,res = response) => {
    res.json({
        msg: 'patch a la api'
    });
}

userDelete = (req = request,res = response) => {
    res.json({
        msg: 'delete a la api'
    });
}

module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}