
// // import * as firebase from "firebase/app";
// // import 'firebase/storage';
// // import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBTmed49T6v2JHscLhwDeimluDYtPPAD7k",
//     authDomain: "netflix-clone-163c5.firebaseapp.com",
//     projectId: "netflix-clone-163c5",
//     storageBucket: "netflix-clone-163c5.appspot.com",
//     messagingSenderId: "419096175094",
//     appId: "1:419096175094:web:b0bce8db07c181135267d7"
//   };

//   const firebaseApp = firebase.initailizeApp(firebaseConfig);
//   const db = firebaseApp.firestore();
//   const auth = firebase.auth();

  //   export { auth };

//   export default db;


import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBTmed49T6v2JHscLhwDeimluDYtPPAD7k",
    authDomain: "netflix-clone-163c5.firebaseapp.com",
    projectId: "netflix-clone-163c5",
    storageBucket: "netflix-clone-163c5.appspot.com",
    messagingSenderId: "419096175094",
    appId: "1:419096175094:web:b0bce8db07c181135267d7"
};

const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth =getAuth();


export {getAuth, auth};
export default db;