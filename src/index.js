const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const { generateRandomId } = require('./helpers');

const { RANDOM_ID_SIZE, PORT } = process.env;

const app = express();

app.use(express.json());

const urlsMap = {};

app.post('/shortener', (request, response) => { 
  const { url } = request.body; 

  if(!url){ 
    return response.status(400).json({ Error: "No url to be shortened!" });
  } 
  
  const id = generateRandomId(RANDOM_ID_SIZE);
  urlsMap[id] = url;

  return response.status(200).json({ shortUrl: `http://localhost:${PORT}/short/${id}` });
});

app.get('/short/:id', (request, response) => {
  const { id } = request.params;
  const url = urlsMap[id];

  if (!url) {
    return response.status(404).json({ Error: "PAGE NOT FOUND" });
  }
  
  return response.status(308).redirect(url);
});

app.listen(PORT);
