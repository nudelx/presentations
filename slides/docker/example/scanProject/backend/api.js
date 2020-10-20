const MongoClient = require('mongodb').MongoClient
const express = require('express')
const app = express()

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

try {
  (async function () {
    console.log(url)
    mongo.db = await mongoConnect(url)
    mongo.dbo = mongo.db.db('mydb')
  })()
} catch (a) {
  console.log(e)
}



app.get('/', function (req, res) {
  res.send('Working !!!')
})

app.get('/api/get', async function (req, res) {
  const data = await mongoGet()
  res.json(data)
})

app.listen(port, function () {
  console.log('listening on port ' + port)
})
