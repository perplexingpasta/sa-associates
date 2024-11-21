"use client"
import React from "react";
// import dynamic from "next/dynamic";

// const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"), {
//   ssr: false,
// });

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <div>
      {/* <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 dark:bg-black-100 sm:px-10">
        <div className="w-full max-w-7xl"> */}
          {children}
          {/* <DynamicWhatsapp /> */}
        </div>
      </div>
    </>
  );
};

export default layout;
