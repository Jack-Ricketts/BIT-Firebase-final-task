import { app, db } from "../services/firebase";
import { doc, deleteDoc } from "firebase/firestore";

export async function get({url}){
    console.log(url.searchParams.get('docid'));
    await deleteDoc(doc(db, "calculator", url.searchParams.get('docid')));
    return {status: 400};
}