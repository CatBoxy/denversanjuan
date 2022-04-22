import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, updateDoc, doc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID
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