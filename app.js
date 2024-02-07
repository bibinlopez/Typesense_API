require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const client = require('./client');
// require('./schema');

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL

const url = process.env.MONGO_URI;

// const client = new MongoClient(url);

// let db;
app.use(express.json());
app.use(morgan('tiny'));

// app.get('/', async (req, res) => {
//   try {
//     const collection = db.collection('users');

//     // the following code examples can be pasted here...

//     const findResult = await collection
//       .find({ gender: 'male', brand: 'SAMSUNG' })
//       .limit(20)
//       .toArray();
//     return res.status(200).json({ count: findResult.length, data: findResult });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.post('/add-book', (req, res) => {
  const book = req.body;

  client
    .collections('books9')
    .documents()
    .create(book)
    .then(
      (data) => {
        console.log('success');
        res.send(data);
      },
      (err) => {
        console.log('error');
        res.status(400).send(err);
      }
    );
});

app.get('/search', (req, res) => {
  const { q } = req.query;

  const searchParameters = {
    q: q,
    query_by: 'company_name',
    // sort_by: 'ratings_count:desc',
  };

  client
    .collections('companies')
    .documents()
    .search(searchParameters)
    .then(
      function (searchResults) {
        res.send(searchResults);
      },
      (err) => {
        res.send(err);
      }
    );
});
app.get('/', (req, res) => {
  client
    .collections()
    .retrieve()
    .then(
      function (searchResults) {
        res.send(searchResults);
      },
      (err) => {
        res.send(err);
      }
    );
});

app.get('/drop/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  client
    .collections(id)
    .delete()
    .then(
      function (searchResults) {
        res.send(searchResults);
      },
      (err) => {
        res.send(err);
      }
    );
});
app.get('/insert', (req, res) => {
  let document = {
    id: '124',
    company_name: 'Stark Industries',
    num_employees: 5215,
    country: 'INDIA',
  };

  client
    .collections('companies')
    .documents()
    .create(document)
    .then(
      function (searchResults) {
        res.send(searchResults);
      },
      (err) => {
        res.send(err);
      }
    );
});

const port = 4000;
async function main() {
  // Use connect method to connect to the server
  // await client.connect();
  // console.log('Connected to the DB...');
  // const collection = client.db('typesense').collection('users');
  // const changeStream = collection.watch();
  // changeStream.on('change', (next) => {
  //   // process next document
  // });

  app.listen(port, console.log(`Server Listening on port: ${port}`));
  // return 'done.';
}

main()
  // .then(console.log)
  .catch(console.error);
// .finally(() => client.close());
