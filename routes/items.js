const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();
const Item = require('../db/trade');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));


router.get('', (req, res) => {
  Item.find({}, (err, foundItems) => {
    res.json(foundItems);
  })
});

router.get('/:id', (req, res) => {
  const itemId = req.params.id
  Item.findById(itemId, (err, foundItem) => {
    if(err) {
      res.status(422).send({
        title: 'Item error',
        detail: 'Item not found'
      });
    }
    res.json(foundItem);
  });
})

module.exports = router;