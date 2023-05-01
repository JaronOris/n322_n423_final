import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth(app);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore(app);

export default function useFirebase() {
  const initialUser = { email: "", displayName: "" };
  const [currentUser, setCurrentUser] = React.useState(initialUser);

  auth.onAuthStateChanged(function (user) {
    if (user && currentUser.email !== user.email) {
      setCurrentUser({
        email: user.email,
        displayName: user.displayName,
      });
    } else if (!user && currentUser.email) {
      setCurrentUser(initialUser);
    }
  });

  return {
    currentUser,
    async loginUser() {
      const signInResults = await auth.signInWithPopup(googleProvider);
      return {};
    },
    async logoutUser() {
      await auth.signOut();
      return {};
    },
    async getBlogs() {
      const blogsSnapshot = await db.collection("blogs").get();
      const blogsList = [];
      for (let blog of blogsSnapshot.docs) {
        const blogData = blog.data();
        blogsList.push({
          ...blogData,
          id: blog.id,
        });
      }
      return blogsList;
    },
    async addBlog(blogsInfo) {
      const blogsSnapshot = await db.collection("blogs").add(blogsInfo);
      return {
        ...blogsInfo,
        id: blogsSnapshot.id,
      };
    },
    async removeBlog(blogId) {
      await db.collection("blogs").doc(blogId).delete;
      return {};
    },
    async getBlogById(blogId) {
      const blogsSnapshot = await db.collection("blogs").doc(blogId).get();
      return [];
    },
  };
}
