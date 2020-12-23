
const express = require("express");
const multer = require('multer');
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mime = require('mime-types');
const fs = require('fs');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

// add support for incoming JSON entities
app.use(bodyParser.json());
// add support for CORS
app.use(cors());

// environment-specific variable configuration
require('dotenv').config();

// ################################################################################
// Data model and persistent store setup
const Manager = require("./manager.js");
const manager = Manager();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname)
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFilter: fileFilter
});

// ################################################################################
// Security setup

// Passport.js components
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");

// JSON Web Token Setup
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

// Configure its options
var jwtOptions = {};
// Configure the issuer
jwtOptions.issuer = 'bdcustompa.com';
// Choose whether the incoming authorization header scheme is BEARER or JWT
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
//jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");

// Secret Key
jwtOptions.secretOrKey = process.env.JWT_SECRETKEY;

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {

  // Get the timestamp now
  let now = Date.now();
  now = Math.round(now / 1000);

  // Unpack and validate the token by ensuring that it has not expired
  if (jwt_payload && now < jwt_payload.exp) {
    // Attach the token's contents to the request
    // It will be available as "req.user" in the route handler functions
    next(null, jwt_payload);
  } else {
    next(null, false);
  }
});

// Activate the security system
passport.use(strategy);
app.use(passport.initialize());

// ################################################################################
// Resuable transporter object using the default SMTP transport

let transporter = nodemailer.createTransport({
  host: process.env.AWS_SES_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.AWS_SES_USER,
    pass: process.env.AWS_SES_PASS,
  },
});

// ################################################################################
// Deliver the app's home page to browser clients

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// ################################################################################
// Resources available in this web API

app.get("/api", (req, res) => {
  // Here are the resources that are available for users of this web API...
  const links = [];
  // This app's resources...
  links.push({ "rel": "collection", "href": "/api", "methods": "GET,POST" });
  const linkObject = {
    "apiName": "Auto Upgrades Vehicle Web API",
    "apiDescription": "Api for high-end Vehicles",
    "apiVersion": "1.0",
    "apiAuthor": "Shervin Tafreshipour",
    "links": links
  };
  res.json(linkObject);
});

// ################################################################################
// Login Routes

// Login Admin, Return JWT
app.post("/api/login", (req, res) => {
  manager.verify_Admin(req.body)
    .then((data) => {

      // 14 day expiry date token 
      let now = Date.now();
      let exp = Math.round(now / 1000) + (86400 * 14);

      // Configure the payload with data and claims
      // https://tools.ietf.org/html/rfc7519
      var payload = {
        iss: 'bdcustompa.com',
        exp: exp,
        // username: data.username,
        // Can add more if required
      };
      var token = jwt.sign(payload, jwtOptions.secretOrKey);
      // Return the result
      res.json({ "message": "Login was successful", token: token });

    }).catch((error) => {
      res.status(400).json({ "message": error });
    });
})

// ################################################################################
// Completed Project Requests

// Get All Completed Projects
app.get("/api/completed_projects", (req, res) => {
  // Call the manager method
  manager.completed_projects_GetAll()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

/********* Protected Routes **********/

// Add new

app.post("/api/completed_projects", upload.array('Images', 12), passport.authenticate('jwt', { session: false }), (req, res) => {

  // read through the files and create an array of Images
  var imageArr = [];

  fs.readdir("./uploads", (err, files) => {

    if (err) {
      res.status(500).json({ "message": "Files could not be read" });
    }

    files.forEach((file, index) => {
      var img = fs.readFileSync("./uploads/" + file);
      var encode_image = img.toString('base64');

      var FinalImg = {
        ContentType: mime.contentType(file),
        Image: new Buffer.from(encode_image, 'base64')
      }
      imageArr.push(FinalImg);
    });

    req.body.Images = imageArr;

    files.forEach((file, index) => {
      fs.unlink(("./uploads/" + file), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });

    // Call the manager method
    manager.completed_projects_Add(req.body)
      .then((data) => {
        res.status(200).json({ "message": "files uploaded to folder" });
      })
      .catch((error) => {
        res.status(500).json({ "message": error });
      })

  });

});

// Delete item
app.delete("/api/competed_projects/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  // Call the manager method
  manager.completed_projects_Delete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// ################################################################################
// Current Project Requests

// Get all
app.get("/api/current_projects", (req, res) => {
  // Call the manager method
  manager.current_projects_GetAll()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

/********* Protected Routes **********/
// Add new
app.post("/api/current_projects", upload.array('Images', 12), passport.authenticate('jwt', { session: false }), (req, res) => {

  // read through the files and create an array of Images
  var imageArr = [];

  fs.readdir("./uploads", (err, files) => {

    if (err) {
      res.status(500).json({ "message": "Files could not be read" });
    }

    files.forEach((file, index) => {
      var img = fs.readFileSync("./uploads/" + file);
      var encode_image = img.toString('base64');

      var FinalImg = {
        ContentType: mime.contentType(file),
        Image: new Buffer.from(encode_image, 'base64')
      }
      imageArr.push(FinalImg);
    });

    req.body.Images = imageArr;

    files.forEach((file, index) => {
      fs.unlink(("./uploads/" + file), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });

    // Call the manager method
    manager.current_projects_Add(req.body)
      .then((data) => {
        res.status(200).json({ "message": "files uploaded to folder" });
      })
      .catch((error) => {
        res.status(500).json({ "message": error });
      })

  });

});


// Delete item
app.delete("/api/current_projects/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  // Call the manager method
  manager.current_projects_Delete(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// ################################################################################
// inquiries Requests

// Add new
app.post("/api/inquiries", (req, res) => {

  var mailOptions = {
    from: 'shervin@bdcustompa.com',
    to: 'bobby@bdcustompa.com',
    subject: req.body.Date + " " + req.body.Name,
    text: req.body.Description,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent ' + info.response);
    }
  });

  // Call the manager method
  manager.Inquiries_Add(req.body)
    .then((data) => {
      console.log("inquiry saved..");
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

/********* Protected Routes **********/

// Get all

app.get("/api/inquiries", passport.authenticate('jwt', { session: false }), (req, res) => {
  // Call the manager method
  manager.Inquiries_GetAll()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ "message": error });
    })
});

// Delete item
app.delete("/api/inquiries/:id", passport.authenticate('jwt', { session: false }), (req, res) => {
  // Call the manager method
  manager.Inquiries_GetAll(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(() => {
      res.status(404).json({ "message": "Resource not found" });
    })
});

// ################################################################################
// Resource not found (this should be at the end)

app.use((req, res) => {
  res.status(404).send("Resource not found");
});

// ################################################################################
// Attempt to connect to the database, and
// tell the app to start listening for requests

manager.connect().then(() => {
  app.listen(HTTP_PORT, () => { console.log("Ready to handle requests on port " + HTTP_PORT) });
})
  .catch((err) => {
    console.log("Unable to start the server:\n" + err);
    process.exit();
  });
