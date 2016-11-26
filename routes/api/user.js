const express = require('express');
const { createUser, listUsers, getUserInfo } = require('../../models/user.js');
const userRoute = express.Router();

/**
 * Creates a new user by handling the POST request from a form with action `/users`
 * It uses the createUser middleware from the user model
 */

// userRoute.get('/', listUsers, (req, res) => {
//   res.json(res.users.map((user) => {
//     // only pull out the username and the id
//     const { id, username } = user;
//     return { id, username };
//   }));
// });

userRoute.post('/', createUser, (req, res) => { // ROUTE TO CREATE A NEW USER UPON LOGIN
  res.send('user added');
});

userRoute.get('/:id', getUserInfo, (req, res) => { // ROUTE TO GRAB USER INFO
  res.json(res.info);
});


module.exports = userRoute;
