import express from 'express'

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

  res.send(
    JSON.stringify({
      title: `The result is ${sum}`,
      desc: `Base on your request: ${urlNum}`,
    })
  )
})
