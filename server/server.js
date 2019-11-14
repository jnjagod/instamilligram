require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env
const authCtrl = require('./controllers/authController')

const app = express()

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET
}))

// Auth Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db connected')
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} rolling cheese wheels`))
})