const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const {authenticateJWT} = require('./middleware/auth')
const usersRoutes = require('./routes/usersRoutes')
const authRouter = require('./routes/auth')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(authenticateJWT)

app.use('/users', usersRoutes)
app.use('/auth', authRouter)

app.use((error, req, res, next)=> {
    let status = error.status || 500
    let message = error.message
    return res.status(status).json({
        error:{message, status}
    })
})

module.exports = app