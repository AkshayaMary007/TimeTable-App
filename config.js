import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBLI5cEw-vO_CclchCIR71VFmXjv4n0FZg",
    authDomain: "time-waste-app.firebaseapp.com",
    projectId: "time-waste-app",
    storageBucket: "time-waste-app.appspot.com",
    messagingSenderId: "239500716333",
    appId: "1:239500716333:web:80edd86bf65326ac824ba4",
    measurementId: "G-71S0H9LNJ8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
