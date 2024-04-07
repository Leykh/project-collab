import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { db } from "..";

const firebaseSvc = {
  async getPosts(id) {
    return db.collection("POSTS").get();
  },
  async postPosts(post) {
    await addDoc(collection(db, "POSTS"), post);
  },
};

export default firebaseSvc;