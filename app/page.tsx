import AddPost from "@/components/Homepage/Center/AddPost";
import PostGrid from "@/components/Homepage/Center/PostGrid";
import Stories from "@/components/Homepage/Center/Stories";
import Links from "@/components/Homepage/LeftMenu/Links";
import Profile from "@/components/Homepage/LeftMenu/Profile";
import FriendRequestList from "@/components/Homepage/RightMenu/FriendRequestList";

export default function Home() {
  return (
    <div className="flex justify-center gap-5 w-full">
      {/* Left Menu */}
      <div className=" min-w-[230px] hidden xl:block">
        <Profile />
        <Links />
      </div>

      {/* Center */}
      <div className="max-w-150 flex-grow">
        <Stories />
        <AddPost />
        <PostGrid />
      </div>

      {/* Right Menu */}
      <div className="h-100 w-[320px] min-w-[320px] hidden lg:block">
        <FriendRequestList />
      </div>
    </div>
  );
}
