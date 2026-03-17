import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, Clock, MoreVertical } from "lucide-react"
import Link from "next/link"

export default function ApplicationsPage() {
  const applications = [
    { role: "Senior Frontend Developer", company: "TechCorp Pakistan", date: "12-03-2026", status: "Under Review", location: "Lahore" },
    { role: "React Developer", company: "Innovate PK", date: "05-03-2026", status: "Rejected", location: "Karachi" },
    { role: "Full Stack Engineer", company: "StartupX", date: "28-02-2026", status: "Interviewed", location: "Remote" },
    { role: "UI/UX Designer", company: "DesignStudio", date: "15-02-2026", status: "Hired", location: "Islamabad" },
  ]

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-black mb-10 text-[#0f172a] tracking-tight">My <span className="text-[var(--color-primary)]">Applications</span></h1>
      
      <div className="space-y-6">
        {applications.map((app, i) => (
          <Card key={i} className="group rounded-[2.5rem] border-[#e2e8f0] bg-white shadow-sm hover:border-[var(--color-primary)]/20 transition-all hover:shadow-2xl hover:shadow-blue-900/5">
            <CardContent className="p-8">
              <div className="flex flex-col sm:flex-row justify-between gap-8">
                <div className="flex gap-6">
                  <div className="h-16 w-16 shrink-0 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center transition-all group-hover:bg-[var(--color-primary)]/5 group-hover:border-[var(--color-primary)]/10">
                    <Briefcase size={28} className="text-[#64748b] group-hover:text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-[#0f172a] group-hover:text-[var(--color-primary)] transition-colors tracking-tight mb-2">{app.role}</h3>
                    <div className="text-[#64748b] font-bold flex items-center gap-2 mb-4">
                       <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/40"></span>
                       {app.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs text-[#94a3b8] font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-2"><MapPin size={14} className="text-[var(--color-primary)]" /> {app.location}</span>
                      <span className="flex items-center gap-2"><Clock size={14} className="text-[var(--color-primary)]" /> Applied on {app.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col justify-between items-end gap-6 pt-6 sm:pt-0 border-t sm:border-t-0 border-[#e2e8f0]">
                  <button className="h-10 w-10 rounded-xl flex items-center justify-center text-[#94a3b8] hover:text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5 transition-all">
                    <MoreVertical size={20} />
                  </button>
                  <span className={`inline-flex items-center rounded-full px-5 py-2 text-[10px] font-black uppercase tracking-widest border ${
                    app.status === 'Under Review' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                    app.status === 'Interviewed' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                    app.status === 'Hired' ? 'bg-green-50 text-green-700 border-green-100' :
                    'bg-slate-50 text-slate-600 border-slate-100'
                  }`}>
                    {app.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {applications.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-dashed border-[#e2e8f0]">
             <Briefcase size={48} className="mx-auto text-[#cbd5e1] mb-6" />
             <p className="text-xl font-bold text-[#64748b]">No applications found.</p>
             <Link href="/jobs" className="mt-8 inline-block text-[var(--color-primary)] font-black hover:underline uppercase tracking-widest text-sm">Find your next role</Link>
          </div>
        )}
      </div>
    </div>
  )
}
