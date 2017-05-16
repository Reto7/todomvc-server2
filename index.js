'use strict'
//let express = require('express')
import express from 'express' // ist es6! kennt node so nicht, muss transpiliert werden !!
import fs from 'fs'  //filesystem
import bodyparser from 'body-parser'
import cors from 'cors'

let app = express()  //express server
app.use(bodyparser.json())  //fuer express server, achtung () nicht vergessen!
app.use(cors())  //security  , achtung () nicht vergessen!


// GET
app.get('/items', function (req, res) {
    //res.send('hello world 2')
    //res.send(  [ {id:1} ]  )
    let content = fs.readFileSync('data.json','utf8')
    res.json(content)
})

// POST
app.post('/items', function (req, res) {
    // data.json muss initial ein leeres array enthalten []
    // oder natuerlich mit einem objekt drin [{"title":123}]
    console.log(req.body)
    let data = req.body
    // aktuelles file auslesen
    let content = fs.readFileSync('data.json','utf8')
    console.log('content:' +content)
    let json = JSON.parse(content)
    // aus dem request zum bestehenden json hinzufugen
    json.push(data)
    // ganzes file schreiben
    fs.writeFileSync('data.json', JSON.stringify(json), 'utf8')
    res.json('ok')
})

app.listen(3100)

// OK Projekt neu aufsezten OHNE su!, sonst sind viele Files gesperrt



