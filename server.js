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
const redirect = require("./redirect");

const app = express();

app.use(express.json({ extended: false }));

app.use(redirect());

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
