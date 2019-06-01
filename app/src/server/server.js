/* *
  title: server.js 

  date: 5/31/2019

  author:  javier olaya

  description: the Maing component that handles the backend logic for the url scrape
         
 */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

/* define the setup for the server*/
const IP = 'localhost';
const PORT = 3000;
const PUBLIC_DIR = 'build';

const app = express();

app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(PUBLIC_DIR));


app.listen(PORT,IP, ()=>{
  console.log(`${Date.now()} - server running at http://${IP}:${PORT}`);
});

/* 
 @description get request will be received evalate the
 word frequncy in the SourceContent

 */
app.get('/', (req, res, next)=>{
  let word = req.query.word;
  let SourceContent = req.query.SourceContent;
  SourceContent = SourceContent.toLowerCase();

  let re = new RegExp(word, "g")
  let count = (SourceContent.match(re, "regex" ) || []).length;

  let time = new Date();
  res.setHeader("Content-Type", "application/x-www-form-urlencoded");
  res.send({"count":count, "word": word, "time": time, "url":`http://${IP}:${PORT}/${req.url}` });
});
