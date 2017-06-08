const express = require('express')
const morgan = require('morgan')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const fileRouter = require('./fileRouter')



const app = express()


app.use(morgan('common'))
app.use(jsonParser)

app.use('/', fileRouter)

app.use(express.static('clientAppForFS'))


app.listen(process.env.PORT || 3000, () => {
    console.log(`you are listening on ${process.env.PORT || 3000}`)
})
