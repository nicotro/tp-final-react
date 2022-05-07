import express from "express"
import cors from "cors"
import { App } from "./classes/app.js"

// Un objet pour gérer les données
const AddService = new App

// Objet express
const api = express()

// Utilisation d'un middleware json
api.use(express.json())

// Gestion des cors
api.use(cors({origin:"*"}))

// Endpoint pour créer une annonce
api.post('/add', (req, res) => {
    const {title, content,pictures} = req.body
    if(title != undefined && content != undefined && pictures != undefined) {
        AddService.createAdd(title, content, pictures)
        res.json({message: "Add successfully added", error:false})
    }
    else
        res.json({message: "Please fill all requested fields", error:true})
})

// Endpoint pour récuperer la liste des annonces
api.get('/adds', (req, res) => {
    res.json(AddService.adds)
})

// Endpoint pour récupérer une annonce par son id
api.get('/add/:id', (req, res) => {
    const add = AddService.findAddById(req.params.id)
    if(add != undefined)
        res.json(add)
    else
    res.json({message: "Add id unknown", error:true})
})

// Endpoint pour la recherche
api.get('/adds/search/:search', (req, res) => {
    res.json(AddService.searchAddsByTitle(req.params.search))
})

// API sur port 80
api.listen(80, () => {
    AddService.read()
    console.log('listening on port 80...');
})