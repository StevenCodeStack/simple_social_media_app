import Image from "next/image";
import React from "react";

const PostInteraction = () => {
  return (
    <div className="mt-5 flex justify-between items-center">
      <div className="flex gap-2">
        {/* Like */}
        <div className="gap-3 flex justify-between items-center bg-slate-100 rounded-2xl px-3 py-1">
          <div className="w-5 h-5 relative">
            <Image src={"/like.png"} fill alt="" />
          </div>
          <p className="text-slate-600 hidden sm:inline text-[13px]">|</p>
          <p className="text-slate-600 hidden sm:inline text-[13px]">
            123 Likes
          </p>
        </div>
        {/* Comment */}
        <div className="gap-3 flex justify-between items-center bg-slate-100 rounded-2xl px-3 py-1">
          <div className="w-5 h-5 relative">
            <Image src={"/comment.png"} fill alt="" />
          </div>
          <p className="text-slate-600 hidden sm:inline text-[13px]">|</p>
          <p className="text-slate-600 hidden sm:inline text-[13px]">
            123 Comments
          </p>
        </div>
      </div>
      {/* Share */}
      <div className="gap-3 flex justify-between items-center bg-slate-100 rounded-2xl px-3 py-1">
        <div className="w-5 h-5 relative">
          <Image src={"/share.png"} fill alt="" />
        </div>
        <p className="text-slate-600 hidden sm:inline text-[13px]">|</p>
        <p className="text-slate-600 hidden sm:inline text-[13px]">Share</p>
      </div>
    </div>
  );
};

export default PostInteraction;
