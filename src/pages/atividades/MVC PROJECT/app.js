const express = require('express');
const fs = require('fs');
// import { controller } from "./src/controller.js";
// controller.iniciar();
;
const app = express()
const port = 3000;

app.use(express.static('/'));

app.get("/",(request,response) => {
    fs.readFile('data.json', 'utf8', (err, data) =>{
        if (err) {
            console.error(err);
            response.status(500).send('Error reading the file')
        return
        }

        const jsonData = JSON.parse(data);
        response.send(jsonData)
    })
})

app.listen()