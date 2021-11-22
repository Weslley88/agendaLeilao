const express = require('express');
const path = require('path');
const leilao = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/dist/${leilao}`));

app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/${leilao}/index.html`));
});

app.listen(process.env.PORT || 8080);