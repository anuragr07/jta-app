import * as firebase from 'firebae/app'
import 'firebase/auth'
import 'firebase/functions'
import 'firebase/firestore'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase

// Just for reference
// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCwIoRZ0o32B_m11J5mMxkiEbEVdbsLBfI
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=jta-app.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=jta-app