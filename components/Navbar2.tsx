import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function App() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "News & Media", href: "/news-and-media" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <Navbar
      isBordered
      disableAnimation
      className="p-1 md:p-4 w-full flex justify-center items-center"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarBrand className="flex items-center -ml-4 md:ml-0 md:space-x-4">
        <Image src="/images/logo.png" width={35} height={35} alt="" />
        <p className="font-bold text-xl md:text-2xl">SA ASSOCIATES</p>
      </NavbarBrand>

      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />

      <NavbarContent className="hidden sm:flex gap-x-8" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link className="text-lg" color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/news-and-media"}>
          <Link className="text-lg" color="foreground" href="/news-and-media">
            News & Media
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/about"}>
          <Link className="text-lg" color="foreground" href="/about">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/contact"}>
          <Link className="text-lg" color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="mt-4" key={`${item}-${index}`}>
            <Link
              color="foreground"
              className="w-full text-2xl"
              href={item.href}
              onClick={handleLinkClick} // Close menu on link click
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
