import React from "react";
import HomeStyle from "../styles/Home.module.css";
import useFirebase from "@/useHooks/useFirebase";

export default function HomePage() {
  const firebase = useFirebase();
  return (
    <>
      <div className={HomeStyle.banner}>
        Welcome to uBlog! <br></br>{" "}
        {firebase.currentUser.displayName || "Login!"}
      </div>
      <div className={HomeStyle.cardContainer}>
        <div className={HomeStyle.card}>
          <h2 className={HomeStyle.cardTitle}>Front Page</h2>
          <p className={HomeStyle.cardDesc}>Checkout the most popular blogs!</p>
        </div>
        <div className={HomeStyle.card}>
          <h2 className={HomeStyle.cardTitle}>Posts</h2>
          <p className={HomeStyle.cardDesc}>
            Look at your past blogs, or create new ones!
          </p>
        </div>
        <div className={HomeStyle.card}>
          <h2 className={HomeStyle.cardTitle}>Login</h2>
          <p className={HomeStyle.cardDesc}>
            Login to your existing account, or sign up to start posting!
          </p>
        </div>
      </div>
    </>
  );
}
