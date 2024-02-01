import React from "react";
import Sidebar from "../components/sidebar";
import Mainpart from "../components/mainpart";

const Home = () => {
  return (
    <div className="containerChat">
      <Sidebar />
      <Mainpart />
    </div>
  );
};

export default Home;
