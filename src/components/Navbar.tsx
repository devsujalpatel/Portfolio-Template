"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import React from "react";


export function NavbarComp() {


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
  {/* Left side: Logo */}
  <div className="flex flex-1">
    <NavbarLogo />
  </div>

  {/* Right side: Theme toggle and nav items */}
  <div className="flex items-center space-x-4">
    <ModeToggle />
    <NavItems
      items={[
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
      ]}
      className="-ml-4"
    />
  </div>
</NavBody>


        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

        
        </MobileNav>
      </Navbar>
      

      
    </div>
  );
}


