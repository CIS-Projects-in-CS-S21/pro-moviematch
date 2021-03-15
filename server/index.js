const express = require('express')

const groups = require('./routes/group')
const signup = require('./routes/sign-up')
const movies = require('./routes/movie')
const home = require('./routes/home')
const login = require('./routes/login')
const account = require('./routes/account')
const likedConent = require('./routes/liked-content')




const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome to Movie Match api')
})

app.use('/api/group', groups)
app.use('/api/sign-up', signup)
app.use('/api/movies', movies)
app.use('/home', home)
app.use('/api/login', login)
app.use('/api/account', account)
app.use('/api/liked-content', likedConent)



require('dotenv').config()

const users = [
    {
        id: 1,
        type: 'Apartment',
        description: 'Well furnished apartment'
    },
    {
        id: 2,
        type: 'Flat',
        description: 'Well furnished flat'
    }
]



app.get('/api/listing/:id', (req, res) => {
    const home = homes.find(home => home.id === parseInt(req.params.id))
    if(!home){
        res.status(404).send('The home with given id cannot be found')
    }
    res.send(home)
})

app.get('/api/listing', (req, res) => {
    res.send(homes)
})

app.post('/api/listing', (req, res) => {
    if(!req.body.type || !req.body.description) {
        return res.status(400).send('Title and description is required')
    }

    const home = {
        id: homes.length + 1,
        type: req.body.type,
        description: req.body.description,
    }

    homes.push(home)
    res.send(home)
})

app.put('/api/listing/:id', (req, res) => {
    
    const home = homes.find(home => home.id === parseInt(req.params.id))
    
    if(!home){
        return res.status(404).send('The home with given id cannot be found')
    }

    home.type = req.body.type
    home.description = req.body.description

    res.send(home)

})

app.delete('/api/listing/:id', (req, res) => {

    const home = homes.find(home => home.id === parseInt(req.params.id))
    
    if(!home){
        return res.status(404).send('The home with given id cannot be found')
    }

    const index = homes.indexOf(home)
    homes.splice(index, 1)
    res.send(home)
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server is running on port ${port}`))