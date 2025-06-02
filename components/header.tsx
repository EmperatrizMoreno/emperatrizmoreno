"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, X, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre Mí", href: "/sobre-mi" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-primary-blue/30 bg-navy-gradient shadow-lg backdrop-blur-sm"
          : "border-b border-primary-blue/30 bg-navy-gradient",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Emperatriz Moreno
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium hover:text-accent-blue transition-colors",
                  pathname === link.href ? "text-accent-blue" : "",
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/*<button onClick={toggleSearch} className="hover:text-accent-blue transition-colors">
              <Search className="w-5 h-5" />
            </button>*/}
            <Link href="https://facebook.com" className="hover:text-accent-blue transition-colors">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="https://instagram.com" className="hover:text-accent-blue transition-colors">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-accent-blue transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button onClick={toggleSearch} className="hover:text-accent-blue transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button onClick={toggleMenu} className="hover:text-accent-blue transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-primary-blue/30">
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Buscar en el blog..."
                className="bg-white/10 border-none text-white placeholder:text-gray-300"
              />
              <Button variant="ghost" className="ml-2 text-white hover:text-accent-blue">
                <Search className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-blue/30">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block font-medium hover:text-accent-blue transition-colors",
                      pathname === link.href ? "text-accent-blue" : "",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t border-primary-blue/30">
                <div className="flex space-x-4">
                  <Link href="https://facebook.com" className="hover:text-accent-blue transition-colors">
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link href="https://instagram.com" className="hover:text-accent-blue transition-colors">
                    <Instagram className="w-5 h-5" />
                  </Link>
                  <Link href="https://linkedin.com" className="hover:text-accent-blue transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
