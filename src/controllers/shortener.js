const { modelShorten, modelRetrieve } = require('../models/shortener')

const { PORT } = process.env;

const shorten = (request, response) => {
  const { url } = request.body; 

  if(!url){ 
    return response.status(400).json({ Error: "No url to be shortened!" });
  }

  const id = modelShorten(url);

  return response.status(200).json({ shortUrl: `http://localhost:${PORT}/short/${id}` });
}

const retrieve = (request, response) => {
  const { id } = request.params;

  const url = modelRetrieve(id);

  if (!url) {
    return response.status(404).json({ Error: "PAGE NOT FOUND" });
  }

  return response.status(308).redirect(url);
}

module.exports = {
  shorten,
  retrieve,
}
