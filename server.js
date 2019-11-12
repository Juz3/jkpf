/**
 *  <server.js>
 *
 *  Copyright information
 *
 *      Copyright (C) 2019 Jussi Koivumäki <firstname.lastname@outlook.com>
 *
 *  @author Jussi Koivumäki
 *
 */

const express = require("express");
const path = require("path");

/* // needed for parsing form data from request body
const bodyParser = require('body-parser');
 */

// Express instance
const app = express();

app.use(express.json({ extended: false }));

const port = process.env.PORT || 5000;

// Serve static build in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port);

console.log(`server listening on ${port}`);
