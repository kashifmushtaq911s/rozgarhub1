"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { 
  LayoutDashboard, 
  Briefcase,
  FileText,
  Users,
  Settings,
  ShieldAlert,
  LogOut,
  ChevronRight
} from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()

  // Don't show layout on login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  const handleLogout = () => {
    // Clear the admin session cookie
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    router.push("/admin/login")
  }

  const navItems = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Manage Jobs", href: "/admin/jobs", icon: Briefcase },
    { label: "Upcoming News", href: "/admin/upcoming", icon: FileText },
    { label: "Study Material", href: "/admin/study-material", icon: FileText },
    { label: "Registered Users", href: "/admin/users", icon: Users },
    { label: "System Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans selection:bg-indigo-100 selection:text-indigo-900 flex justify-center overflow-x-hidden">
      <div className="flex flex-col lg:flex-row w-full max-w-[1800px] h-screen overflow-hidden shadow-2xl shadow-slate-200">
        {/* Admin Sidebar - Sticky and Contained */}
        <aside className="w-full lg:w-80 shrink-0 z-20 border-r border-slate-700 bg-[#1e293b]">
          <div className="h-full bg-[#1e293b] text-slate-300 p-8 flex flex-col overflow-y-auto custom-scrollbar">
            <div className="mb-10 flex items-center gap-4 group cursor-pointer" onClick={() => router.push("/")}>
              <div className="h-14 w-14 bg-gradient-to-tr from-emerald-500 to-teal-400 text-white p-3 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                <ShieldAlert size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter text-white">Rozgarhub</h2>
                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Command Center</p>
              </div>
            </div>

            <nav className="space-y-2 flex-1">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 ml-4">Management Hub</p>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className={`flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-bold transition-all duration-300 group ${
                      isActive 
                        ? "bg-gradient-to-r from-emerald-500/20 to-transparent border-l-4 border-emerald-500 text-emerald-400" 
                        : "hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon size={20} className={isActive ? "text-emerald-400" : "text-slate-400 group-hover:text-emerald-300 transition-colors"} />
                      {item.label}
                    </div>
                    {isActive && (
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                    )}
                  </Link>
                )
              })}
            </nav>
            
            <div className="pt-8 mt-8 border-t border-slate-800">
               <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5 mb-6 flex items-center gap-4">
                 <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-black shadow-lg shadow-indigo-500/20">
                   SA
                 </div>
                 <div className="flex-1 min-w-0">
                   <p className="text-sm font-bold text-white truncate">Mr. Admin</p>
                   <p className="text-[10px] text-slate-500 truncate font-medium">Head of Operations</p>
                 </div>
               </div>
               <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="w-full text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 justify-start gap-4 rounded-2xl py-7 font-bold transition-all"
               >
                 <LogOut size={20} /> Sign Out Session
               </Button>
            </div>
          </div>
        </aside>

        {/* Admin Content - Clean and Centered Flow */}
        <main className="flex-1 bg-white p-6 lg:p-12 animate-fade-in overflow-y-auto overflow-x-hidden shadow-inner custom-scrollbar">
          <div className="max-w-full mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
