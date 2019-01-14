const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const Item = require('./db/trade');
const Data = require('./db/data');
const itemRoutes = require('./routes/items');

const connection = config.connectionUrl;
mongoose.connect(connection,  {useNewUrlParser:true})
  .then(
    () => {
      const data = new Data();
      data.seeDb();
    }
  );

const app = express();

app.use('/api/v1/items', itemRoutes);

const port = process.env.PORT || 30001;

app.listen(port, () => {
  console.log("we're listening folks, we're listening.")
});