import React, {useState}from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getDoc } from 'firebase/firestore';
 
firebase.initializeApp({
    apiKey: "AIzaSyBfLNHHS9B5fci_fdPV4Ie7-Vbmim2IWeQ",
    authDomain: "pantry-9f73f.firebaseapp.com",
    projectId: "pantry-9f73f",
    storageBucket: "pantry-9f73f.appspot.com",
    messagingSenderId: "382840381565",
    appId: "1:382840381565:web:75f295fb1db7dcca01d114",
    measurementId: "G-0PVX6XCYS2"
})


const firestore = firebase.firestore();
const auth = firebase.auth();

export default function SavedRecipes() {

    const [uid, setUid] = useState('')
    const [ user ] = useAuthState(auth)

    if (user) {
        if (uid != user.uid) {
            setUid(user.uid)
        }
    } 

    const recipesRef = firestore.collection('savedRecipes').where('uid', '==', uid);
    // const query = getDocs(recipesRef);

    const [recipes] = useCollectionData(recipesRef, {idField: 'id'});
    console.log(recipes)
    
    //This only shows the recipeIDs from firebase, not the whole recipe.
    return (
        <div>
            {recipes && recipes.map(rcp => <p>{rcp.recipeIDS}</p>)}
        </div>
    )
}

//TODO: Add the whole recipes to firebase. Will most likely need sub collections.
//TODO: Add functionality to add favorite recipes from the search menu.