
import { app, db } from "../services/firebase";
import { collection, addDoc, doc, getDocs} from "firebase/firestore";
import { async } from "@firebase/util";

/** @type {import('../../.svelte-kit/types/src/routes/calculator').RequestHandler} */
export async function post({request}) {
    const formData = Object.fromEntries((await request.formData()).entries());
    const docRef = await addDoc(collection(db, "calculator"), {
        name: meOrNotMe(formData.select),
        amount: formData.amount,
        id: await getDocs(collection(db, "calculator")).then(snap => {
            return snap.size + 1 // will return the collection size
          })
      });
    return {
         body: formData
    }
}

export async function del({request}) {
    console.log('deleting');
    console.log(request);
    return {};
}

export async function get({}) {
    const querySnapshot = await getDocs(collection(db, "calculator"));
    const dataForTable = [];
    querySnapshot.forEach((doc) => {
     // doc.data() is never undefined for query doc snapshots
     const row = doc.data();
     row.docid = doc.id;
     dataForTable.push(row);
     console.log(doc.id, " => ", doc.data());

     dataForTable.sort( function( b , a){
        if(a.id > b.id) return 1;
        if(a.id < b.id) return -1;
        return 0;
    });
});
    const dataForChart = sumOfAmounts(dataForTable);
    return {
         body: {tableData: dataForTable, data: dataForChart}
    }
}

//sudeda kaip stringus be Number()

function sumOfAmounts(dataForChart) {
    let sumMe = 0;
    let sumNotMe = 0;
    for (let i = 0; i < dataForChart.length ; i++){
        if(dataForChart[i].name === 'Me'){
            sumMe += Number(dataForChart[i].amount);
        }
        else {
            sumNotMe += Number(dataForChart[i].amount);
        }
    }
    return {'Me' : sumMe, 'Not me' : sumNotMe}
}

function meOrNotMe(users) {
    if(users == 1){
        return 'Me'
    } else {
        return 'Not me'
    }
}
