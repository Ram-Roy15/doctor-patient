const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
const corsOptions = {
  origin: ["http://localhost:5000", "http://localhost:5173"],

  optionsSuccessStatus: 200,
  Credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ql1itbt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const jobsCollection = client.db("jobApp").collection("jobs");
    const bidsCollection = client.db("jobApp").collection("bids");

    // post a bid data to the database
    app.post("/bid", async (req, res) => {
      const bidData = req.body;
      console.log(bidData);
      const result = await bidsCollection.insertOne(bidData);
      res.send(result);
    });
    // post a job data to the database
    app.post("/job", async (req, res) => {
      const jobData = req.body;
      console.log(jobData);
      const result = await jobsCollection.insertOne(jobData);
      res.send(result);
    });

    app.get("/jobs", async (req, res) => {
      const result = await jobsCollection.find().toArray();
      res.send(result);
      console.log(result);
    });

    app.get("/job/:id", async (req, res) => {
      const id = req.params.id;
      const result = await jobsCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
      // const query = { _id: new ObjectId(id) };
      // const result = await jobsCollection.findOne(query);
      // res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Welcome to Digital Doctor Patient Server");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
