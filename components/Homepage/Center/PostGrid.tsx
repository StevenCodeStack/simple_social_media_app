import React from "react";
import Post from "./Post";

const PostGrid = () => {
  return (
    <div className="mt-4 rounded-2xl shadow gap-y-14 bg-white p-3 px-4 grid grid-col-1">
      <Post />
    </div>
  );
};

export default PostGrid;
