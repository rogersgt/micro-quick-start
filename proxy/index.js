const express = require('express');
const app = express();
const httpProxy = require('http-proxy');

app.set('port', 3000);

const apiProxy = httpProxy.createProxyServer();

app.get("/auth", function(req, res){
  apiProxy.web(req, res, { target: 'http://localhost:4000' });
});

app.get("/user", function(req, res){
  apiProxy.web(req, res, { target: 'http://localhost:4500' });
});

app.get("/message", function(req, res){
  apiProxy.web(req, res, { target: 'http://localhost:5000' });
});


app.listen(app.get('port'), function() {
  console.log('Proxy Server running on port: ' + app.get('port'));
});
