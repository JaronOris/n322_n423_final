import React from "react";
import UserStyle from "../styles/UserPosts.module.css";
import useFirebase from "@/useHooks/useFirebase";
import Message from "@/components/message";
import useGlobalValues from "@/useHooks/useGlobalValues";
import BlogForm from "../components/newPostForm";
import Modal from "../components/Modal";
import Link from "next/link";

export default function userPosts() {
  const firebase = useFirebase();
  const { blogsList, update, error, blogsListLoadTime } = useGlobalValues();

  React.useEffect(function () {
    if (!firebase.currentUser.email) return;
    if (Date.now() - blogsListLoadTime < 1000 * 60 * 30) return;
    pullBlogsFromDb();
  });

  const blogsListComponents = blogsList.map((blog) => {
    return (
      <li key={blog.id}>
        <div>
          <Link href={`/posts/${blog.id}`}>{blog.title}</Link>
          <button onClick={deleteBlog.bind(deleteBlog, blog.id, blog.user)}>
            Delete Post
          </button>
        </div>
      </li>
    );
  });

  async function deleteBlog(blogId, userEmail) {
    try {
      if (!firebase.currentUser.email)
        throw { code: "auth-failed", name: "Firebase Auth" };
      if (firebase.currentUser.email !== userEmail)
        throw { code: "firestore-unauthorized", name: "Firebase Firestore" };
      await firebase.removeBlog(blogId);
      update({
        blogsList: blogsList.filter((blog) => blog.id !== blogId),
        error: "",
      });
    } catch (e) {
      if (e.code === "auth-failed" && e.name === "Firebase Auth") {
        update({
          error: `${e.name} (${e.code}): You need to be login yo view your posts.`,
        });
      } else if (
        e.code === "firestore-unauthorized" &&
        e.name === "Firebase Firestore"
      ) {
        update({
          error: `${e.name} (${e.code}): You can  only delete posts you have made.`,
        });
      } else {
        update({ error: e.toString() });
      }
    }
  }

  async function pullBlogsFromDb() {
    try {
      if (!firebase.currentUser.email)
        throw { code: "auth-failed", name: "Firebase Auth" };
      const blogs = await firebase.getBlogs();
      update({ blogsList: blogs, error: "", blogsListLoadTime: Date.now() });
    } catch (e) {
      if (e.code === "auth-failed" && e.name === "Firebase Auth") {
        update({ error: `${e.name} (${e.code}): You Need To Login!` });
      } else {
        update({ error: e.toString() });
      }
    }
  }

  async function addMyBlog(blogDetails) {
    try {
      if (!firebase.currentUser.email)
        throw { code: "auth-failed", name: "Firebase Auth" };
      const newBlogDetails = await firebase.addBlog({
        ...blogDetails,
        user: firebase.currentUser.email,
      });
      update({ blogsList: blogsList.concat(newBlogDetails) });
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
            <div className={UserStyle.createNew}>
              <h2 className={UserStyle.newCallout}>
                Hey {firebase.currentUser.displayName}! <br></br>
                Create a New Post!
              </h2>
              <div className={UserStyle.plusHorizontal}></div>
              <div className={UserStyle.plusVertical}></div>
            </div>
            <Modal trigger={<button>New Post</button>}>
              <BlogForm addMyBlog={addMyBlog} />
            </Modal>
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
      </div>
    </>
  );
}
