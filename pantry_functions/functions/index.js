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
    if (req.method !== "POST") {
        return res.status(400).json({ error: "Method must be POST" });
    }

    // Create a new recipe
    // TODO: Add functionality for recipe_id and user_id
    const newRecipe = {
        ingredients: req.body.ingredients,
        user_id: req.body.user_id,
        createdAt: new Date().toISOString(),
        food_type: req.body.food_type,
        recipe_name: req.body.recipe_name,
        instructions: req.body.instructions
    }
    db.collection('recipes')
        .add(newRecipe)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully` })
        })
        .catch(error => {
            res.status(500).json({ error: "Something went wrong" })
            console.error(error)
        })
})

// TODO: Refactor the code to different folders.