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
    <div className="mx-auto flex flex-col md:flex-row md:h-[calc(100vh-64px)] md:overflow-hidden bg-[#fafbfc] overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-80 shrink-0 border-r border-[#e2e8f0] bg-white overflow-y-auto custom-scrollbar">
        <div className="p-6">
          <div className="mb-10 px-4 flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center font-black text-xl shadow-lg shadow-blue-900/10">
              JS
            </div>
            <div>
              <h2 className="text-xl font-black text-[#0f172a] tracking-tight">My Account</h2>
              <p className="text-sm text-[#64748b] font-bold uppercase tracking-widest">Job Seeker</p>
            </div>
          </div>
          <nav className="space-y-2">
            {[
              { label: "Overview", href: "/dashboard", icon: <LayoutDashboard size={20} /> },
              { label: "My CV / Resume", href: "/dashboard/cv", icon: <FileText size={20} /> },
              { label: "Saved Jobs", href: "/dashboard/saved-jobs", icon: <Bookmark size={20} /> },
              { label: "Job Alerts", href: "/dashboard/alerts", icon: <Bell size={20} /> },
              { label: "Profile", href: "/dashboard/profile", icon: <UserCircle size={20} /> },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="flex items-center gap-4 rounded-2xl px-5 py-4 text-sm font-bold transition-all hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] text-[#475569] group"
              >
                <span className="text-[#94a3b8] group-hover:text-[var(--color-primary)] transition-colors">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="mt-10 pt-8 border-t border-[#e2e8f0]">
             <Button variant="ghost" className="w-full text-red-500 hover:bg-red-50 hover:text-red-600 justify-start rounded-2xl px-5 h-14 font-bold text-sm">
               Logout
             </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full min-w-0 overflow-y-auto overflow-x-auto p-6 sm:p-12 custom-scrollbar">
        <div className="container mx-auto max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  )
}
