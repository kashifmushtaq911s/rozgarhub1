import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BriefcaseBusiness, Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8 relative">
        <Link href="/" className="flex items-center gap-2 group z-10">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white transition-transform group-hover:scale-110">
            <BriefcaseBusiness size={18} />
          </div>
          <span className="text-xl font-bold tracking-tight text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">Rozgarhub</span>
        </Link>
        
        {/* Centered Link */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <Link href="/jobs" className="text-base font-bold text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)] whitespace-nowrap">
            Browse Jobs
          </Link>
        </nav>

        <div className="flex items-center gap-6">
          <Link href="/cv-builder" className="hidden md:block text-base font-bold text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)]">
            CV Builder
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-[var(--color-primary)]/8 hover:text-[var(--color-primary)]">
            <Menu size={20} />
          </Button>
        </div>
      </div>
    </header>
  )
}
