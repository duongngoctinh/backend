require("dotenv").config();

const moongose = require("mongoose");
const routes = require("./MVC/Routes/index");

const connect = function (app) {
  try {
    moongose.connect(`${process.env.URL_MONGODB}`, (err) => {
      if (err) {
        console.log("Connect database failed: " + err.message);
      } else {
        console.log("Connect database succeeded");
        app.listen(process.env.PORT, function () {
          console.log("Server is running");
          routes(app);
        });
      }
    });
  } catch (error) {}
};

module.exports = connect;
