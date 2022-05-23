import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where, Timestamp, addDoc } from "firebase/firestore/lite"
import { productsData } from "./productsData";

const firebaseConfig = {
  apiKey: "AIzaSyA4FEpQjN47aM7inc0CSD1Lc96SjpNmpg8",
  authDomain: "plantshop-e23fa.firebaseapp.com",
  projectId: "plantshop-e23fa",
  storageBucket: "plantshop-e23fa.appspot.com",
  messagingSenderId: "844492312229",
  appId: "1:844492312229:web:e0e693f614f69780ec874c"
};

const app = initializeApp(firebaseConfig);
export const firestoreDB = getFirestore(app);

export async function getAllProducts() { 
  const myCollection = collection(firestoreDB, 'products');

  const productsSnap = await getDocs(myCollection);
  
  return productsSnap.docs.map(doc => {
    return{
      ...doc.data(),
      id: doc.id
    }
  });
}

export async function getProductsByCategory(categoryId){
  const myCollection = collection(firestoreDB, 'products');

  const queryData = query(myCollection, where('category', '==', categoryId))
  const productsSnap = await getDocs(queryData);
  
  return productsSnap.docs.map(doc => {
    return{
      ...doc.data(),
      id: doc.id
    }
  });
}

export async function getProductById(productId){
  const myCollection = collection(firestoreDB, 'products');

  const productRef = doc(myCollection, productId);
  const productsSnap = await getDoc(productRef);
  
  return{
    ...productsSnap.data(),
    id: productsSnap.id
  }
}

export async function sendDataToFirebase(){
  const data = productsData

  const myCollection = collection(firestoreDB, 'products');

  data.forEach((product) => {
    const newDoc = doc(myCollection);
    setDoc(newDoc, product)
      .then(() => {
        console.log('Document written with id:', newDoc.id)
      })
      .catch(err => {
        HTMLFormControlsCollection.log('Errpr adding product', err);
      });
  });
}

// export async function createBuyOrder(buyOrder){
//   const buyTimestap = Timestamp.now();
//   const orderWithDate = {...buyOrder, date: buyTimestap}

//   const myCollection = collection(firestoreDB, 'orders');
//   const orderDoc = await addDoc(myCollection, orderWithDate);

//   // return orderDoc.id
// }

export default firestoreDB