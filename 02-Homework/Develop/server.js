const express = require('express');
const app = express();
const PORT = process.env.PORT || 5050;
const api = require('./Routes/apiroutes');
const html = require('./Routes/htmlRoutes');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);

app.listen(PORT, () =>{
    console.log(`App listening on PORT: ${PORT}`);
})