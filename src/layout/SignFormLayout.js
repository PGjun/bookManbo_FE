import React from "react";
import { Outlet } from "react-router-dom";

const SignFormLayout = (children) => {
  return (
    <div className="w-full h-screen bg-slate-50 flex justify-center items-center">
        <div className="max-w-screen-2xl w-1/2 h-1/2 drop-shadow-xl flex">
            <div className="bg-yellow-400 w-1/2 h-full skew-y-1"></div>
            <div className="bg-white w-1/2 h-full -skew-y-1 flex justify-center items-center">
                <Outlet />
            </div>
        </div>
    </div>
  );
};

export default SignFormLayout;
