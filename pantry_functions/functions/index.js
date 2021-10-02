const functions = require("firebase-functions");

const { admin, db } = require("./util/admin");

// Get all the recipes in the recipe collection
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

// Add a new recipe to the recipe collection
exports.addRecipe =  functions.https.onRequest((req, res) => {

})