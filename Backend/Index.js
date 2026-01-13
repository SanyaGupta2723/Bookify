import express from 'express'
const app = express()
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.PORT || 3000
const MONGODB_URL = process.env.MONGODB_URL



app.get('/', (req, res) => {
  res.send('Backend Project!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT} `)
})
