const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 9000;
const frontend = path.join(`${__dirname}/../frontend`);

app.use(express.json());

app.use('/pub', express.static(`${frontend}/public`));

app.get('/', (req, res) => {
    res.sendFile(path.join(`${frontend}/index.html`))
});


app.get("/image-list", (req, res) => {
    res.sendFile(path.join(`${frontend}/data.json`));
});

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
})

