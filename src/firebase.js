import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDrpA5mcpBc3Pcx0CMRkwGV1zNDpipunNw",
    authDomain: "whatsappclone-8a236.firebaseapp.com",
    projectId: "whatsappclone-8a236",
    storageBucket: "whatsappclone-8a236.appspot.com",
    messagingSenderId: "980574902625",
    appId: "1:980574902625:web:37bcfc7f8047b44428cd20",
    measurementId: "G-C223BVLTF2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;