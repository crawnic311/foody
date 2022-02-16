import firebase from 'firebase/app'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBVWJL7EPIr76Hy2DO1vqn2ygIXTLViG5Y',
  authDomain: 'foody-e93de.firebaseapp.com',
  projectId: 'foody-e93de',
  storageBucket: 'foody-e93de.appspot.com',
  messagingSenderId: '139702560769',
  appId: '1:139702560769:web:7cf6882ab6b59ccab97800',
  measurementId: 'G-4N7Q2DW7XH',
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export { storage, firebase as default }
