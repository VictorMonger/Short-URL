const { ENCODE_CHARACTERS } = process.env;

const generateRandomId = (idsize) => {
  let randomId = '';

  for (let i = 0; i < idsize; i++) {
    const randomPosition = Math.floor(Math.random() * ENCODE_CHARACTERS.length);
    randomId += ENCODE_CHARACTERS.charAt(randomPosition); 
  }
  
  return randomId;
}

module.exports = {
  generateRandomId
};
