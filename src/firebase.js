import firebase from "firebase";

const firebaseConfig = {
        apiKey: "AIzaSyAqkcx1eQsuvVq3i3OIw80rUc0ZyQRP4kg",
        authDomain: "partnerup-40ec8.firebaseapp.com",
        databaseURL: "https://partnerup-40ec8.firebaseio.com",
        projectId: "partnerup-40ec8",
        storageBucket: "partnerup-40ec8.appspot.com",
        messagingSenderId: "109538704303",
        appId: "1:109538704303:web:3ecce06ff78c973e220d5a",
        measurementId: "G-JJPJ4KKDH0"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;