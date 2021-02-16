import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCdX2lx6zXNkt9eJ4fWvMOZslJF8zTFDQg",
    authDomain: "batch7reactnative.firebaseapp.com",
    databaseURL: "https://batch7reactnative-default-rtdb.firebaseio.com",
    projectId: "batch7reactnative",
    storageBucket: "batch7reactnative.appspot.com",
    messagingSenderId: "1043075552988",
    appId: "1:1043075552988:web:3b1fa554f6510d62da8619",
    measurementId: "G-41KHDRJ3NR"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };