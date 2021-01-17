import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCikfooJTpKo3TxBMwsiWDRUrYGZiDedgE",
  authDomain: "vue-full-course-cd22d.firebaseapp.com",
  projectId: "vue-full-course-cd22d",
  storageBucket: "vue-full-course-cd22d.appspot.com",
  messagingSenderId: "304932355100",
  appId: "1:304932355100:web:135687242ca8b76e0cb3d9"
}
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export const chatsRef = db.ref("chats");

export default firebase;