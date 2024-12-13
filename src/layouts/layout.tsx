import Navbar from "@/components/navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <nav
        className="
      flex 
      flex-row 
      justify-between fixed top-0 left-0 w-full px-5 py-3 gap-3 z-50 shadow-md "
      >
        <Navbar />
      </nav>

      <main className="pt-[20px] overflow-x-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
