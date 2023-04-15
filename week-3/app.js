import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

const port = process.env.PORT || 3000

import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

app.listen(port, () => {
  console.log(`Server is Up and Runing on port ${port}`)
})

app.use(express.static('public'))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/getData', (req, res) => {
  const urlNum = req.query.number

  if (urlNum === undefined) {
    return res.send({
      title: 'Lack of Parameter',
      desc: 'Enter a Positive integer',
    })
  }

  if (isNaN(+urlNum) || urlNum < 0) {
    return res.send({
      title: 'Wrong Parameter',
      desc: `Positive integer Only! Your request is ${urlNum}`,
    })
  }

  let sum = 0
  for (let i = 1; i <= urlNum; i++) {
    sum += i
  }

  res.send({
    title: `The result is ${sum}`,
    desc: `Base on your request: ${urlNum}`,
  })
})

app.get('/myName', (req, res) => {
  if (!req.cookies.username) {
    res.sendFile(__dirname + '/public/input_name.html')
  } else {
    res.send(`Welcome, ${req.cookies.username}! Good to see you again!`)
  }
})

app.get('/trackName', (req, res) => {
  const username = req.query.username
  res.cookie('username', username)
  res.redirect('/myName')
})
