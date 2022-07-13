const Category   =  require('../../models/Category')

exports.getCategory = async (req, res, next) => {
        const categories  = await Category.find({})
         res.render('admin/category/index', {categories})
}
exports.createCategory = (req, res) => {
    Category.create({
        name: req.body.name
    }, (error, category) => {
        res.redirect('/admin/categoires')
    })
}
exports.updateCategory  = (req, res) => {
       const category  = Category.findById(req.params.id)
       category.update({
           name: req.body.name
       }, (error, category) => {
           res.redirect('/admin/categoires')
       })
}
exports.deleteCategory  = async (req, res) => {
    Category.findByIdAndDelete(req.params.id, (error, category) => {
        res.redirect('/admin/categoires')
    })
    
}