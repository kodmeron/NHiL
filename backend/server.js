const express = require("express")

const app = express()

const PORT = process.env.PORT || 3000

// const schedule = require('./schedule.js')
// schedule.init()

app.get('/', (req, res) => {
  res.status(200).send('Shorty all good ahah')
})

app.post("/", (req, res) => {
  res.send("Baby d post request hours")
});


app.listen(PORT, () => {
  console.log(`Servern kutar fan sönder på port ${PORT}`);
});