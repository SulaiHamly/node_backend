const mongoose = require('mongoose');


const uri = "mongodb://localhost:27017/demo";

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully!"))
  .catch(err => console.error("MongoDB connection error:", err));

module.exports = mongoose;
