var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");
var hbs = require("hbs");

var indexRouter = require("./routes/index");
var signupRouter = require("./routes/signup");
var loginRouter = require("./routes/login");
var blogRouter = require("./routes/blog");
var dotenv = require("dotenv");
const expressSession = require("express-session");
const { PrismaSessionStore } = require("@quixo3/prisma-session-store");
const prisma = require("./prisma/prismaClient.js");

dotenv.config();

var app = express();

if (process.env.NODE_ENV === "development") {
  var livereload = require("livereload");
  var connectLiveReload = require("connect-livereload");

  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname));

  /*  Listens for Nodemon’s server reloads to refresh the browser AFTER 100ms */
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
  app.use(connectLiveReload());
}

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/dist")));
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    /* Resave (Using false with default session store MEMORY - will change this) - Forces the session to be saved back to the session store, even if the session was never modified during the request. Depending on your store this may be necessary, but it can also create race conditions where a client makes two parallel requests to your server and changes made to the session in one request may get overwritten when the other request ends */
    resave: false,
    /*
    An uninitialized session refers to a newly created session that has not yet had any data stored in it. In the context of web applications, setting `saveUninitialized: true` means the session will be saved to the session store even if it hasn't been modified, which can be useful for tracking new visitors before they make any changes or inputs. 
    
    Choosing false is useful for implementing login sessions, reducing server storage usage. But we will be using a session store eventually so I will set this to true and data can be stored to session as well at a later stage
    */
    saveUninitialized: true,
    /* 
    proxy
    Trust the reverse proxy when setting secure cookies (via the “X-Forwarded-Proto” header).
   */
    proxy: true,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // ms
    },
    store: new PrismaSessionStore(prisma, {
      checkPeriod: 2 * 60 * 1000, //ms
      dbRecordIdIsSessionId: true,
      dbRecordIdFunction: undefined,
    }),
  })
);

app.use("/", indexRouter);
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/blog", blogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
