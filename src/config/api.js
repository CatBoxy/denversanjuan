import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, updateDoc, doc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'currency')

export const fetchCurrencyCollection = async () => {
  try {
    let data = [];
    await getDocs(colRef)
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id })
        })
      });
    return data;
  } catch (err) {
    console.log(err.message)
  }
}

export const updateCurrencyValues = async (values) => {
  try {
    const docRef = doc(db, 'currency', values.id)

    updateDoc(docRef, {
      compra: values.compra,
      venta: values.venta,
      createdAt: serverTimestamp()
    })
    return
  } catch (err) {
    console.log(err.message)
  }
}