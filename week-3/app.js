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


app.get('/', (req, res) => {
    res.sendFile(  __dirname + '/index.html')
})

app.get('/getData', (req,res) => {

    const urlNum = req.query.number

    if (urlNum === undefined){
        return res.send(`
        <h1>Lack of Parameter</h1>
        <p>Try <a href="?number=5">?number=5</a></p>
        <p>Try <a href="?number=xyz">?number=xyz</a></p>
        `)
    }

    if (isNaN(+urlNum)){
        return res.send(`
        <h1>Wrong Parameter</h1>
        <p>Try <a href="?number=5">?number=5</a></p>
        `)
    }

    let sum = 0
    for (let i = 1; i <= urlNum; i++) {
        sum += i
    }
    
    res.send(`<h1>The result of your request is ${sum}<h1>`)

})
