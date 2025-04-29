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
    <div className="mt-5 flex flex-col gap-6 bg-white rounded-2xl p-3">
      {linksData.map((item) => (
        <div className="flex gap-3 items-center" key={item.picture}>
          <div className="w-5 h-5 relative">
            <Image src={item.picture} fill alt="" />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Links;
