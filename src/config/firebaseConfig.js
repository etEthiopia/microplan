import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD9Ti4uVKSADGezhgp31GXDrsyzXt7glQA',
	authDomain: 'microplan-89f32.firebaseapp.com',
	projectId: 'microplan-89f32',
	storageBucket: 'microplan-89f32.appspot.com',
	messagingSenderId: '678416315946',
	appId: '1:678416315946:web:01192603433c61f8ee3553',
	measurementId: 'G-07E95EXKY8'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnaphots: true });

export default firebase;
