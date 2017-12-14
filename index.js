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

app.use(cors());

app.get('/ck001p', (req, res) => res.send(getRandomPallette()))

app.listen(process.env.PORT || 3000);