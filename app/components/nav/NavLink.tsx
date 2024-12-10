"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactElement } from "react";

const NavLink = ({ navLink }: { navLink: { link: string; label: string; icon: ReactElement } }) => {
  const { label, icon } = navLink;
  const pathName = usePathname(); //hook that needs to be in client mode
  const isActive = pathName === navLink.link;
  return (
    <Link
      href={navLink.link}
      className={`flex  ${
        isActive ? "  text-rose-400" : " text-gray-50"
      } hover:text-rose-400   my-2 duration-200 gap-2 items-center p-2  rounded-md`}
    >
      {React.cloneElement(icon, { className: "w-5 h-5" })}
      {label}
    </Link>
  );
};

export default NavLink;
