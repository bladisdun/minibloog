let firebaseConfig = {
    apiKey: "AIzaSyDbBCXYumVxoBUUyt0LpJ4X8rJsGdv0N-k",
    authDomain: "blog-a47ff.firebaseapp.com",
    projectId: "blog-a47ff",
    storageBucket: "blog-a47ff.appspot.com",
    messagingSenderId: "1092615389638",
    appId: "1:1092615389638:web:fc94ca610b6b99ed68f2c7",
    measurementId: "G-XRFZ55J77G"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();