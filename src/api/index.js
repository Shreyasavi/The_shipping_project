const app = require('express')()
const cors = require("cors");
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shipping_user:TCNNmP2UTmXrSQ36@cluster0.wozwc.mongodb.net/Shipping_data?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

let collection = null;
client.connect(err => {
  if (err){
      console.log("Error connecting to Mongo");
  }  
  console.log("Connected to Mongo");
  collection = client.db("Shipping_data").collection("order");
  // perform actions on the collection object
});

app.post('/create', async (req, res) => {
    const data = req.body;
    try {
        await collection.insertOne(data)
        res.status(200).send("OK")
    } catch (err) {
        res.status(400).send(err)
    }
})

app.get('/get-orders', async (req, res) => {
    try {
        const data = [];

        const snapshot = await collection.find()
        await snapshot.forEach(order => {
            console.log(order);
            data.push(order);
        })
        res.status(200).send(data)

    } catch (err) {
        res.status(400).send(err)
    }
})

client.close();
app.listen(5000, () => {
    console.log(`server is running on localhost:5000`);
})