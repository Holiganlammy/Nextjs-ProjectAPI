"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from 'lucide-react';
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import siteMenuItems from "@/data/site-menu-items.json";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Form, FormField, FormControl, FormItem } from "@/components/ui/form";

export default function SiteHeader() {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isOpenMenu, setCloseMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const router = useRouter();
  const pathname = usePathname();
  const form = useForm<UniversalSearch>({
    defaultValues: { q }
  });
  function onSubmitValid(values: UniversalSearch) {
    // console.log(values)
    const { q: _q } = values;
    const urlSearchParams = new URLSearchParams();
    if (_q && _q !== "") urlSearchParams.set("q", _q);
    const urlSearchParamsString = urlSearchParams.toString();
    router.push(`/search${urlSearchParamsString ? `?${urlSearchParamsString}&limit=16` : ""}`);
  }
  const openMenu = () => {
    setCloseMenu(!isOpenMenu);
  };
  const closeMenu = () => {
    setCloseMenu(false);
  };
  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;

      if (pathname === "/search") {
        if (!isSmallScreen) {
          setSearchOpen(true);
        } else {
          setSearchOpen(false);
        }
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isSmallScreen = window.matchMedia("(max-width: 640px)").matches;
      if (pathname === "/search" && !isSmallScreen) {
        return;
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);


  useEffect(() => {
    form.setValue("q", q);
  }, [q]);
  return (
    <header className="bg-[#FBFBFB] text-[#051525] border-b p-2 md:p-5 shadow-md">
      <div className="pl-4 pr-4">
        <div className="text-sm flex justify-between h-14">
          <div className="flex h-full">
            <div className="xl:hidden flex items-center pr-5">
              <Menu onClick={openMenu} aria-label="Open Menu" />
              <div
                className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'}`}
              >
                <div className="flex justify-end p-4">
                  <X onClick={closeMenu} aria-label="Close Menu" />
                </div>
                <nav className="flex flex-col p-4">
                  {siteMenuItems.map((menuItem) => (
                    <Link key={menuItem.title} href={menuItem.href} className="py-2 text-lg">
                      {menuItem.title}
                    </Link>
                  ))}
                </nav>
              </div>
              {isOpenMenu && (
                <div
                  className="fixed inset-0 bg-black opacity-50 z-40"
                  onClick={closeMenu}
                ></div>
              )}
            </div>
            <div className="flex h-full pr-3">
              <h1 className="font-semibold self-center">
                <Link href="/">
                  <Image src="/images/Site/Group609.png" alt="LogoRAMAIX" width="130" height="75" className="" />
                </Link>
              </h1>
            </div>
            <div className="hidden xl:flex">
              {siteMenuItems.map((menuItem) => {
                // Check if the current pathname matches the menu item's href
                const isActive = pathname === menuItem.href;
                return (
                  <div key={menuItem.title} className="flex h-full mx-5">
                    <Link
                      href={menuItem.href}
                      className={`relative self-center text-lg`}
                      style={{ color: isActive ? menuItem.activecolor : '#051525' }} // ใช้ style แทน
                    >
                      {menuItem.title}
                      <span
                        className={`absolute bottom-[-4px] left-0 h-[2px] w-7 transition-all duration-300 ${isActive ? "bg-current scale-x-100" : "bg-transparent scale-x-0"} transform origin-left`}
                      />
                    </Link>
                  </div>
                );
              })}

            </div>
          </div>
          <div className="w-full md:max-w-32 flex space-x-7 items-center">
            <div ref={searchRef} className="w-full md:w-[40%]">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitValid, console.error)}>
                  <FormField
                    control={form.control}
                    name="q"
                    render={({ field }) =>
                      <FormItem>
                        <FormControl>
                          <div className="relative flex items-center">
                            <Input
                              type="text"
                              className={`h-[50px] w-0 p-[10px] text-[18px] tracking-[2px] transition-[all_0.5s_ease-in-out] text-black absolute right-0 opacity-0 duration-500 ${isSearchOpen ? "w-[270px] md:w-[300px] opacity-100 border border-black transition-[all_500ms_cubic-bezier(0,0.110,0.35,2)] right-[-10px] pointer-events-auto visibility-visible" : "pointer-events-none visibility-hidden"} bg-gray-100`}
                              placeholder="Search..."
                              {...field}
                              required
                            />
                            {isSearchOpen ?
                              <button type="submit">
                                <Search
                                  onClick={() => setSearchOpen(true)}
                                  className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${isSearchOpen ? "text-black" : "text-black"} cursor-pointer`}
                                />
                              </button>
                              : <Search
                                onClick={() => setSearchOpen(true)}
                                className={`absolute right-0 top-1/2 transform -translate-y-1/2 ${isSearchOpen ? "text-black" : "text-black"} cursor-pointer`}
                              />}
                            {field && (
                              <X
                                onClick={() => (form.setValue("q", ""))}
                                className={`absolute right-7 top-1/2 transform -translate-y-1/2 text-black cursor-pointer ${isSearchOpen ? "block" : "hidden"}`}
                              />
                            )}
                          </div>
                        </FormControl>
                      </FormItem>
                    }
                  />
                </form>
              </Form>
            </div>
            <div className="w-[20%] md:w-[60%] space-x-2 flex justify-center text-sm md:text-lg items-center">
              <button className="text-blue-950 font-bold">EN</button>
              <span >|</span>
              <button>TH</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
