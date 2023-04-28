import React from "react";
import UserStyle from "../styles/UserPosts.module.css";

export default function userPosts() {
    return (
        <>
            <div className={UserStyle.userPostsContainer}>
            <h1 className={UserStyle.callout}>Posts</h1>
            <div className={UserStyle.createNew}>
                <h2 className={UserStyle.newCallout}> Create New Post</h2>
                <div className={UserStyle.plusHorizontal}></div>
                <div className={UserStyle.plusVertical}></div>
            </div>
            </div>
        </>
    );
};