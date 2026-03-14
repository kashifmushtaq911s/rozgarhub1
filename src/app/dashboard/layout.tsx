import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  LayoutDashboard, 
  FileText, 
  Bookmark, 
  Bell, 
  UserCircle 
} from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 flex-1 flex flex-col md:flex-row gap-8">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-sm">
          <div className="mb-6 px-4">
            <h2 className="text-lg font-semibold">My Account</h2>
            <p className="text-sm text-[var(--color-muted-foreground)]">Job Seeker</p>
          </div>
          <nav className="space-y-1">
            <Link href="/dashboard" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)]">
              <LayoutDashboard size={18} /> Overview
            </Link>
            <Link href="/dashboard/applications" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] text-[var(--color-muted-foreground)]">
              <FileText size={18} /> Applications
            </Link>
            <Link href="/dashboard/saved-jobs" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] text-[var(--color-muted-foreground)]">
              <Bookmark size={18} /> Saved Jobs
            </Link>
            <Link href="/dashboard/alerts" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] text-[var(--color-muted-foreground)]">
              <Bell size={18} /> Job Alerts
            </Link>
            <Link href="/dashboard/profile" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] text-[var(--color-muted-foreground)]">
              <UserCircle size={18} /> Profile
            </Link>
          </nav>
          
          <div className="mt-8 px-4 pt-4 border-t border-[var(--color-border)] text-center">
             <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50 hover:text-red-600 justify-start">Logout</Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0">
        {children}
      </main>
    </div>
  )
}
