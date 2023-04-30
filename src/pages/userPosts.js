import React from "react";
import UserStyle from "../styles/UserPosts.module.css";
import useFirebase from "@/useHooks/useFirebase";
import Message from "@/components/message";

export default function userPosts() {
  const firebase = useFirebase();
  const [blogsList, setBlogsList] = React.useState([]);
  const [error, setError] = React.useState("");

  const blogsListComponents = blogsList.map((blog) => {
    return <li key={blog.id}>{blog.title}</li>;
  });

  async function pullBlogsFromDb() {
    try {
      if (!firebase.currentUser.email)
        throw { code: "auth-failed", name: "Firebase Auth" };
      const blogs = await firebase.getBlogs();
      setBlogsList(blogs);
      setError("");
    } catch (e) {
      if (e.code === "auth-failed" && e.name === "Firebase Auth") {
        setError(`${e.name} (${e.code}): You Need To Login!`);
      } else {
        setError(e.toString());
      }
    }
  }

  return (
    <>
      <div className={UserStyle.userPostsContainer}>
        <h1 className={UserStyle.callout}>Posts</h1>
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
        <button onClick={pullBlogsFromDb}>Load Blogs</button>
        <ul>{blogsListComponents}</ul>
      </div>
    </>
  );
}
