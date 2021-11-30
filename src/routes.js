const express = require('express');
const app = express();
const {getZoneId} = require('../src/app')

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});
app.get('/zone', async (req, res) => {
  const data = await getZoneId(req.query.lat,req.query.log)
  console.log("route data", data)
  res.status(200).send(`Hello Zone! ${data}`)
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});