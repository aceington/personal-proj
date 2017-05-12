const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());
const conn = massive.connectSync({
  connectionString: "postgres://postgres@localhost:5433/postgres"
});

app.set('db', conn);
const db = app.get('db');

app.get('/vehicles/all', function(req, res) {
  console.log('at srvr');
  db.getAllVehicles(function(err, vehicles) {
    if (!err) {
      console.log(err);
    }
    res.send(vehicles);
  })
})

const PORT = 3001;
app.listen(PORT, () => {
  console.log('listening on port: ', PORT);
})
