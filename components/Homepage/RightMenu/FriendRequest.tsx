import Image from "next/image";
import React from "react";

const FriendRequest = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center gap-3">
        <div className="w-10 h-10 relative">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            className="rounded-full object-cover"
            fill
          />
        </div>
        <p className="font-semibold text-sm">Berndan Eich</p>
      </div>
      <div className="flex gap-3 justify-center items-center">
        <button className="relative h-5 w-5">
          <Image src={"/accept.png"} fill alt="" />
        </button>
        <button className="relative h-5 w-5">
          <Image src={"/reject.png"} fill alt="" />
        </button>
      </div>
    </div>
  );
};

export default FriendRequest;
