"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  if (pathname.startsWith('/admin')) return null

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e2e8f0] bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 relative">
          <Link href="/" className="flex items-center gap-2 group z-10">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white transition-transform group-hover:scale-110 shadow-sm">
            <BriefcaseBusiness size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#2d3748] group-hover:text-[var(--color-primary)] transition-colors">Rozgarhub</span>
        </Link>
        
        {/* Centered Links - only visible on large screens */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-8">
          <Link href="/jobs" className="text-sm font-semibold text-[#475569] transition-all hover:text-[var(--color-primary)] whitespace-nowrap">
            Browse Jobs
          </Link>
          <Link href="/upcoming" className="text-sm font-semibold text-[#475569] transition-all hover:text-[var(--color-primary)] whitespace-nowrap">
            Upcoming Jobs
          </Link>
          <Link href="/study-material" className="text-sm font-semibold text-[#475569] transition-all hover:text-[var(--color-primary)] whitespace-nowrap">
            Study Material
          </Link>
          <Link href="/job-application-help" className="text-sm font-semibold text-[#475569] transition-all hover:text-[var(--color-primary)] whitespace-nowrap">
            Job App Help
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link href="/cv-builder" className="hidden lg:block text-sm font-bold text-[#475569] transition-all hover:text-[var(--color-primary)]">
            CV Builder
          </Link>
          {/* Hamburger button - visible below lg (1024px) */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden text-[#4a5568] hover:bg-gray-100 hover:text-[var(--color-primary)] relative z-[70]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay - covers full screen above header */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white lg:hidden" style={{ paddingTop: '64px' }}>
          <nav className="flex flex-col items-center justify-center h-full gap-6 p-8 -mt-16">
            <Link 
              href="/" 
              className="text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/jobs" 
              className="text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Browse Jobs
            </Link>
            <Link 
              href="/upcoming" 
              className="text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Upcoming Jobs
            </Link>
            <Link 
              href="/study-material" 
              className="text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Study Material
            </Link>
            <Link 
              href="/job-application-help" 
              className="text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Job App Help
            </Link>
            <Link 
              href="/cv-builder" 
              className="text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CV Builder
            </Link>
            <Link 
              href="/contact" 
              className="text-2xl font-bold text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <div className="mt-6 pt-6 border-t border-slate-200 w-full flex flex-col items-center gap-4">
              <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="rounded-xl px-8 h-12 font-bold border-slate-200 text-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                  Sign In
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
