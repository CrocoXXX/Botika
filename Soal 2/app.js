const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')
dotenv.config()
const port = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app