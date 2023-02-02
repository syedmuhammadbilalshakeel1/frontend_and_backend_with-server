const express = require("express");
const http = require("http");
const bcrypt = require("bcrypt");
const path = require("path");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
// const cors = require("cors");

require("dotenv").config();

const app = express();
const dbConnect = require("./db/dbConnect");
const users = require("./db/userModel");
const auth = require("./auth");
const server = http.createServer(app);

dbConnect();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/new.html"));
  console.log(res.sendFile(path.join(__dirname, "./public/new.html")));
});

app.post("/register", async (request, response) => {
  // hash the password

  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      const user = new users({
        email: request.body.email,
        password: hashedPassword,
      });

      console.log(user, "user>>>>");
      user
        .save()

        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })

        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })

    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

// login
app.post("/login", (request, response) => {
  users
    .findOne({ email: request.body.email })

    .then((user) => {
      bcrypt
        .compare(request.body.password, user.password)

        .then((passwordCheck) => {
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Email Or Password Does'nt match",
              error,
            });
          }

          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
            password: user.password,
            
          });

          // response.status(200).send({
          //   message: "Login Successful",
          //   email: user.email,
          // });
        })

        .catch((error) => {
          response.status(400).send({
            message: "Email Or Password not match",
            error,
          });
        });
    })

    .catch((e) => {
      response.status(404).send({
        message: "Email Or Password not match",
        e,
      });
    });
});
const port = 3000;
server.listen(port, function () {
  console.log(`Server http://localhost:${port}`);
});
