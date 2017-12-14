const express = require('express')
const app = express()
const palettes = require('./palettes');

const getRandomPalletteIndex = () => {
  console.log(palettes)
  return Math.round(Math.random() * palettes.length-1)
}

const getRandomPallette = () => {
  return palettes[getRandomPalletteIndex()];
}

app.get('/ck001p', (req, res) => res.send(getRandomPallette()))

app.listen(3000, () => console.log('Color Karma listening on port 3000!'))