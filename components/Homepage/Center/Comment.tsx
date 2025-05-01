import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className="mt-5 flex justify-between gap-2">
      <div className="w-8 h-8 relative">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          className="object-cover rounded-full"
          fill
        />
      </div>
      <div className="flex-grow relative">
        <textarea
          name=""
          id=""
          className="w-full field-sizing-content py-1 pr-12 rounded contain-inline-size resize-none bg-slate-100 px-1"
        ></textarea>
        <div className="w-5 h-5 absolute top-[6px] right-4 z-1">
          <Image src={"/emoji.png"} fill alt="" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
