import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")!.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <div className="sticky top-0 w-full bg-white text-gray-700 z-50 shadow-sm">
        <div className="flex mr-4 md:mr-24 justify-end">
          <NavigationMenu className="">
            <NavigationMenuList className=" gap-2 h-22">
              {/* Main Navbar */}
              <div className="hidden lg:flex">
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:bg-white" href="#header">
                    HOME
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="hover:bg-white" href="#about">
                    ABOUT
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="hover:bg-white"
                    href="#credentials"
                  >
                    CREDENTIALS
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="hover:bg-white"
                    href="#portfolio"
                  >
                    PORTFOLIO
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuLink
                    className="hover:bg-white"
                    href="#projects">
                    PROJECTS
                  </NavigationMenuLink>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="hover:bg-white"
                    href="#contact"
                  >
                    CONTACT
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </div>
              {/* Mobile Navbar */}
              <div ref={navContainerRef}>
                <div
                  className={cn(
                    "fixed right-0 top-0 flex h-screen w-1/3 items-center bg-background shadow-[0px_0px_7px_0px_rgba(17,24,39,1)] duration-300 ease-in lg:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full",
                  )}
                >
                  <div className="flex items-center justify-center w-full flex-col">
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="hover:bg-white"
                        href="#header"
                      >
                        HOME
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="hover:bg-white"
                        href="#about"
                      >
                        ABOUT
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="hover:bg-white"
                        href="#credentials"
                      >
                        CREDENTIALS
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="hover:bg-white"
                        href="#portfolio"
                      >
                        PORTFOLIO
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    {/* <NavigationMenuItem>
                    <NavigationMenuLink
                      className="hover:bg-white"
                      href="#projects">
                      PROJECTS
                    </NavigationMenuLink>
                  </NavigationMenuItem> */}
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        className="hover:bg-white"
                        href="#contact"
                      >
                        CONTACT
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </div>
                </div>
                <div className="relative z-40 flex items-center">
                  {/* Mobile Button */}
                  <div
                    onClick={handleOpen}
                    className="right-0 block p-4 lg:hidden"
                  >
                    {isOpen ? (
                      <AiOutlineClose size={20} />
                    ) : (
                      <AiOutlineMenu size={20} className="pointer-events-auto" />
                    )}
                  </div>
                </div>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
