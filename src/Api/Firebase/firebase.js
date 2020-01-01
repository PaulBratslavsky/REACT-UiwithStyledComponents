import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { firebaseConfig } from './config';

// Create Class 
class Firebase {

    constructor() {
        // Initialize Firebase
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    // Register Method
    async createAccount(name, email, password) {
        
        const response = await this.auth.createUserWithEmailAndPassword(email, password);
        console.log('REGISTER METHOD CALLED', response);

        // Update name on profile
        await response.user.updateProfile({
            displayName: name
        }); 

        const newUser = {
            name: response.user.displayName,
        }

        // Add user to database
        return await this.db.collection('users').doc(response.user.uid).set(newUser);
    }

    // SIGN IN METHOD
    async login(email,password) {
        const response = await this.auth.signInWithEmailAndPassword(email, password);
        console.log('SIGN IN METHOD CALLED', response);
        return response;        
    }

    // LOG OUT METHOD
    async logout() {
        await this.auth.signOut();
    }

}

const firebase = new Firebase();

export default firebase;
