import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCesz4md3Y1pwsxHHu7bVXXL4uLeQlim2I",
    authDomain: "giftedchat-1f5a6.firebaseapp.com",
    projectId: "giftedchat-1f5a6",
    storageBucket: "giftedchat-1f5a6.appspot.com",
    messagingSenderId: "349962816281",
    appId: "1:349962816281:web:6dc4f513de97c4652a1388"
  };

let app;

if(firebase.apps.length===0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const db=app.firestore();
const auth=firebase.auth();
export {db,auth};