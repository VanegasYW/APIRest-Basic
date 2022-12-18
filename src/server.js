const express = require('express');
const cors = require('cors');
const conn = require('../public/db/config');

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
    
        this.connectDB()
        this.middleware()
        this.routes()
    }

    connectDB(){
        conn()
    }

    middleware(){
        this.app.use(express.static("/public"))
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(){
        this.app.use("/api/users/", require("../public/routes/users.routes"))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Puerto escuchando en: localhost:${this.port}`);
        })
    }
}

module.exports = Server