import React from "react";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
    <div className=" flex relative h-screen w-full font-inter ">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
};

export default App;
