import * as firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyBejUz1Rv4dXIYekuiOxmpX0VtXmLQCQgA",
    authDomain: "note1258741.firebaseapp.com",
    databaseURL: "https://note1258741.firebaseio.com",
    projectId: "note1258741",
    storageBucket: "note1258741.appspot.com",
    messagingSenderId: "861194717828",
    appId: "1:861194717828:web:76500cb288aac2bdfa10d1",
    measurementId: "G-8NQ0MJSMDS"
  };

   firebase.initializeApp(firebaseConfig);
   export const noteData = firebase.database().ref('youtube');
   export const noteData1 = firebase.database().ref('dataForNote');
   export const comment = firebase.database().ref('comment/personal');
   export const comment1 = firebase.database().ref('comment/new');
   export const semesterDB = firebase.database().ref('semesterDB');