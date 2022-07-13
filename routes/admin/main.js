const express   = require('express')
const { route } = require('express/lib/application')
const router   = express.Router()
router.get('/dashboard', (req, res) => {
      res.render('admin/index')
})

module.exports  = router