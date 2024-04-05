import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // apiKey:   process.env.REACT_APP_apiKey  ,
  // authDomain:   process.env.REACT_APP_authDomain  ,
  // projectId:    process.env.REACT_APP_projectId  ,
  // storageBucket:    process.env.REACT_APP_storageBucket  ,
  // messagingSenderId:    process.env.REACT_APP_messagingSenderId  ,
  // appId:    process.env.REACT_APP_appId  ,
  // measurementId:    process.env.REACT_APP_measurementId  
apiKey: "AIzaSyAj-RtcOcFU2BxBNBCQ7aXaYQISWk0OQ4o",
authDomain :"gentleman-s-cut.firebaseapp.com",
projectId : "gentleman-s-cut",
storageBucket : "gentleman-s-cut.appspot.com",
messagingSenderId: "115461551312",
ppId :"1:115461551312:web:de5beafbbce2ba3fcc5ad5",
measurementId :" G-FRYSC0SF2"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  default app;