const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
// const api = require('./Routes/apiroutes');
// const html = require('./Routes/htmlRoutes');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require ('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// app.use('/api', api);
// app.use('/', html);

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});