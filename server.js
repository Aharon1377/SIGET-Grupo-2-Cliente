//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
 });

// Serve only the static files form the dist directory
app.use(express.static('/app/dist/SIGETGrupo2Cliente'));

app.get('/*', function(req,res) {
  res.sendFile(path.join('/app/dist/SIGETGrupo2Cliente/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
