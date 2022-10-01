const { json, urlencoded } = require("express");
const express = require("express");
const app = express();
const connect = require("./config");
app.use(json());
app.use(urlencoded());

connect(app);
