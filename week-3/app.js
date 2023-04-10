import express from 'express'

const app = express()

const port = process.env.PORT || 3000

import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.listen(port, () => {
    console.log(`Server is Up and Runing on port ${port}`)
})

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(  __dirname + '/index.html')
})

app.get('/getData', (req,res) => {

    const urlNum = req.query.number

    if (urlNum === undefined){
        return res.send(`
        <h1>Lack of Parameter</h1>
        `)
    }

    if (isNaN(+urlNum) || urlNum < 0){
        return res.send(`
        <h1>Wrong Parameter</h1>
        <p>Positive integer Only! Your request is '${urlNum}'</p>
        `)
    }

    let sum = 0
    for (let i = 1; i <= urlNum; i++) {
        sum += i
    }
    
    res.send(`
    <h1>The result is ${sum}</h1>
    <p>Base on your request '${urlNum}'</p>
    `)

})
