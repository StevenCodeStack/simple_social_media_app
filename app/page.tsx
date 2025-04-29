import Profile from "@/components/Homepage/Profile";

export default function Home() {
  return (
    <div className="flex justify-center gap-5 w-full">
      {/* Left Menu */}
      <div className="h-100 w-[20%] hidden lg:block">
        <Profile />
      </div>

      {/* Center */}
      <div className="h-100 w-[50%]"></div>

      {/* Right Menu */}
      <div className="h-100 w-[30%]"></div>
    </div>
  );
}
