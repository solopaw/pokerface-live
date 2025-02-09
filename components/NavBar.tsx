import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
  UserProfile,
  
} from "@clerk/nextjs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-4">
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        </ul>
        <ul className="flex gap-4 right-0">
        <li>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
        <li>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
          <SignedOut>
            <SignUpButton />
          </SignedOut>
        </li>
      </ul>
        
      
    </div>
  );
}
