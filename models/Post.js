const mongoose   = require('mongoose')
const PostSchema  = new mongoose.Schema({
   title: {
       type: String,
       required: true
   },
   category: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'categories'
   },
   body: {
       type: String,
       required: true
   },
   status: {
       type: String,
       default: 'public'
   },
   image: {
       type: String,
       required: true
   },
   allowComment: {
        type: Boolean,
        require: true
   },
   createdAt: {
       type: Date,
       default: Date.now()
   }
})
module.exports = mongoose.model('Post', PostSchema)