import React from "react";
import { Outlet } from "react-router-dom";


export default function PageLayout() {
    return (
        <React.Fragment>
            <div className="flex justify-center items-center bg-gradient-to-bl from-red-500 to-blue-800 h-[100vh] w-full">
                <Outlet />
            </div>
        </React.Fragment>
    );
}

