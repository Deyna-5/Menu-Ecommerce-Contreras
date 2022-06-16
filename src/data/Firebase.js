import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, query, setDoc, where, Timestamp, addDoc } from "firebase/firestore/lite"
import { productsData } from "./productsData";

const firebaseConfig = {
  apiKey: "AIzaSyB21GCp_n7X0RbqInJbFI2lHHohuYHCN8g",
  authDomain: "plantshop2-74f63.firebaseapp.com",
  projectId: "plantshop2-74f63",
  storageBucket: "plantshop2-74f63.appspot.com",
  messagingSenderId: "216145699029",
  appId: "1:216145699029:web:dba015539a36ca72de425c"
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

export default firestoreDB