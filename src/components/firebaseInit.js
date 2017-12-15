import firebase from 'firebase' // ES6 Module Syntex of (var firebase = require('firebase');)
import 'firebase/firestore'
import firebasConfig from './firebasConfig'

// Initialize Firebase App 
const firebaseApp = firebase.initializeApp(firebasConfig)

// Export
export default firebaseApp.firestore()