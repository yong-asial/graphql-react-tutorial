const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema.js');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allows cors
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

console.log('Connecting to mongodb');
mongoose.connect('mongodb+srv://admin:admin@cluster0-1sk1o.gcp.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to database');

  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
  });

});