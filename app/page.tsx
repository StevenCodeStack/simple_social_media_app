import AddPost from "@/components/Homepage/Center/AddPost";
import Stories from "@/components/Homepage/Center/Stories";
import Links from "@/components/Homepage/RightMenu/Links";
import Profile from "@/components/Homepage/RightMenu/Profile";

export default function Home() {
  return (
    <div className="flex justify-center gap-5 w-full">
      {/* Left Menu */}
      <div className=" w-[20%] hidden lg:block">
        <Profile />
        <Links />
      </div>

      {/* Center */}
      <div className="max-w-130 flex-grow">
        <Stories />
        <AddPost />
      </div>

      {/* Right Menu */}
      <div className="h-100 w-[30%] hidden md:block"></div>
    </div>
  );
}
