import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB0OfayBjIYJMp72JkSaTGhUq6KB-3G00Y",
  authDomain: "todo-app-ss-d1c84.firebaseapp.com",
  projectId: "todo-app-ss-d1c84",
  storageBucket: "todo-app-ss-d1c84.appspot.com",
  messagingSenderId: "609089112052",
  appId: "1:609089112052:web:e4d318c88fa2c2fb591ba1",
  databaseURL: "https://todo-app-ss-d1c84.firebaseio.com"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}