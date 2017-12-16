const express = require('express');
var cors = require('cors')
const app = express()
const palettes = require('./palettes');

const getRandomPalletteIndex = () => {
  console.log(palettes)
  return Math.round(Math.random() * palettes.length-1)
}

const getRandomPallette = () => {
  return palettes[getRandomPalletteIndex()];
}

const getAllPallettes = () => {
  return palettes;
}

app.use(cors());

app.get('/', (req, res) => res.send(getRandomPallette()));
app.get('/all', (req, res) => res.send(getAllPallettes()));

app.listen(process.env.PORT || 3000);