import {writeFileSync, readFileSync} from "fs"
import { Classified } from "./Classified.js"

export class App {
    constructor() {
        this.adds = []
        this.count = 0
        this.file = "./data/adds.json"
    }

    read() {
        const content = readFileSync(this.file).toString()
        this.adds = JSON.parse(content)
        this.count = (this.adds[this.adds.length - 1] != undefined) ? this.adds[this.adds.length - 1].id : 0
    }

    write() {
        writeFileSync(this.file, JSON.stringify(this.adds))
    }

    // Création d'une nouvelle annonce
    createAdd(title, content, pictures) {
        const newAdd = new Classified(++this.count, title, content,pictures)
        this.adds.push(newAdd)
        this.write()
    }

    // Méthode pour récupérer une annonce par id
    findAddById(id) {
        return this.adds.find(a => a.id == id)
    }

    //Methode pour rechercher des annonces par titre
    searchAddsByTitle(search) {
        return this.adds.filter(a => a.title.includes(search))
    }
}
