const express = require('express')
const app = express()
const cors=require('cors')
const port = process.env.PORT || 5000

//middleware-to make connection through frontend
app.use(cors());
app.use(express.json());


//password:Anusha321

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//mongodb configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://Anusha_1:Anusha321@cluster0.amugrne.mongodb.net/?appName=Cluster0";

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


    //create a collections of documnets for dtabase
    const booksCollect = client.db("BookInventory").collection("books");

    //Insert a book  to database using post method-can post data to db 
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      console.log(data); // Log the incoming data to check for bookTitle
    
      const result = await booksCollect.insertOne(data);
      res.send(result);
    });
    

    // //get all books from datbase
    // app.get("/all-books",async(req,res) => {
    //   const books =  booksCollect.find();
    //   const result = await books.toArray();
    //   res.send(result)
    // })


    //upadate book data:patch or update method
    app.patch("/update-book/:id",async(req,res) => {
      const id = req.params.id;
      //console.log(id);
      const updateBooksData = req.body;
      const filter={_id:new ObjectId(id)};
      const options = { upsert: true };
      const updateDoc={
        $set:{
          ...updateBooksData
        }
      }



      //update
      const result=await booksCollect.updateOne(filter,updateDoc,options);
      res.send(result);

    })



    //delete a book in data
    app.delete("/delete-book/:id",async(req,res) => {
      const id = req.params.id;
      const filter={_id:new ObjectId(id)};
      const result=await booksCollect.deleteOne(filter);
      res.send(result);
      })

       //find by category-filter the daata
       app.get("/all-books", async (req, res) => {
        let query = {};
        if (req.query?.category) {
          query = { category: req.query.category };
        }
  
        // Log the query to debug
        console.log("Query:", query);
  
        const result = await booksCollect.find(query).toArray();
        res.send(result);
      });


      //to get single book data
      app.get("/book/:id",async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const result=await booksCollect.findOne(filter);
        res.send(result);

      })



     

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})