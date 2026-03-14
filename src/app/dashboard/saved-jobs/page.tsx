import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock, DollarSign, Bookmark, ExternalLink } from "lucide-react"

export default function SavedJobsPage() {
  const savedJobs = [
    { role: "Product Manager", company: "TechCorp Pakistan", location: "Lahore", type: "Full-time", salary: "Rs 250k - 400k", posted: "2d ago" },
    { role: "Backend Engineer (Node.js)", company: "Innovate PK", location: "Karachi", type: "Full-time", salary: "Rs 180k - 250k", posted: "1w ago" },
    { role: "Creative UI Designer", company: "DesignStudio", location: "Islamabad", type: "Contract", salary: "Rs 150k - 200k", posted: "5d ago" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Saved Jobs</h1>
      
      <div className="space-y-4">
        {savedJobs.map((job, i) => (
          <Card key={i} className="hover:border-[var(--color-primary)]/50 transition-colors rounded-2xl border-[var(--color-border)] shadow-sm group">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex gap-4">
                  <div className="hidden sm:flex h-12 w-12 shrink-0 rounded-xl bg-[var(--color-secondary)] items-center justify-center">
                    <Briefcase size={24} className="text-[var(--color-muted-foreground)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg group-hover:text-[var(--color-primary)] transition-colors">{job.role}</h3>
                    <div className="text-[var(--color-muted-foreground)] font-medium mb-3">{job.company}</div>
                    <div className="flex flex-wrap gap-2 text-xs font-medium">
                      <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-secondary)] px-2 py-1 text-[var(--color-secondary-foreground)]">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-secondary)] px-2 py-1 text-[var(--color-secondary-foreground)]">
                        <Clock size={12} /> {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-md bg-green-500/10 px-2 py-1 text-green-700 dark:text-green-400">
                        <DollarSign size={12} /> {job.salary}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4 border-t lg:border-t-0 border-[var(--color-border)] pt-4 lg:pt-0">
                   <div className="text-xs text-[var(--color-muted-foreground)] flex items-center gap-1"><Clock size={12}/> Posted {job.posted}</div>
                   <div className="flex gap-2">
                     <Button variant="outline" size="sm" className="gap-2 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/5">
                        <Bookmark size={16} fill="currentColor" /> Saved
                     </Button>
                     <Button size="sm" className="gap-2">
                        Apply <ExternalLink size={14} />
                     </Button>
                   </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
