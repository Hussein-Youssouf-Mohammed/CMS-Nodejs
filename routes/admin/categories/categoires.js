const  express   = require('express')
const  {getCategory, createCategory, updateCategory, deleteCategory} = require('../../../controllers/categories/categores')
const router  = express.Router();

router.route('/').get(getCategory).post(createCategory)
router.route('/update/:id').post(updateCategory)
router.route('/:id').post(deleteCategory)

module.exports  = router