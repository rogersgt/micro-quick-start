const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', 4500);

app.get('/user', (req,res) => {
  res.json({
    server: 'User'
  })
});

app.listen(app.get('port'), () => {
  console.log('User Server running on port: ' + app.get('port'));
});
