import React from "react";
import Nav from "../common/Nav";
import Tables from "./Tables";

function AntdParent() {
  return (
    <div>
      <Nav />
      <div className="text-2xl text-center m-2 font-bold">
        ANTD Implementation
      </div>
      <div className="flex flex-row justify-center items-center">
        <Tables />
      </div>
    </div>
  );
}

export default AntdParent;
