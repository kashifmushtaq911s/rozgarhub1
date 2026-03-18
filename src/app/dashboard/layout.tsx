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
    <div className="mx-auto flex flex-col md:flex-row md:h-[calc(100vh-64px)] md:overflow-hidden bg-[#f8fafc] overflow-x-hidden">
      {/* Sidebar - Desktop + Mobile optimized */}
      <aside className="w-full md:w-80 shrink-0 border-b md:border-b-0 md:border-r border-[#e2e8f0] bg-white z-20">
        <div className="h-full flex flex-col">
          {/* Dashboard Header - Hidden on small mobile to save space, but visible in horizontal scroll if needed */}
          <div className="p-6 pb-2 hidden md:block">
            <div className="mb-8 px-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-[var(--color-primary)] text-white flex items-center justify-center font-black text-lg shadow-lg shadow-green-500/10">
                JS
              </div>
              <div>
                <h2 className="text-lg font-black text-[#0f172a] tracking-tight">Account</h2>
                <p className="text-[10px] text-[#64748b] font-black uppercase tracking-widest">Job Seeker</p>
              </div>
            </div>
          </div>

          {/* Navigation - Horizontal on mobile, Vertical on desktop */}
          <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible md:overflow-y-auto custom-scrollbar p-4 md:p-6 md:space-y-1 no-scrollbar">
            {[
              { label: "Overview", href: "/dashboard", icon: <LayoutDashboard size={18} /> },
              { label: "My CV", href: "/dashboard/cv", icon: <FileText size={18} /> },
              { label: "Saved", href: "/dashboard/saved-jobs", icon: <Bookmark size={18} /> },
              { label: "Alerts", href: "/dashboard/alerts", icon: <Bell size={18} /> },
              { label: "Profile", href: "/dashboard/profile", icon: <UserCircle size={18} /> },
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="flex items-center gap-2 md:gap-4 rounded-xl md:rounded-2xl px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold transition-all hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] text-[#475569] group whitespace-nowrap md:whitespace-normal flex-shrink-0"
              >
                <span className="text-[#94a3b8] group-hover:text-[var(--color-primary)] transition-colors">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:block p-6 mt-auto border-t border-[#e2e8f0]">
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
