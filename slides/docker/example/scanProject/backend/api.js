const MongoClient = require('mongodb').MongoClient
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

const mongoPort = process.env.MONGO_PORT || '27017'
const mongoHost = process.env.MONGO_HOST || 'localhost'
const url = `mongodb://${mongoHost}:${mongoPort}/`
const port = 8080
const mongo = {}
const mongoConnect = (url) => {
  return new Promise((y, n) => {
    MongoClient.connect(url, function (err, db) {
      if (err) console.log('ERROR ', err) || n(err)
      y(db)
    })
  })
}

const mongoGet = async () => {
  return new Promise(function (yes, no) {
    try {
      mongo.dbo.collection('scans').findOne({}, function (err, res) {
        if (err) throw err
        console.log(res)
        yes(res)
      })
    } catch (err) {
      console.log('ERROR mongo SET', err)
      no(err)
    }
  })
}

const makeConnection = async function () {
  console.log(url)
  mongo.db = await mongoConnect(url)
  mongo.dbo = mongo.db.db('mydb')
}


setTimeout(makeConnection, 2000)

app.get('/', function (req, res) {
  res.send('Working !!!')
})

app.get('/api/get', async function (req, res) {
  if(!mongo.dbo)  return
  const data = await mongoGet()
  res.json(data)
})

app.listen(port, function () {
  console.log('listening on port ' + port)
})
