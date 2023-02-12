const express = require("express");
const postsRouters = require("./posts/posts.router");
const db = require("./utils/database");
const app = express();

app.use(express.json());
app.use("api/v1", postsRouters);

db.authenticate()
    .then(() => console.log("Database authenticated"))
    .catch((err) => console.log(err));

db.sync()
    .then(() => console.log("Database synced"))
    .catch((err) => console.log(err));

app.listen(9000, () => {
    console.log("The server is listening on port 9000");
});

module.exports = app;
