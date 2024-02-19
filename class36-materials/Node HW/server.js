
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://trevor:<password>@star-wars.415j06y.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
// ??????÷











console.log('May Node be with you')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, function () {
  console.log('listening on 3000')
})

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile('/Users/trevorcarmack/coding/100Devs/class36-materials/Node HW' + '/index.html')
})




MongoClient.connect('mongodb+srv://trevor:tctrevor@star-wars.415j06y.mongodb.net/?retryWrites=true&w=majority',)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')
    app.use(/* ... */)
    app.get(/* ... */)
    app.post(/* ... */)
    app.listen(/* ... */)
  })
.catch(error => console.error(error))


app.post('/quotes', (req, res) => {
quotesCollection
.insertOne(req.body)
     .then(result => {
      res.redirect('/')
    })
    .catch(error => console.error(error))
})
