// import functions from "firebase-functions";
// import app from 'express';
// import { getAllRecipes, addRecipe } from './handlers/recipes.js';

// import { GoogleAuthProvider} from "firebase/auth";

// app.get('/recipes', getAllRecipes);
// app.post('/recipe', addRecipe);

// app.post("/signup", (req, res) => {
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log("signed in.")
//         })
//         .catch((err) => {
//             console.error(err);
//         })
//     console.log(newUser)
// })
// exports.api = functions.https.onRequest(app);
// TODO: Save recipes that a user has submitted under their account.

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.getAllRecipes = functions.https.onRequest((req, res) => {
    db.collection("recipes")
        .orderBy("created_at", "desc")
        .get()
        .then((data) => {
            let recipes = [];
            data.forEach((doc) => {
                recipes.push({
                    recipe_id: doc.id,
                    ingredients: doc.data().ingredients,
                    user_id: doc.data().user_id,
                    created_at: doc.data().created_at,
                    food_type: doc.data().food_type,
                    recipe_name: doc.data().recipe_name,
                    instructions: doc.data().instructions
                });
            });
            return res.json(recipes);
        })
        .catch((error) => console.error(error)); 
})

exports.addRecipe = functions.https.onRequest((req, res) => {

    if (req.method != "POST") {
        return res.status(400).json({ error: "Method must be POST" });
    }

    const newRecipe = {
        recipe_name: req.body.recipe_name
    }

    db.collection("recipes")
        .add(newRecipe)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully` });
        })
        .catch(err => {
            res.status(500).json({ error: "Something went wrong" });
            console.error(err);
        })
})