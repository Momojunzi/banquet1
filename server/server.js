const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exended: false}));
app.use(cookieParser());
app.use(express.static("./client/public/"));
//path.join(__dirname, 'public')
if(process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));
}

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/banquet1",
  {
    useMongoClient: true
  }
);

app.use("/api", apiRoutes);

app.get("*", function(req, res) {
 res.sendfile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function(){
  console.log(`server litening on port: ${PORT}`);
});
