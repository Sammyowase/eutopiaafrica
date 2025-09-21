"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Sparkles, Heart, Camera, School, Handshake, Ticket, Flame, Mail, TreePine } from "lucide-react"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Sparkles, label: "Highlights", href: "#highlights" },
  { icon: Heart, label: "Make a Wish", href: "#wish" },
  // { icon: Camera, label: "Photo Shoot", href: "#photoshoot" },
  { icon: School, label: "For Schools", href: "/schools" },
  { icon: Handshake, label: "For Sponsors", href: "/sponsors" },
  { icon: Ticket, label: "Tickets & PJs", href: "#tickets" },
  //{ icon: Flame, label: "Hype Wall", href: "#hype" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-lg shadow-xl border-b border-white/10" : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Midnight in PJs Logo"
              className={`h-40 w-auto lg:h-42 lg:w-auto transition-all duration-300 ${isScrolled ? "brightness-100" : "brightness-100"}`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-2 2xl:space-x-4">
            {navItems.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1.5 text-sm 2xl:text-base font-medium transition-all duration-200 px-2 2xl:px-3 py-2 rounded-lg hover:scale-105 whitespace-nowrap ${
                    isScrolled
                      ? "hover:text-accent hover:bg-accent/20 text-white/90"
                      : "hover:text-accent hover:bg-white/10 text-white/90"
                  }`}
                >
                  <IconComponent className="h-4 w-4 2xl:h-5 2xl:w-5 flex-shrink-0" />
                  <span className="hidden 2xl:inline">{item.label}</span>
                  <span className="xl:inline 2xl:hidden text-sm leading-tight">{item.label}</span>
                </a>
              )
            })}
          </div>

          {/* Medium Desktop Navigation - Simplified */}
          <div className="hidden lg:flex xl:hidden items-center space-x-2">
            {navItems.slice(0, 6).map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-1.5 text-sm font-medium transition-all duration-200 px-2 py-2 rounded-lg hover:scale-105 whitespace-nowrap ${
                    isScrolled
                      ? "hover:text-accent hover:bg-accent/20 text-white/90"
                      : "hover:text-accent hover:bg-white/10 text-white/90"
                  }`}
                  title={item.label}
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0" />
                  <span className="text-xs leading-tight">{item.label.split(' ')[0]}</span>
                </a>
              )
            })}
            {/* More menu for remaining items */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1.5 text-sm font-medium transition-all duration-200 px-2 py-2 rounded-lg hover:scale-105 whitespace-nowrap ${
                  isScrolled
                    ? "hover:text-accent hover:bg-accent/20 text-white/90"
                    : "hover:text-accent hover:bg-white/10 text-white/90"
                }`}
              >
                <Menu className="h-4 w-4 flex-shrink-0" />
                <span className="text-xs leading-tight">More</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-48 bg-black/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navItems.slice(6).map((item) => {
                  const IconComponent = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-3 text-sm font-medium text-white hover:text-accent transition-all duration-200 py-3 px-4 hover:bg-accent/20 first:rounded-t-lg last:rounded-b-lg"
                    >
                      <IconComponent className="h-4 w-4 text-accent" />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className={`xl:hidden transition-all duration-200 hover:scale-110 ${
              isScrolled ? "hover:bg-white/10" : "hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
          </Button>
        </div>

        {isOpen && (
          <div className="xl:hidden fixed top-16 lg:top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10 shadow-2xl mobile-nav-overlay">
            <div className="container mx-auto px-4 py-6">
              <div className="grid gap-1">
                {navItems.map((item) => {
                  const IconComponent = item.icon
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-4 text-base font-medium text-white hover:text-accent transition-all duration-200 py-4 px-4 rounded-xl hover:bg-accent/20 group border border-transparent hover:border-accent/20 hover:scale-[1.02] whitespace-nowrap"
                      onClick={() => setIsOpen(false)}
                    >
                      <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform text-accent flex-shrink-0" />
                      <span>{item.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
