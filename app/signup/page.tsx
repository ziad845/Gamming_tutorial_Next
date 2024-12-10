import React from "react";
import Singup from "../components/forms/Singup";

const Page = () => {
  return (
    <main
      className="min-h-screen flex items-center justify-center w-full bg-cover bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/bg2.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%]">
        <Singup />
      </div>
    </main>
  );
};

export default Page;
