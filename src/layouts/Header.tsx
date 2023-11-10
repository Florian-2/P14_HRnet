import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<header className="pt-1 flex justify-between items-center gap-2">
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
							className={navigationMenuTriggerStyle()}
						>
							List of employees
						</NavLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
