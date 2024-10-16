// import Sitefooter from "@/data/site-footer-menu.json"
import Link from "next/link"
import { Instagram, Facebook, Github } from 'lucide-react';
// import Image from "next/image";
export default function SiteFooter() {
  return (
    <div className="bg-[#1c1e22] text-[#AAAAAA] border shadow-md border-black w-full h-full p-5 2xl:p-5">
      <div className="md:flex justify-between">
        <p className="hidden md:block text-2xl font-semibold w-[150px] h-[20px]">!WWG</p>
        <p className="text-xs md:text-sm font-bold">&#169;Copyright World wire Game Online Center 2024</p>
        <div className="flex space-x-3 mt-5 md:mt-0">
          <Link href={`https://github.com/Holiganlammy`}>
            <Github />
          </Link>
          <Link href={`https://www.facebook.com/Holigan.xyz/`}>
            <Facebook />
          </Link>
          <Link href={`https://www.instagram.com/holiganlammy/`}>
            <Instagram />
          </Link>
        </div>
      </div>
    </div>
  )
}