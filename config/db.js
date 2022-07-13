const mongoose  = require('mongoose')
const  expressSession  = require('express-session')
const connectMongo    = require('connect-mongo')
const ConnectDB  = () => {
    mongoose.connect('mongodb://localhost/cms')
    const mongoStore  =  connectMongo(expressSession)
    expressSession({
        secret: 'secret',
        store: new mongoStore({
            mongooseConnection: mongoose.connection
        })
    })
}

module.exports  = ConnectDB