// Initialize Firebase admin
import admin from "firebase-admin";
admin.initializeApp();

const db = admin.firestore();
export default { admin, db };