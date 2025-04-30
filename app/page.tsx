import Stories from "@/components/Homepage/Center/Stories";
import Links from "@/components/Homepage/RightMenu/Links";
import Profile from "@/components/Homepage/RightMenu/Profile";

export default function Home() {
  return (
    <div className="flex justify-between gap-5 w-full">
      {/* Left Menu */}
      <div className=" w-[20%] hidden lg:block">
        <Profile />
        <Links />
      </div>

      {/* Center */}
      <div className="h-100 flex-grow">
        <Stories />
      </div>

      {/* Right Menu */}
      <div className="h-100 w-[30%] hidden md:block"></div>
    </div>
  );
}
