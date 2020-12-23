
// ################################################################################
// Data service operations setup

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Data entities; the standard format is:
const adminSchema = require('./models/admin.js');
const completedSchema = require('./models/completed_project.js');
const currentSchema = require('./models/current_projects.js');
const inquirySchema = require('./models/inquiry.js');
const imageSchema = require('./models/image');

// environment-specific variables configuration
require('dotenv').config();

module.exports = function () {

  // Collection properties, which get their values upon connecting to the database
  let Admins;
  let Completed_projects;
  let Current_projects;
  let Inquiries;

  return {

    // ############################################################
    // Connect to the database

    connect: function () {
      return new Promise(function (resolve, reject) {

        // Create connection to the database
        console.log('Attempting to connect to the database...');

        const uri = process.env.MONGODB_URI

        mongoose.connect(uri, { dbName: 'AutomotiveDB', connectTimeoutMS: 5000, useUnifiedTopology: true });
        var db = mongoose.connection;

        db.on('error', (error) => {
          console.log('Connection error:', error.message);
          reject(error);
        });

        db.once('open', () => {
          console.log('Connection to the database was successful');
          Admins = db.model("Admin", adminSchema, "admins");
          Completed_projects = db.model("Completed_project", completedSchema, "completed_projects");
          Current_projects = db.model("Current_project", currentSchema, "current_projects");
          Inquiries = db.model("Inquiry", inquirySchema, "inquiries");
          Images = db.model("Image", imageSchema, "images");
          resolve();
        });
      });
    },

    // ############################################################
    // Administrative Login

    verify_Admin: function (adminData) {

      return new Promise(function (resolve, reject) {
        
        Admins.findOne({Username: adminData.Username}, (error, admin) => {
           
          if(!admin){
            return reject("Username Not Found");
          } 
        
          if (admin) {

            // authenicate the password
            bcrypt.compare(adminData.Password, admin.Password, (err,res) => {
                          
              if(res) {
                 return resolve("Passwords Do Match");
              }

              return reject("Passwords Don't Match");
           }); 
          }

        }); 
      }) 
    },
    
    // ############################################################
    // Completed Projects

    // add new Project
    completed_projects_Add: function (newItem) {
      return new Promise(function (resolve, reject) {

        Completed_projects.create(newItem, (error, item) => {
          if (error) {
            // Cannot add item
            return reject(error.message);
          }
          //Added object will be returned
          return resolve(item);
        });
      })
    },

    // edit Project
    completed_projects_Edit: function (newItem) {
      return new Promise(function (resolve, reject) {

        Completed_projects.findByIdAndUpdate(newItem._id, newItem, { new: true }, (error, item) => {
          if (error) {
            // Cannot edit item
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Edited object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }

        });
      })
    },

    // remove project
    completed_projects_Delete: function (itemId) {
      return new Promise(function (resolve, reject) {

        Completed_projects.findByIdAndRemove(itemId, (error) => {
          if (error) {
            // Cannot delete item
            return reject(error.message);
          }
          // Return success, but don't leak info
          return resolve();
        })
      })
    },

    // get one project
    completed_projects_GetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Completed_projects.findById(itemId, (error, item) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Found, one object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }
        });
      })
    },

    // get all Projects
    completed_projects_GetAll: function () {
      return new Promise(function (resolve, reject) {

        // Fetch all documents
        // During development and testing, can "limit" the returned results to a smaller number
        // Remove that function call when deploying into production
        Completed_projects.find()
          .sort({ Make: 'asc', Model: 'asc', Year: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }

            for (var i = 0; i < items.length; i++){
               for (var j = 0; j < items[i].Images.length; j++){   
                var temp = Buffer.from(items[i].Images[j].Image).toString('base64');   
                items[i].Images[j] = temp;  
               }
            }
            // Found, a collection will be returned
            return resolve(items);
          });
      })
    },

    // ############################################################
    // Current Projects 

    // add Project
    current_projects_Add: function (newItem) {
      return new Promise(function (resolve, reject) {

        Current_projects.create(newItem, (error, item) => {
          if (error) {
            // Cannot add item
            return reject(error.message);
          }
          //Added object will be returned
          return resolve(item);
        });
      })
    },

    // edit Project
    current_projects_Edit: function (newItem) {
      return new Promise(function (resolve, reject) {

        Current_projects.findByIdAndUpdate(newItem._id, newItem, { new: true }, (error, item) => {
          if (error) {
            // Cannot edit item
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Edited object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }

        });
      })
    },

    // remove project
    current_projects_Delete: function (itemId) {
      return new Promise(function (resolve, reject) {

        Current_projects.findByIdAndRemove(itemId, (error) => {
          if (error) {
            // Cannot delete item
            return reject(error.message);
          }
          // Return success, but don't leak info
          return resolve();
        })
      })
    },

    // get one project
    current_projects_GetById: function (itemId) {
      return new Promise(function (resolve, reject) {

        // Find one specific document
        Current_projects.findById(itemId, (error, item) => {
          if (error) {
            // Find/match is not found
            return reject(error.message);
          }
          // Check for an item
          if (item) {
            // Found, one object will be returned
            return resolve(item);
          } else {
            return reject('Not found');
          }
        });
      })
    },

    // get all Projects
    current_projects_GetAll: function () {
      return new Promise(function (resolve, reject) {

        // Fetch all documents
        // During development and testing, can "limit" the returned results to a smaller number
        // Remove that function call when deploying into production
        Current_projects.find()
          .sort({ Make: 'asc', Model: 'asc', Year: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }

            for (var i = 0; i < items.length; i++){
              for (var j = 0; j < items[i].Images.length; j++){   
               var temp = Buffer.from(items[i].Images[j].Image).toString('base64');   
               items[i].Images[j] = temp;  
              }
           }
           
            // Found, a collection will be returned
            return resolve(items);
          });
      })
    },

    // ############################################################
    // Inquiries 

    // add
    Inquiries_Add: function (newItem) {
      return new Promise(function (resolve, reject) {

        Inquiries.create(newItem, (error, item) => {
          if (error) {
            // Cannot add item
            return reject(error.message);
          }
          //Added object will be returned
          return resolve(item);
        });
      })
    },

    // remove
    Inquiries_Delete: function (itemId) {
      return new Promise(function (resolve, reject) {

        Inquiries.findByIdAndRemove(itemId, (error) => {
          if (error) {
            // Cannot delete item
            return reject(error.message);
          }
          // Return success, but don't leak info
          return resolve();
        })
      })
    },

    // get all inquiries
    Inquiries_GetAll: function () {
      return new Promise(function (resolve, reject) {

        // Fetch all documents
        // During development and testing, can "limit" the returned results to a smaller number
        // Remove that function call when deploying into production
        Inquiries.find()
          .sort({ Date: 'asc' })
          .exec((error, items) => {
            if (error) {
              // Query error
              return reject(error.message);
            }

            // Found, a collection will be returned
            return resolve(items);
          });
      })
    },



  } // return statement that encloses all the function members

} // module.exports
