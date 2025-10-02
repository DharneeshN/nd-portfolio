import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "../atoms/mode-toggle";

function TopBar() {

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm transition-colors backdrop-blur-md bg-white/70 dark:bg-black/30 border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-x-12">
            <NavigationMenuItem>
              {/* <NavigationMenuLink asChild active> */}
                <Link className="text-sm font-medium transition-colors hover:text-foreground text-foreground" href="/" aria-current="page">Home</Link>
              {/* </NavigationMenuLink> */}
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about">About Me</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
      </div>
    </header>
  );
}

export default TopBar;
