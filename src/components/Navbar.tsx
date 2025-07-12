import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky top-0 w-full bg-white text-gray-700 z-50 shadow-sm">
        <div className="flex mr-24 justify-end">
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
                  <NavigationMenuLink className="hover:bg-white" href="#cv">
                    CV
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
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="hover:bg-white"
                    href="#projects"
                  >
                    PROJECTS
                  </NavigationMenuLink>
                </NavigationMenuItem>
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
              <div
                className={
                  isOpen
                    ? "border-l-3 fixed right-0 top-0 flex h-screen w-1/3 items-center border-border bg-background shadow-[-1px_0px_10px_0px_rgba(17,24,39,1)] duration-300 ease-in lg:hidden"
                    : "border-l-3 fixed right-[-50%] top-0 flex h-screen w-1/3 items-center border-border bg-background shadow-[-1px_0px_10px_0px_rgba(17,24,39,1)] duration-300 ease-in lg:hidden"
                }
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
                    <NavigationMenuLink className="hover:bg-white" href="#cv">
                      CV
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
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="hover:bg-white"
                      href="#projects"
                    >
                      PROJECTS
                    </NavigationMenuLink>
                  </NavigationMenuItem>
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
                    <AiOutlineMenu size={20} />
                  )}
                </div>
              </div>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </>
  );
}
