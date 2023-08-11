const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const skaters = {
    'tony hawk':{
        'birthDate': 'May 12, 1968',
        'birthName':'Anthony Frank Hawk', 
        'birthLocation': 'San Diego, California, USA',
    },

    'elissa steamer': {
        'birthDate': 'July 31, 1975',
        'birthName':'Elissa Steamer', 
        'birthLocation': 'Fort Myers, Florida, USA',
    },

    'unknown':{
        'birthDate': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown',
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const skaterName = request.params.name.toLowerCase()

    if (skaters[skaterName]){
        response.json(skaters[skaterName])
    }else{
        response.json(skaters['unknown'])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})  