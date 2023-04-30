import React from "react";
import UserStyle from "../styles/UserPosts.module.css";
import useFirebase from "@/useHooks/useFirebase";
import Message from "@/components/message";
import useGlobalValues from "@/useHooks/useGlobalValues";

export default function userPosts() {
  const firebase = useFirebase();
  const { blogsList, update, error, blogsListLoadTime } = useGlobalValues();

  React.useEffect(function () {
    if (!firebase.currentUser.email) return;
    if (Date.now() - blogsListLoadTime < 1000 * 60 * 30) return;
    pullBlogsFromDb();
  });

  const blogsListComponents = blogsList.map((blog) => {
    return <li key={blog.id}>{blog.title}</li>;
  });

  async function pullBlogsFromDb() {
    update({ blogsListLoadTime: Date.now() });
    try {
      if (!firebase.currentUser.email)
        throw { code: "auth-failed", name: "Firebase Auth" };
      const blogs = await firebase.getBlogs();
      update({ blogsList: blogs, error: "" });
    } catch (e) {
      if (e.code === "auth-failed" && e.name === "Firebase Auth") {
        update({ error: `${e.name} (${e.code}): You Need To Login!` });
      } else {
        update({ error: e.toString() });
      }
    }
  }

  return (
    <>
      <div className={UserStyle.userPostsContainer}>
        <h1 className={UserStyle.callout}>Posts</h1>
        {firebase.currentUser.email ? (
          <>
            <button onClick={pullBlogsFromDb}>Refresh Blogs</button>
            <ul>{blogsListComponents}</ul>
          </>
        ) : (
          <></>
        )}
        {error ? (
          <>
            <Message type="error">{error}</Message>
          </>
        ) : (
          <></>
        )}
        <div className={UserStyle.createNew}>
          <h2 className={UserStyle.newCallout}>
            Hey {firebase.currentUser.displayName}! <br></br>
            Create a New Post!
          </h2>
          <div className={UserStyle.plusHorizontal}></div>
          <div className={UserStyle.plusVertical}></div>
        </div>
      </div>
    </>
  );
}
