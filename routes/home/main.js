const Post      = require('../../models/Post')
const Category      = require('../../models/Category')
const  express   =  require('express');
const router  =  express.Router();
router.get('/', async (req, res) => {
    const posts  = await Post.find({})
    const categories  = await Category.find({})
    res.render('home/index', {posts, categories})
})
router.get('/post/:id', async (req, res, next) => {
    const post  = await Post.findById(req.params.id)
    const categories  = await Category.find({})
    res.render('home/single', {post, categories})
})
router.get('/login', (req, res, next) => {
    res.render('home/login')
})
router.get('/register', (req, res, next) => {
    res.render('home/register')
})

module.exports  = router