import { ReactNode, useState } from "react";
import Icon from "./components/Icon/Icon";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  const [activeNavbar, setActiveNavbar] = useState<boolean>(false);

  const toggleNavbar = () => setActiveNavbar(!activeNavbar);

  return (
    <>
      <Icon
        iconName="polygon"
        className="icon-blink absolute top-0 right-0 z-10"
      />

      <Icon
        iconName="menu"
        className={`md:opacity-0 md:pointer-events-none ${
          activeNavbar
            ? "max-md:pointer-events-none max-md:opacity-0"
            : "max-md:opacity-100"
        } absolute top-3 right-3 z-40 cursor-pointer rounded-full py-1 px-1 bg-white transition-all duration-300`}
        onClick={toggleNavbar}
      />

      <Icon
        iconName="close"
        className={`opacity-0 max-md:${
          activeNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
        } absolute top-3 size-6 right-3 z-40 cursor-pointer rounded-full py-1 px-1 bg-white transition-all duration-300`}
        onClick={toggleNavbar}
      />
      <div
        className={`max-md:flex flex-col w-screen absolute z-30 left-0 pt-7 transition-all duration-500 -top-96 max-md:${
          activeNavbar ? "top-0" : "-top-96"
        }`}
      >
        <Navbar />
      </div>
      <div className="flex flex-row gap-3 overflow-hidden">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
