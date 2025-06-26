import React from "react";
import Link from "next/link";

const Button = ({ href = "#", children = "Hubungi Kami", className = "" }) => {
  return (
    <Link
      href={href}
      className={`px-6 py-3 bg-[#373536] rounded-full text-white inline-block hover:bg-white border border-[#373536] hover:text-[#373536] transition-all ease-in-out duration-300 hover:transition-all hover:ease-in-out hover:duration-300 hover:font-medium ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;
