import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
	return (
		<div className="sticky top-0 w-full bg-white z-50 shadow-sm">
			<div className="flex mr-32 justify-end">
				<NavigationMenu>
					<NavigationMenuList className="flex gap-2 h-18">
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
							<NavigationMenuLink className="hover:bg-white" href="#portfolio">
								PORTFOLIO
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink className="hover:bg-white" href="#projects">
								PROJECTS
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink className="hover:bg-white" href="#contact">
								CONTACT
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
}
