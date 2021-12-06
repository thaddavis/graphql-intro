var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

var schema = require('./schemaComposers')

// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

var root = { hello: () => 'Hello world!!!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));