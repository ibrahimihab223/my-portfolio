"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "الخدمات", href: "#services" },
    { label: "أعمالنا", href: "#portfolio" },
    { label: "اتصل بنا", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              محفظتي
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
            >
              ابدأ الآن
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="القائمة"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-foreground hover:text-primary transition-colors text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              ابدأ الآن
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
