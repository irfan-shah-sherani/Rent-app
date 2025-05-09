const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/Landing');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});