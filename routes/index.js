const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();

const urls = {};

app.post('/shortener/', (request, response) => { 
  const { url } = request.body; 
  
  const generateRandomId = (idsize) => {
    let randomId = '';
    const characters = 
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < idsize; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length)); 
    }
    return randomId;
  }

  if(!url){ 
    response.status(400).json({ Error: "Insert a url to be shortened!" })
  } 
  
  const id = generateRandomId(6);
  urls[id] = url;
  
  response.send(`http://localhost:3000/${id}`);
});

app.get('/:id', (request, response) => {
  const id = request.params.id;
  const url = urls[id];

  url ? response.status(307).redirect(url) : response.status(404).json({ Error: "PAGE NOT FOUND" });
});

app.listen(process.env.PORT);
