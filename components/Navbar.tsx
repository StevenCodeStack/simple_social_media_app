"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex w-full justify-between px-8 md:px-14 lg:px-25 xl:px-40 py-4 lg:py-6 bg-white items-center">
      <h1 className="text-blue-500 font-bold text-2xl">SteveSocial</h1>
      <div className="">
        <button
          className="md:hidden text-2xl text-blue-400"
          onClick={() => setOpen(true)}
        >
          =
        </button>
        <nav
          className={`${
            open ? `right-0` : `right-[-100%]`
          } transition-all md:justify-between flex flex-col md:flex-row md:static md:py-0 md:px-0 py-40 px-12 gap-12 md:gap-6 fixed h-screen bg-slate-50 md:bg-transparent md:h-fit w-[60vw] top-0 right-0`}
        >
          <button
            className="md:hidden absolute top-5 right-8 text-2xl text-blue-400"
            onClick={() => setOpen(false)}
          >
            x
          </button>
          <div className="flex flex-col md:flex-row gap-10">
            <a href="">
              <div className="flex gap-2 items-center">
                <Image src={"/home.png"} width={25} height={25} alt="Home" />
                <p>Homepage</p>
              </div>
            </a>
            <a href="">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/friends.png"}
                  width={30}
                  height={30}
                  alt="Friends"
                />
                <p>Friends</p>
              </div>
            </a>
            <a href="">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/stories.png"}
                  width={25}
                  height={25}
                  alt="Stories"
                />
                <p>Stories</p>
              </div>
            </a>
          </div>
          <a href="">
            <div className="flex gap-2 items-center">
              <Image
                src={
                  "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
                }
                width={30}
                height={30}
                className="rounded-full h-8 w-8 object-cover"
                alt="Profile"
              />
              <p>Profile</p>
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
