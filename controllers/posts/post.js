const Post    = require('../../models/Post')
const path    = require('path')
const fs     = require('fs')
const  Category   = require('../../models/Category')
exports.getPost = async (req, res, next) => {
//    console.log(req.session.postErrors)
     const categories  = await Category.find({})
     const posts  = await Post.find({}).populate('category')
     
     res.render('admin/post/index', {posts, categories})
}
exports.createPost = (req, res, next) => {
     res.render('admin/post/create')
}
exports.storePost = (req, res, next) => {
     let allowComment  = true 
     if(req.body.allowComment) {
          allowComment = true
     } else {
          allowComment  = false
     }
     const {image} = req.files
     image.mv(path.resolve(__dirname, '..', '..', 'public/posts', image.name), (error) => {
          Post.create({
               title: req.body.title,
               allowComment: allowComment,
               status: req.body.status,
               body: req.body.body,
               image: `/posts/${image.name}`,
               createdAt: req.body.createdAt,
               category: req.body.category
          }, (error, post) => {
               if(error) {
                    const postErrors  = Object.keys(error.errors).map(key => error.errors[key].message)
                    req.flash('postErrors', postErrors) 
                    return res.redirect('/admin/posts/index')
               }
               res.redirect('/admin/posts')
          })
     })
}
exports.editPost = async (req, res) => {
     const post  = await Post.findById(req.params.id)
     if(req.body.allowComment) {
          allowComment = true
     } else { allowComment = false}
     post.update({
          title: req.body.title,
          allowComment: allowComment,
          status: req.body.status,
          body: req.body.body,
          createdAt: req.body.createdAt,
          category: req.body.category
     }, (error, post) => {
          res.redirect('/admin/posts')
     })
}
exports.deletePost = async (req, res) => {
     Post.findByIdAndDelete(req.params.id, (error, post) => {
          res.redirect('/admin/posts')
     })
}