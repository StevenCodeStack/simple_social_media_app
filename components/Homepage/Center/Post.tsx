import Image from "next/image";
import React from "react";
import PostInteraction from "./PostInteraction";
import Comment from "./Comment";

const Post = () => {
  return (
    <div className="">
      {/* User Info */}
      <div className="flex items-center">
        <div className="w-12 h-12 relative">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            className="rounded-full object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between px-4">
          <h1 className="font-bold text-lg">Tim Banners</h1>
          <p className="text-slate-600 text-xs font-semibold">1 day ago</p>
        </div>
      </div>

      {/* Post */}
      <div className="w-full relative min-h-96 mt-4">
        <Image
          src={
            "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          fill
          alt=""
          className="rounded object-cover"
        />
      </div>
      <p className="font-semibold mt-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
        vel delectus beatae facere ducimus quos tempore perferendis aperiam
        laudantium ipsa.
      </p>

      {/* Post Interaction */}
      <PostInteraction />
      <Comment />
    </div>
  );
};

export default Post;
