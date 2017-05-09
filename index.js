'use strict'
//let express = require('express')
import express from 'express' // ist es6! kennt node so nicht, muss transpiliert werden !!

let app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world 2')
})
app.listen(3100)

// OK Projekt neu aufsezten OHNE su!, sonst sind viele Files gesperrt



