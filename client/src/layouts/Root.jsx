import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>

      {/* <Outlet */}

      <div className="min-h-[calc(100vh-136px)]">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
