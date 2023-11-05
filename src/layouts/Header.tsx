import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<header className="max-w-screen-2xl mx-auto flex justify-between items-center gap-2 mt-2">
			<NavLink
				to="/"
				className="text-3xl font-medium"
			>
				HRnet
			</NavLink>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavLink
							to="/employees"
							className={navigationMenuTriggerStyle({ className: "text-base" })}
						>
							Liste des employés
						</NavLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
