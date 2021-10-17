const functions = require("firebase-functions");
const { admin, db } = require("./util/admin");
const FBAuth = require("./util/fbauth");
const app = require('express')();
const { getAllRecipes, newRecipe } = require('./handlers/recipes');
const { signup, login } = require('./handlers/users.js');

app.get('/recipes', getAllRecipes);
//app.post('/recipes', newRecipe);

app.post('/signup', signup)
app.get('/login', login)

exports.api = functions.https.onRequest(app);

// TODO: Refactor the code to different folders.
// TODO: Add user authentication
// TODO: Save recipes that a user has submitted under their account.