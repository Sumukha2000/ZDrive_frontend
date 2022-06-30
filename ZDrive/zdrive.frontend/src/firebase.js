import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCOkTMiuG4WHr1st9VMdYFbUhRrvcLTuu4",
  authDomain: "react--drive-7c207.firebaseapp.com",
  projectId: "react--drive-7c207",
  storageBucket: "react--drive-7c207.appspot.com",
  messagingSenderId: "77964653249",
  appId: "1:77964653249:web:245ae36c48d621c39a9a40",
  measurementId: "G-YXBDSCWSVT"
})

const firestore = app.firestore()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()

export default app