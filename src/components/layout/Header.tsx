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

        <div className="flex items-center gap-4">
          <Link href="/cv-builder" className="hidden lg:block text-sm font-bold text-[#475569] transition-all hover:text-[var(--color-primary)]">
            CV Builder
          </Link>
          <div className="hidden lg:flex items-center gap-3 ml-2">
            <Link href="/auth/login">
              <Button variant="ghost" className="rounded-xl font-bold text-[#475569] hover:text-[var(--color-primary)] hover:bg-transparent">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button className="rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold px-6 border-none shadow-lg shadow-green-500/20">
                Register
              </Button>
            </Link>
          </div>
          {/* Hamburger button */}
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

      {/* Mobile Menu Overlay - Refined with Backdrop */}
      {isMenuOpen && (
        <>
          <div className="fixed inset-0 z-[55] bg-slate-900/60 backdrop-blur-sm lg:hidden animate-fade-in" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[60] w-full max-w-sm bg-white lg:hidden shadow-2xl animate-fade-in">
            <div className="flex flex-col h-full p-8 pt-24 overflow-y-auto">
              <nav className="flex flex-col gap-8 flex-1">
                {[
                  { label: "Home", href: "/" },
                  { label: "Browse Jobs", href: "/jobs" },
                  { label: "Upcoming News", href: "/upcoming" },
                  { label: "Study Material", href: "/study-material" },
                  { label: "Job App Help", href: "/job-application-help" },
                  { label: "CV Builder", href: "/cv-builder" },
                ].map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="text-2xl font-black text-slate-800 tracking-tight flex items-center justify-between"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <div className="h-2 w-2 rounded-full bg-slate-100" />
                  </Link>
                ))}
              </nav>
              
              <div className="mt-auto space-y-4 pt-10 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 px-1">Platform Account Access</p>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/auth/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[11px] border-slate-200">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/register" className="w-full" onClick={() => setIsMenuOpen(false)}>
                    <Button className="w-full h-14 rounded-2xl bg-[var(--color-primary)] text-white font-black uppercase tracking-widest text-[11px] shadow-xl shadow-green-500/20">
                      Join Hub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
