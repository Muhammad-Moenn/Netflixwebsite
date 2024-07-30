// import { initializeApp } from "firebase/app";
// import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
// import {addDoc, collection, getFirestore} from 'firebase/firestore'
// const firebaseConfig = {
//   apiKey: "AIzaSyDQRjsGt63szybJVXa3crrRtxPDLSbYeZg",
//   authDomain: "netfilixclone-a9470.firebaseapp.com",
//   projectId: "netfilixclone-a9470",
//   storageBucket: "netfilixclone-a9470.appspot.com",
//   messagingSenderId: "639697353147",
//   appId: "1:639697353147:web:a44852c9cd3264b474ac9e"
// };


// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup= async(name,email,password)=>{
      
//     try{
//        const res=  await createUserWithEmailAndPassword(auth,name,email,password)  
//        const user= res.user;
//        await addDoc(collection(db,"user"),{
//         uid:user.uid,
//         name,
//         authProvider:"local",
//         email
//        });
//     }catch (error){
//         console.log(error)
//         alert(error)
//     }
// }
// const login= async(email,password)=>{
      
//     try{
//         await signInWithEmailAndPassword(auth,email,password) ; 
       
//     }catch (error){
//         console.log(error)
//         alert(error)
//     }
// }

// const logout=()=>{
//     signOut(auth)
// }

// export {db,auth,signup,login,logout}

import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDQRjsGt63szybJVXa3crrRtxPDLSbYeZg",
  authDomain: "netfilixclone-a9470.firebaseapp.com",
  projectId: "netfilixclone-a9470",
  storageBucket: "netfilixclone-a9470.appspot.com",
  messagingSenderId: "639697353147",
  appId: "1:639697353147:web:a44852c9cd3264b474ac9e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout=()=>{
        signOut(auth)
    }

export { db, auth, signup, login, logout };
