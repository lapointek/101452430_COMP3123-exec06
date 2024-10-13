const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const noteRouter = require("./routes/NoteRoutes");

const DB_URL =
    "mongodb+srv://klapointe:9LQJ0wtBBcruR4lz@comp3123-lab6.5mcbf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=comp3123-lab6";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(noteRouter);

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose
    .connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(
            "Successfully connected to the database mongoDB Atlas Server"
        );
    })
    .catch((err) => {
        console.log("Could not connect to the database. Exiting now...", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
