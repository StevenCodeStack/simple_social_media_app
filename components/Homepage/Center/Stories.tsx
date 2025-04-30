import Image from "next/image";
import React from "react";

const Stories = () => {
  return (
    <div className="bg-white rounded-2xl p-3 shadow flex gap-6 overflow-x-scroll hideScrollBar">
      <div className="flex flex-col justify-center items-center">
        <div className="w-16 h-16 relative">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            className="rounded-full object-cover self-center border-2 border-slate-400"
            alt=""
          />
          <button className="absolute text-4xl font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            +
          </button>
        </div>
        <p className="text-xs mt-1 font-semibold">Add a Story</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-16 h-16 relative">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            className="rounded-full object-cover self-center border-2 border-slate-400"
            alt=""
          />
        </div>
        <p className="text-xs mt-1 font-semibold">Tim</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-16 h-16 relative">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            className="rounded-full object-cover self-center border-2 border-slate-400"
            alt=""
          />
        </div>
        <p className="text-xs mt-1 font-semibold">Tim</p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="w-16 h-16 relative">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            fill
            className="rounded-full object-cover self-center border-2 border-slate-400"
            alt=""
          />
        </div>
        <p className="text-xs mt-1 font-semibold">Tim</p>
      </div>
    </div>
  );
};

export default Stories;
