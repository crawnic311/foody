import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyD4SuPxZGOlMt6Arh5PW-oEKcalEEj_irI',
  authDomain: 'foody-authentication.firebaseapp.com',
  projectId: 'foody-authentication',
  storageBucket: 'foody-authentication.appspot.com',
  messagingSenderId: '718275440045',
  appId: '1:718275440045:web:eeff60118c0cafdec5c524',
  measurementId: 'G-ZYXY6GLJZ8',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
