import React from "react";

export default function blogForm({ addMyBlog }) {
  const [blogDetails, setBlogDetails] = React.useState({
    title: "",
    body: "",
    tag: "",
  });

  async function submitForm(e) {
    e.preventDefault();
    addMyBlog(blogDetails);
  }

  function updateBlogDetails(e) {
    const { value, name } = e.currentTarget;
    setBlogDetails({ ...blogDetails, [name]: value });
  }

  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <label>Post title</label>
          <input
            name="title"
            type="text"
            value={blogDetails.title}
            onChange={updateBlogDetails}
          />
        </div>
        <div>
          <label>Post Text</label>
          <input
            name="body"
            type="text"
            value={blogDetails.body}
            onChange={updateBlogDetails}
          />
        </div>
        <div>
          <label>Tag</label>
          <input
            name="tag"
            type="text"
            value={blogDetails.tag}
            onChange={updateBlogDetails}
          />
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </>
  );
}
