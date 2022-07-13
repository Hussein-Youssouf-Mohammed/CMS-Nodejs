const express  = require('express')
const  {getPost, createPost, storePost, editPost, deletePost} = require('../../../controllers/posts/post')
const router    = express.Router();

router.route('/').get(getPost)
router.route('/create').get(createPost).post(storePost)
router.route('/edit/:id').post(editPost)
router.route('/delete/:id').post(deletePost)
module.exports = router