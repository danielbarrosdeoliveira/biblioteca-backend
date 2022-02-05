const express = require("express")

const app = express();

app.get('/', (req, res) => {
  res.send("Hello World!")
})

app.listen(process.env.PORT || 3333, () => {
  console.log('Back-end started! 🚀🚀')
})