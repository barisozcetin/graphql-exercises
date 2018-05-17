const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const dbKey = require("./keys/database");

const app = express();

// connect to mlab
mongoose.connect(dbKey);
mongoose.connection.once("open", () => {
  console.log("connected to db");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening on port 4000");
});
