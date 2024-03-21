import Image from "next/image";
import HeaderComponent from "./components/HeaderComponent";
import Profile from "./components/Profile";
import {Chart} from "./components/Chart";
import Meetings from "./components/Meetings";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row h-full w-screen bg-[#F4F6F9]">
      <div className=" flex flex-col gap-4 p-4 w-screen md:w-[70%]">
      <HeaderComponent/>
      <Profile/>
      <Chart/>
      </div>
      <div className=" flex flex-col gap-4 p-4 md:w-[30%]">
        <Meetings/>
      </div>
    </main>
  );
}
