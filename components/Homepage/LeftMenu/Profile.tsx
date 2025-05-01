import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="p-3 px-5 bg-white rounded-2xl flex flex-col justify-center items-center">
      <div className="w-full h-20 relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className="rounded"
          fill
          alt="asd"
        ></Image>
        <div className="w-12 h-12 absolute -bottom-5 right-1/2 translate-x-1/2">
          <Image
            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
            fill
            alt=""
            className="rounded-full object-cover"
          ></Image>
        </div>
      </div>

      <h1 className="text-center mt-6 font-bold">Tim Banners</h1>
      <div className="flex justify-center items-center gap-2">
        <div className="flex">
          <div className="w-5 h-5 relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              }
              className="rounded-full object-cover"
              fill
              alt=""
            />
          </div>
          <div className="w-5 h-5 relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              }
              className="rounded-full object-cover"
              fill
              alt=""
            />
          </div>
          <div className="w-5 h-5 relative">
            <Image
              src={
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
              }
              className="rounded-full object-cover"
              fill
              alt=""
            />
          </div>
        </div>
        <p className="text-xs font-semibold text-slate-600">142 Followers</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-400 transition-all text-white font-semibold px-2 py-1 rounded w-fit mt-3">
        My Profile
      </button>
    </div>
  );
};

export default Profile;
