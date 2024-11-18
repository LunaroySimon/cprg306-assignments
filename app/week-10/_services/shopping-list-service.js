import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => { 
    try {
        const q = query(collection(db, "users", userId, "items"));
        const querySnapshot = await getDocs(q);

        const mappedItems = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
        }); 

        return mappedItems;
      } catch (error) {
        console.error("Error in getItems: ", error);
      }
};

export const addItem = async (userId, item) => {
    try {
        const docRef = await addDoc(collection(db, "users", userId, "items"), item);
        return docRef.id;

      } catch (error) {
        console.error("Error in addItem: ", error);
      }
 };