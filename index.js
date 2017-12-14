const express = require('express')
const app = express()
const palettes = require('./palettes');

const getRandomPalletteIndex = () => {
  return (Math.random() * palettes.length).round();
}

const getRandomPallette = () => {
  return palettes[getRandomPalletteIndex()];
}

app.get('/', (req, res) => res.send(getRandomPallette()))

app.listen(3000, () => console.log('Color Karma listening on port 3000!'))