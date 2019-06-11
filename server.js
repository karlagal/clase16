const express = require ('express')
const serveStatic = require ('serve-static')
const path = require ('path')
const app = express ()

const serveMiddleware = serveStatic (path.resolve(__dirname,'static'))

function rootHandler (request, response) {
    console.log ('root Handler')
    response.send ('morita')
    response.status (201)
    response.send ('')
}

function searchHandler  (request, response) {
    response.send (request.query.q)
}

app.use (express.json())
app.use ('/ assets', express.static('static'))

app.all ('/', rootHandler)

function authenticationHandler (request, response) {
    response.send ("moris")
    console.log(request.body)
} 
app.post('/auth', authenticationHandler)

//app.all ('/ search', searchHandler)
app.listen (9000)  