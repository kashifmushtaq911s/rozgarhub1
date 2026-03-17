import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock, DollarSign, Bookmark, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function SavedJobsPage() {
  const savedJobs = [
    { role: "Product Manager", company: "TechCorp Pakistan", location: "Lahore", type: "Full-time", salary: "Rs 250k - 400k", posted: "15-03-2026" },
    { role: "Backend Engineer (Node.js)", company: "Innovate PK", location: "Karachi", type: "Full-time", salary: "Rs 180k - 250k", posted: "10-03-2026" },
    { role: "Creative UI Designer", company: "DesignStudio", location: "Islamabad", type: "Contract", salary: "Rs 150k - 200k", posted: "12-03-2026" },
  ]

  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-black mb-8 text-[#0f172a] tracking-tight">Saved <span className="text-[var(--color-primary)]">Jobs</span></h1>
      
      <div className="space-y-6">
        {savedJobs.map((job, i) => (
          <Card key={i} className="group rounded-[2.5rem] border-[#e2e8f0] bg-white shadow-sm hover:border-[var(--color-primary)]/20 transition-all hover:shadow-2xl hover:shadow-blue-900/5">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex gap-6">
                  <div className="hidden sm:flex h-16 w-16 shrink-0 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] items-center justify-center transition-all group-hover:bg-[var(--color-primary)]/5 group-hover:border-[var(--color-primary)]/10">
                    <Briefcase size={28} className="text-[#64748b] group-hover:text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl text-[#0f172a] group-hover:text-[var(--color-primary)] transition-colors tracking-tight mb-2">{job.role}</h3>
                    <div className="text-[#64748b] font-bold mb-5 flex items-center gap-2">
                       <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]/40"></span>
                       {job.company}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-4 py-1.5 text-xs font-black text-[#475569] uppercase tracking-wider">
                        <MapPin size={14} className="text-[var(--color-primary)]" /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f5f9] px-4 py-1.5 text-xs font-black text-[#475569] uppercase tracking-wider">
                        <Clock size={14} className="text-[var(--color-primary)]" /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-4 py-1.5 text-xs font-black text-green-700 uppercase tracking-wider border border-green-100">
                        <DollarSign size={14} /> {job.salary}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end justify-center gap-5 pt-6 lg:pt-0 border-t lg:border-t-0 border-[#e2e8f0]">
                   <div className="text-sm text-[#94a3b8] font-bold flex items-center gap-2"><Clock size={16}/> Posted {job.posted}</div>
                   <div className="flex gap-3 w-full lg:w-auto">
                     <Button variant="outline" className="flex-1 lg:flex-none h-12 rounded-2xl gap-2 border-[#e2e8f0] text-[#0f172a] font-bold hover:bg-neutral-50 transition-all">
                        <Bookmark size={18} fill="currentColor" className="text-[var(--color-primary)]" /> Saved
                     </Button>
                     <Button className="flex-1 lg:flex-none h-12 rounded-2xl gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] font-black transition-all shadow-lg shadow-blue-900/10">
                        Apply Now <ExternalLink size={16} />
                     </Button>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {savedJobs.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-dashed border-[#e2e8f0]">
             <Bookmark size={48} className="mx-auto text-[#cbd5e1] mb-6" />
             <p className="text-xl font-bold text-[#64748b]">No saved jobs found.</p>
             <Link href="/jobs" className="mt-8 inline-block text-[var(--color-primary)] font-black hover:underline uppercase tracking-widest text-sm">Explore latest opportunities</Link>
          </div>
        )}
      </div>
    </div>
  )
}
