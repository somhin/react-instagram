import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyADPZCqiA-BWINGbwZgZkuVTny6N03YAag",
	authDomain: "instagram-clone-4482c.firebaseapp.com",
	databaseURL: "https://instagram-clone-4482c.firebaseio.com",
	projectId: "instagram-clone-4482c",
	storageBucket: "instagram-clone-4482c.appspot.com",
	messagingSenderId: "54222613415",
	appId: "1:54222613415:web:028cf96a67f36b2235a482",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default { db, auth, storage };
