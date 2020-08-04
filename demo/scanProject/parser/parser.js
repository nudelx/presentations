#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const convert = require('xml-js')
const dataPath = process.env.DATA_PATH || './data'
const mongoPort = process.env.MONGO_PORT || '27017'
const mongoHost = process.env.MONGO_HOST || 'localhost'
const timer = process.env.TIMER || 5000
const FOLDER = path.resolve(__dirname, dataPath)
const MongoClient = require('mongodb').MongoClient
const url = `mongodb://${mongoHost}:${mongoPort}/`
const regex = /\.xml$/

console.log('ENV', process.env)
const mongoConnect = (url) => {
  return new Promise((y, n) => {
    MongoClient.connect(url, function(err, db) {
      if (err) console.log('ERROR ', err) || n(err)
      y(db)
    })
  })
}

const mongoSet = async (data) => {
  try {
    const db = await mongoConnect(url)
    const dbo = db.db('mydb')
    dbo.collection('scans').insertOne(data, function(err, res) {
      if (err) throw err
      console.log('scan stored ', res)
      db.close()
    })
  } catch (err) {
    console.log('ERROR mongo SET', err)
  }
}

const run = () => {
  console.log('Parser Started')
  fs.readdirSync(FOLDER).forEach((file) => {
    if (file.match(regex)) {
      fs.readFile(`${FOLDER}/${file}`, 'utf8', function(err, xml) {
        if (err) {
          return console.log(err)
        }
        const res = convert.xml2json(xml, { compact: true, spaces: 4 })
        console.log('Xml converted')
        console.log(`File ${file} converted`)
        console.log(`File ${file} removed`)
        mongoSet(JSON.parse(res))
        // fs.unlinkSync(`${FOLDER}/${file}`)
      })
    }
  })
  console.log('Done ')
  console.log('Sleeping for  ' + timer)
  console.log('=========================')
}
run()
setInterval(() => run(), timer)
