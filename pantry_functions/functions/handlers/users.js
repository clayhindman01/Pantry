const { admin, db } = require("../util/admin");
const config = require('../util/config');
const firebase = require('firebase/compat/app');
const auth = require('firebase/compat/auth');
const { validateSignupData, validateLoginData } = require('../util/validators')
firebase.initializeApp(config);
//const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth")

module.exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle
    };
    console.log(req.body)
}

module.exports.login = (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    console.log(user)
}