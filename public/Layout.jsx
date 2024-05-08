import { Outlet, Link } from "react-router-dom";

//component
import Navbar from "../component/Navbar";

const Layout = () => {
  return (
    <div className="w-full h-fit">
      {/* <Navbar/> */}
      <Outlet />
    </div>
  )
};

export default Layout;