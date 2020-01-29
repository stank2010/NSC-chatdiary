const functions = require('firebase-functions');
const admin = require('firebase-admin')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

admin.initializeApp(functions.config().firebase)
const db = admin.firestore()

const app = express()

app.use(cors({ origin: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/allUser', async (req, res) => {
  const data = []
  await db.collection('User').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.id, doc.data())
        const datas = {
          id: doc.id,
          data: doc.data()
        }
        data.push(datas)
      })
      console.log(data)
      res.send(data)
    }).catch(err => { res.send(err) })
})

app.get('/user/:userId', async (req, res) => {
  const data = []
  await db.collection('User').doc(req.params.userId).get()
    .then(doc => {
      res.send(doc.data())
    })
  res.send(data)

})

app.post('/addUser/:userId', async (req, res) => {
  await db.collection('User').doc(req.params.userId).set(req.body)
    .then(() => {
      res.send('success')
    }).catch(err => { res.status(400).send(err) })
})

app.post('/authenUser', async (req, res) => {
  await db.collection('User').get()
    .then(snapshot => {
      var authen = null
      snapshot.forEach(doc => {
        const data = doc.data()
        if (data.name === req.body.name && data.password === req.body.password) {
          authen = data
        }
      })
      return authen
    }).then((authen) => {
      if (authen !== null) { res.send(authen) }
      else { res.send('false') }
    })
    .catch(err => { res.send(err) })
})

app.post('/allDiary/:userId', async (req, res) => {
  var data = []
  await db.collection('User').doc(req.params.userId).collection('Diary').get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        data.push({
          D_id: doc.id,
          D_data: doc.data()
        })
      })
      res.send(data)
    })
})

app.post('/saveDiary/:userId/', async (req, res) => {
  await db.collection('User').doc(req.params.userId).collection('Diary').doc(req.body.D_id).set(req.body)
    .then(() => { res.send('success') })
    .catch(err => { res.send(err) })
})

exports.app = functions.https.onRequest(app)