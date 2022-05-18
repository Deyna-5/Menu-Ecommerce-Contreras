import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyA4FEpQjN47aM7inc0CSD1Lc96SjpNmpg8",
  authDomain: "plantshop-e23fa.firebaseapp.com",
  projectId: "plantshop-e23fa",
  storageBucket: "plantshop-e23fa.appspot.com",
  messagingSenderId: "844492312229",
  appId: "1:844492312229:web:e0e693f614f69780ec874c"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export async function getAllProducts() { 
  const myColection = collection(firestoreDB, 'products');

  const productsSnap = await getDocs(myColection);
  
  return productsSnap.docs.map(doc => {
    return{
      ...doc.data(),
      id: doc.id
    }
  });
}

export async function getProductsByCategory(categoryId){
  const myColection = collection(firestoreDB, 'products');

  const queryData = query(myColection, where('category', '==', categoryId))
  const productsSnap = await getDocs(queryData);
  
  return productsSnap.docs.map(doc => {
    return{
      ...doc.data(),
      id: doc.id
    }
  });
}

export async function getProductById(productId){
  const myColection = collection(firestoreDB, 'products');

  const productRef = doc(myColection, productId);
  const productsSnap = await getDoc(productRef);
  
  return{
    ...productsSnap.data(),
    id: productsSnap.id
  }
}

export default firestoreDB