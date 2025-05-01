import React from "react";
import FriendRequest from "./FriendRequest";

const FriendRequestList = () => {
  return (
    <div className="p-3 px-5 bg-white rounded-2xl shadow">
      <header className="flex justify-between items-center">
        <p className="text-slate-500 text-sm font-bold">Friend Request</p>
        <p className="text-blue-500 text-xs font-semibold">See All</p>
      </header>

      {/* Friend Request List */}
      <div className="grid grid-cols-1 gap-3 mt-3">
        <FriendRequest />
        <FriendRequest />
        <FriendRequest />
      </div>
    </div>
  );
};

export default FriendRequestList;
