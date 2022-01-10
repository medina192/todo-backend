
const express  = require('express');
const http    = require('http');
const path    = require('path');
const cors    = require('cors');

const db = require("../models/db");


db.sequelize.sync({ alter: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//db.sequelize.sync();

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.server = http.createServer(this.app);
    }

    middlewares(){
        this.app.use( express.static( path.resolve( __dirname, '../public') ) );

        this.app.use( cors() );

        this.app.use( express.json() );
        
        this.app.use( '/api', require('../routes/crud') );
    }



    execute(){

        this.middlewares();

        this.server.listen( this.port, ()=> {
            console.log('server running on port ', this.port);
        });
    }

}

module.exports = Server;