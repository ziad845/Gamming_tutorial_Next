"use client";
import React from "react";
import Search from "../Search";
import ButtonGame from "../defaults/ButtonGame";
import { useGetUser } from "@/lib/queryFunctions";
import User from "../User";
import SkeletonCustom from "../SkeletonCustom";

const NavBar = () => {
  const { user, isLoading } = useGetUser();
  return (
    <nav>
      <header className="flex justify-between items-center p-4">
      
        <div className="w-full sm:w-auto">
          <Search />
        </div>
        
        
        <div className="flex items-center gap-4 sm:gap-2">
  {isLoading ? (
    <SkeletonCustom circle />
  ) : user?.data ? (
    <User user={user.data} />
  ) : (
    <div className="flex items-center gap-2">
      <ButtonGame link="/login" text="Login" />
      <ButtonGame link="/signup" text="Sign up" />
    </div>
  )}
</div>

      </header>
    </nav>
  );
};

export default NavBar;
