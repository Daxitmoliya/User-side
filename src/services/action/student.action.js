import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { ADD_ADMIN_REJECT, ADD_ADMIN_REQUEST, ADD_DATA,FAILURE_DATA, RECEIVE_DATA, REQUEST_DATA } from "../const";

const firebaseConfig = {
  apiKey: "AIzaSyBCA5iqUazTW5oERpf8kS-e8p8-u6U_KAQ",
  authDomain: "fir-pro-f1028.firebaseapp.com",
  projectId: "fir-pro-f1028",
  storageBucket: "fir-pro-f1028.appspot.com",
  messagingSenderId: "311588339596",
  appId: "1:311588339596:web:b33d1ff9ef6d3312efe0a9"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

export const addAdminRequest = () => ({
  type: ADD_ADMIN_REQUEST,
});

export const addData = (data) => ({
  type: ADD_DATA,
  payload: data,
});

export const addAdminReject = (error) => ({
  type: ADD_ADMIN_REJECT,
  payload: error,
});

export const addadmin = (data) => {
  return (dispatch) => {
    dispatch(addAdminRequest());

    console.log("Data:", data); 

    addDoc(collection(db, "servicies"), data)
      .then((res) => {
        console.log(res);
        dispatch(fetchData());
      })
      .catch((error) => {
        console.log(error);
        dispatch(addAdminReject(error));
      });
  };
};


export const requestData = () => ({
  type: REQUEST_DATA,
});

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  payload: data,
});

export const failureData = (error) => ({
  type: FAILURE_DATA,
  payload: error,
});


export const fetchData = () => {
  return (dispatch) => {
    let arr = [];
    dispatch(requestData());
    getDocs(collection(db, "servicies"))
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("da", doc.data());
          arr = [...arr, { id: doc.id, ...doc.data() }];
        });

        dispatch(receiveData(arr));
      })
      .catch((error) => {
        console.log(error);
        dispatch(failureData(error));
      });
  };
};

