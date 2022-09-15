const express = require('express');
const router = express.Router();

const Manager = require('../manager.js');
const manager = new Manager();

router.get('/', (req, res) => {
  let products = manager.findAll()
  res.render('get-products', {
    products
  })
})


router.post('/', (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.thumbnail) return res.send({error: 'data is required'})
  manager.create(req.body)
  res.redirect('/')
})


module.exports = router;