import { SignedIn, SignedOut, SignInButton, SignOutButton, UserProfile } from "@clerk/nextjs";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem } from "./ui/navigation-menu";
import Link  from "next/link";

export default function NavBar() {
    return (
        <NavigationMenu>
            <NavigationMenuContent className="left-0">
                <NavigationMenuItem>
                    <Link href="/">Home</Link>
                    </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/about">About</Link>
                    </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/contact">Contact</Link>
                    </NavigationMenuItem>

                </NavigationMenuContent>
            <NavigationMenuContent className="right-0">
            <NavigationMenuItem>
                <SignedOut>
                            <SignInButton />
                          </SignedOut>
                          <SignedIn>
                            <UserProfile />
                          </SignedIn>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <SignedIn>
                            <SignOutButton />
                          </SignedIn>
            </NavigationMenuItem>
            </NavigationMenuContent>
        </NavigationMenu>
    );
}
