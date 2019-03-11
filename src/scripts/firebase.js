import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var config = {
    apiKey: "AIzaSyB8QBC4fl7pi6JruaRmwem5d98YR22rS5o",
    authDomain: "hackathon-fabbe.firebaseapp.com",
    databaseURL: "https://hackathon-fabbe.firebaseio.com",
    projectId: "hackathon-fabbe",
    storageBucket: "hackathon-fabbe.appspot.com",
    messagingSenderId: "887537889135"
  };
firebase.initializeApp(config);
var db = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
db.settings(settings);
export { firebase, db };
