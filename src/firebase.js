import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { computed, onMounted, onUnmounted } from 'vue'
import { firebaseConfig } from './firebase-config'
import 'firebase/firestore'

initializeApp(firebaseConfig);

export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
  )