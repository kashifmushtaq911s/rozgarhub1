import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Briefcase,
  FileText,
  Users,
  Settings,
  ShieldAlert
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 flex-1 flex flex-col md:flex-row gap-8">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="sticky top-24 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-sm">
          <div className="mb-6 px-4 flex items-center gap-3">
            <div className="bg-red-500/10 text-red-500 p-2 rounded-lg">
              <ShieldAlert size={20} />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Admin Panel</h2>
              <p className="text-xs text-[var(--color-muted-foreground)]">Super Administrator</p>
            </div>
          </div>
          <nav className="space-y-1">
            <Link href="/admin" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]">
              <LayoutDashboard size={18} /> Overview
            </Link>
            <Link href="/admin/jobs" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] text-[var(--color-muted-foreground)]">
              <Briefcase size={18} /> Manage Jobs
            </Link>
            <Link href="/admin/applications" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] text-[var(--color-muted-foreground)]">
              <FileText size={18} /> Applications
            </Link>
            <Link href="/admin/users" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] text-[var(--color-muted-foreground)]">
              <Users size={18} /> Users
            </Link>
            <Link href="/admin/settings" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] text-[var(--color-muted-foreground)]">
              <Settings size={18} /> Settings
            </Link>
          </nav>
          
          <div className="mt-8 px-4 pt-4 border-t border-[var(--color-border)] text-center">
             <Button variant="ghost" className="w-full text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] justify-start">Exit Admin</Button>
          </div>
        </div>
      </aside>

      {/* Admin Content */}
      <main className="flex-1 w-full min-w-0">
        {children}
      </main>
    </div>
  )
}
