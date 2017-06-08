const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
  console.log("test")
    res.sendfile('clientAppForFS/index.html' , { root : __dirname});
})

module.exports = router
