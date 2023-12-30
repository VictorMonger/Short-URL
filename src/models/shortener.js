const { RANDOM_ID_SIZE, ENCODE_CHARACTERS } = process.env;

const urlsMap = {};

const modelShorten = (url) => {
  const id = generateRandomId(RANDOM_ID_SIZE);
  urlsMap[id] = url;

  return id;
}

const generateRandomId = (idSize) => {
  let randomId = '';

  for (let i = 0; i < idSize; i++) {
    const randomPosition = Math.floor(Math.random() * ENCODE_CHARACTERS.length);
    randomId += ENCODE_CHARACTERS.charAt(randomPosition); 
  }

  return randomId;
}

const modelRetrieve = (id) => {
  const url = urlsMap[id];

  return url;
}

module.exports = {
  modelShorten,
  modelRetrieve,
}
