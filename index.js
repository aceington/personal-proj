const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const config = require('./config.js');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());
const conn = massive.connectSync({
  connectionString: config.connectionString
});

app.set('db', conn);
const db = app.get('db');

app.get('/vehicles/all', function(req, res) {
  db.getAllVehicles(function(err, vehicles) {
    if (!err) {
      console.log(err);
    }
    res.send(vehicles);
  })
})

const PORT = 8083;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
})
