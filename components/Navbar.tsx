"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
          <div className="flex flex-col md:flex-row gap-14">
            <Link href="">
              <div className="flex gap-2 items-center">
                <Image src={"/home.png"} width={25} height={25} alt="Home" />
                <p>Homepage</p>
              </div>
            </Link>
            <Link href="">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/friends.png"}
                  width={30}
                  height={30}
                  alt="Friends"
                />
                <p>Friends</p>
              </div>
            </Link>
            <Link href="">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/stories.png"}
                  width={25}
                  height={25}
                  alt="Stories"
                />
                <p>Stories</p>
              </div>
            </Link>
          </div>
          <div className="flex gap-10 items-center">
            <div className="flex gap-5">
              <div className="w-6 h-6 relative">
                <Image src={"/people.png"} fill alt=""></Image>
              </div>
              <div className="w-6 h-6 relative">
                <Image src={"/messages.png"} fill alt=""></Image>
              </div>
              <div className="w-6 h-6 relative">
                <Image src={"/notifications.png"} fill alt=""></Image>
              </div>
            </div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <div className="flex gap-2 items-center">
                <UserButton />
                <p>Profile</p>
              </div>
            </SignedIn>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
