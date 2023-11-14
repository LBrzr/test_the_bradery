const { connect } = require("mongoose");

const dbUrl = process.env.MONGO_URI;

const connectDb = () => connect(dbUrl)
  .then((db) => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

module.exports = { connectDb }