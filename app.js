const express = require("express");
const mongoose = require('mongoose')
const app = express();
const port = 3000;

const libraryRoutes = require("./routes/libraryRoutes");

const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

app.set('view engine', 'ejs')

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public'))


app.use("/", libraryRoutes);

app.use('/users', libraryRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
// set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});