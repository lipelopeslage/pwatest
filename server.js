const http = require('http');
const express = require('express');
const fs = require('fs');
const resolve = require('path').resolve;
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(resolve(__dirname, 'src')));

app.get('/', (res) => {
    console.log('raiz')
  fs.readFile('./src/index.html', (content) => {
    res.send(content);
  });
});

app.listen(PORT, () => {
  console.log('Listening on http://localhost:'+PORT);
});
