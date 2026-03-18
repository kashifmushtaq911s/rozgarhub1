import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Bookmark, Eye, Briefcase } from "lucide-react"
import Link from "next/link"

export default function DashboardOverview() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-black mb-8 text-[#0f172a] tracking-tight">Dashboard <span className="text-[var(--color-primary)]">Overview</span></h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="bg-[var(--color-primary)] text-white border-transparent shadow-xl shadow-blue-900/10 rounded-3xl overflow-hidden hover:scale-105 transition-transform">
          <CardContent className="p-8 flex flex-col justify-between h-40">
            <div className="flex justify-between items-start">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">Applied Jobs</p>
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
            </div>
            <p className="text-4xl font-black">12</p>
          </CardContent>
        </Card>
        
        <Card className="rounded-3xl border-[#e2e8f0] bg-white shadow-sm hover:shadow-xl transition-all h-40">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <p className="text-sm font-bold uppercase tracking-widest text-[#64748b]">Saved Jobs</p>
              <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center">
                <Bookmark size={20} className="text-amber-500" />
              </div>
            </div>
            <p className="text-4xl font-black text-[#0f172a]">5</p>
          </CardContent>
        </Card>
        
        <Card className="rounded-3xl border-[#e2e8f0] bg-white shadow-sm hover:shadow-xl transition-all h-40">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <p className="text-sm font-bold uppercase tracking-widest text-[#64748b]">Profile Views</p>
              <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Eye size={20} className="text-blue-500" />
              </div>
            </div>
            <p className="text-4xl font-black text-[#0f172a]">48</p>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-[#e2e8f0] bg-white shadow-sm hover:shadow-xl transition-all h-40">
          <CardContent className="p-8 flex flex-col justify-between h-full">
            <div className="flex justify-between items-start">
              <p className="text-sm font-bold uppercase tracking-widest text-[#64748b]">Job Alerts</p>
              <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center">
                <Briefcase size={20} className="text-blue-500" />
              </div>
            </div>
            <p className="text-4xl font-black text-[#0f172a]">3</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="rounded-[2rem] border-[#e2e8f0] bg-white shadow-sm overflow-hidden mb-12">
        <CardHeader className="p-8 pb-0">
          <CardTitle className="text-2xl font-black text-[#0f172a]">Recent Applications</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            {[
              { role: "Senior Frontend Developer", company: "TechCorp Pakistan", date: "12-03-2026", status: "Under Review" },
              { role: "React Developer", company: "Innovate PK", date: "05-03-2026", status: "Rejected" },
              { role: "Full Stack Engineer", company: "StartupX", date: "28-02-2026", status: "Interviewed" },
            ].map((app, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[var(--color-primary)]/20 hover:shadow-lg group transition-all gap-4">
                <div className="flex items-center gap-5">
                  <div className="h-14 w-14 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)]/5 group-hover:border-[var(--color-primary)]/10">
                    <Briefcase size={24} className="text-[#64748b] group-hover:text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0f172a] group-hover:text-[var(--color-primary)] transition-colors">{app.role}</h4>
                    <p className="text-sm text-[#64748b] font-medium">{app.company} • Applied {app.date}</p>
                  </div>
                </div>
                <div>
                  <span className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-wider ${
                    app.status === 'Under Review' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                    app.status === 'Interviewed' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                    'bg-slate-50 text-slate-600 border border-slate-100'
                  }`}>
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/dashboard/applications" className="inline-flex items-center justify-center px-10 h-14 rounded-2xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-black transition-all shadow-sm">
              View All Applications
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
