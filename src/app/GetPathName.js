"use client";
import { usePathname } from "next/navigation";

export default function GetPathName() {
  const pathname = usePathname();
  let newString = pathname.slice(pathname.lastIndexOf("/") + 1); 
  return newString;
}




