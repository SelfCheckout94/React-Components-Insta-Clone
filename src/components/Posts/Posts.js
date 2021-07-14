import "./Posts.css";

import Post from "./Post";
import React from "react";

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts, unlikePost } = props;

  return (
    <div className="posts-container-wrapper">
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          likePost={likePost}
          unlikePost={unlikePost}
        />
      ))}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
