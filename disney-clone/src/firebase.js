// Import the functions you need from the SDKs you need Fixed Code (v9 Modular Syntax — recommended)
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9wNsWSPdFBS4FkFIoFUzUMitJ9ZdpVvY",
    authDomain: "disneyplus-clone-32e26.firebaseapp.com",
    projectId: "disneyplus-clone-32e26",
    storageBucket: "disneyplus-clone-32e26.firebasestorage.app",
    messagingSenderId: "606843192267",
    appId: "1:606843192267:web:bcb9addd623102c77bec4e",
    measurementId: "G-3X9SL7NED0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Initialize services
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp)

export {db, auth, provider, storage};
export default db;
