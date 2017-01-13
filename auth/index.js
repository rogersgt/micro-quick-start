const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', 4000);

app.get('/auth', function(req,res) {
  res.json({server: 'Authorization'})
});

app.listen(app.get('port'), () => {
  console.log('Authorization Server running on port: ' + app.get('port'));
});
