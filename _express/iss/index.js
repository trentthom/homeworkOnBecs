const express = require('express')
const ejs = require("ejs")
const ys = require('yahoo-stock-prices')

const server = express()
server.set('view-engine', ejs)

const PORT = 1338

server.get('/', (req, res) => {
  res.render('home.ejs')
})

server.get('/iss', (req, res) => {
  res.render('iss.ejs')
})

server.get('/info', (req,res) => {
  const symbol = req.query.symbol
  console.log(symbol)
  ys.getCurrentPrice(symbol, (err, price) => {
    const returnPrice = price
    console.log('flag' + returnPrice); // 132.05
    res.render('info.ejs', {price: returnPrice, ticker: symbol })
});

})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
