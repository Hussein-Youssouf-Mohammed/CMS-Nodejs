const  express      = require('express')
const  expressEdge  = require('express-edge')
const ConnectDB    = require('./config/db')
const bodyParser  =  require('body-parser')
const fileUpload  = require('express-fileupload')
const flash       = require('connect-flash')
const  app          =  express()
// use db
app.use(express.static('public'))
ConnectDB();
app.use(flash())
app.use(expressEdge.engine)
app.set('views', `${__dirname}/views`)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(fileUpload());

// all route imports    
const home  = require('./routes/home/main')
const admin  = require('./routes/admin/main')
const  postRoutes  = require('./routes/admin/post/posts')
const  categoryRoutes  = require('./routes/admin/categories/categoires')
// use routes
app.use('/', home);
app.use('/admin', admin)
app.use('/admin/posts', postRoutes)
app.use('/admin/categoires', categoryRoutes)

app.listen(4000, () => {
    console.log('App Listeing on port 3000')
});