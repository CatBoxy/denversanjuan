import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, updateDoc, doc, serverTimestamp } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDBMrOBeBpYqgM4SOTIY3RUiCOi7Q1ONL0",
  authDomain: "denver-sanjuan.firebaseapp.com",
  projectId: "denver-sanjuan",
  storageBucket: "denver-sanjuan.appspot.com",
  messagingSenderId: "336235159528",
  appId: "1:336235159528:web:b6d4403a44fe37ce5cce5d"
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