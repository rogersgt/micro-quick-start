const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', 5000);

app.get('/message', (req,res) => {
  res.json({
    server: 'Message'
  })
});

app.listen(app.get('port'), () => {
  console.log('Message Server running on port: ' + app.get('port'));
});
