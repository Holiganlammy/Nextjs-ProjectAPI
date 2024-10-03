import Sitefooter from "@/data/site-footer-menu.json"
import Link from "next/link"
import { ExternalLink } from 'lucide-react';
export default function SiteFooter() {
  return (
    <div className="bg-[#ffce2f] text-[#FFFFFF] w-full h-full p-5 2xl:p-5">
      <p className="flex justify-center">Copy right 2024</p>
      {/* <div className="max-w-[1550px] mx-auto pt-10">
        <div className="xl:flex flex-wrap justify-between">
          <div className="w-full xl:w-[40%] text-center pt-[50px]">
            <h1 className="text-4xl font-bold mb-4">Rama IX Art Museum</h1>
            <p className="text-lg mb-8">Thailand&apos;s Contemporary Art on the Web</p>
            <div className="pb-10 xl:mt-[10px] text-base flex xl:hidden w-full xl:w-[35%] justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
                <path fill="#ffffff" d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </div>
          </div>
          <div className="w-full xl:w-[60%]">
            <div className="grid xl:grid-cols-4 gap-5">
              {Sitefooter.map((menufooter, index) => (
                <div key={index} className="w-full min-w-[200px] flex flex-col items-start">
                  <h2 className="text-lg font-bold mb-5 min-h-[60px] flex items-center text-left">
                    {menufooter.title}
                  </h2>
                  <div className={`grid ${menufooter.title === "Related Website" ? 'grid-cols-1' : 'grid-cols-2'} xl:grid-cols-1 gap-5 xl:gap-0`}>
                    {menufooter.links.map((menuitem, index) => (
                      <div key={index} className="mb-5">
                        {menuitem.title === "Supreme Artist" || menuitem.title === "Wisithsilapin" ? (
                          <Link className="text-base flex items-center mr-5" href={menuitem.href}>
                            {menuitem.title}
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </Link>
                        ) : (
                          <Link href={menuitem.href} className="text-base block text-left">
                            {menuitem.title}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <footer className="mt-[30px]  text-base block xl:hidden">
              Copyright &copy; 2024 Rama IX Art Museum Foundation. All rights reserved. Powered by IX Artbase
            </footer>
          </div>
        </div>
      </div>
      <div className="flex justify-between mx-auto max-w-[1250px] pb-10">
          <Link className="mt-[10px] text-base hidden xl:flex xl:w-[25%] justify-center items-center" href={`https://www.facebook.com/rama9art/`}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 30 30">
              <path fill="#ffffff" d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </Link>
          <footer className="text-base hidden xl:flex xl:items-center w-full text-left xl:w-[75%]">
            Copyright &copy; 2024 Rama IX Art Museum Foundation. All rights reserved. Powered by IX Artbase
          </footer>
        </div> */}
    </div>
  )
}

