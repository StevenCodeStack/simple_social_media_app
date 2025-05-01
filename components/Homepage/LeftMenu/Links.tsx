import Image from "next/image";
import React from "react";

const Links = () => {
  const linksData = [
    { title: "My Post", picture: "/posts.png" },
    { title: "Activity", picture: "/activity.png" },
    { title: "Marketplace", picture: "/market.png" },
    { title: "Events", picture: "/events.png" },
    { title: "Albums", picture: "/albums.png" },
    { title: "Videos", picture: "/videos.png" },
    { title: "News", picture: "/news.png" },
    { title: "Courses", picture: "/courses.png" },
    { title: "Lists", picture: "/lists.png" },
    { title: "Settings", picture: "/settings.png" },
  ];
  return (
    <div className="mt-4 flex flex-col gap-3 bg-white rounded-2xl p-2">
      {linksData.map((item) => (
        <div
          className="flex gap-3 items-center px-2 py-1 rounded group hover:bg-slate-200 transition-all"
          key={item.picture}
        >
          <div className="w-5 h-5 relative">
            <Image src={item.picture} fill alt="" />
          </div>
          <p className="text-slate-500 group-hover:text-black">{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Links;
