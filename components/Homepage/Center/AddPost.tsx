import Image from "next/image";
import React from "react";

const AddPost = () => {
  return (
    <div className="rounded-2xl flex bg-white shadow p-3 px-5 mt-4">
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
      <div className="flex-grow px-3">
        <textarea
          className="rounded bg-slate-100 w-full px-2"
          placeholder="Tell your days!"
          name="Post"
          id=""
        ></textarea>
        <div className="flex gap-3 mt-2">
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 relative">
              <Image src={"/addimage.png"} fill alt="" />
            </div>
            <p>Photo</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 relative">
              <Image src={"/addVideo.png"} fill alt="" />
            </div>
            <p>Video</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 relative">
              <Image src={"/poll.png"} fill alt="" />
            </div>
            <p>Poll</p>
          </div>
          <div className="flex gap-1 items-center">
            <div className="w-5 h-5 relative">
              <Image src={"/addevent.png"} fill alt="" />
            </div>
            <p>Event</p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-5 h-5 relative">
          <Image src={"/emoji.png"} fill alt="" />
        </div>
        <button className="p-1 mt-2 text-white font-semibold rounded bg-blue-500 hover:bg-blue-400 transition-all">
          Send
        </button>
      </div>
    </div>
  );
};

export default AddPost;
