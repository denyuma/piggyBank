import firebase from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyA9u7QOF1Ty6jnKZ2MqYqG5ePNapPqYkLs',
	authDomain: 'piggybank-97f86.firebaseapp.com',
	projectId: 'piggybank-97f86',
	storageBucket: 'piggybank-97f86.appspot.com',
	messagingSenderId: '999155976687',
	appId: '1:999155976687:web:10c9852b77bcb38bdc0e1a',
	measurementId: 'G-WWWPQLGCB5',
};

const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default firebase;
