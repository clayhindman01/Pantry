import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
 
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

    const [ user ] = useAuthState(auth)
    const recipesRef = firestore.collection('savedRecipes');
    console.log(user)
    const query = recipesRef;

    const [recipes] = useCollectionData(query, {idField: 'id'});
    console.log(recipes)
    

    return (
        <div>
            {recipes && recipes.map(rcp => <p>{rcp.recipeIDS}</p>)}
        </div>
    )
}
