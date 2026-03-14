import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, MapPin, Clock, MoreVertical } from "lucide-react"

export default function ApplicationsPage() {
  const applications = [
    { role: "Senior Frontend Developer", company: "TechCorp Pakistan", date: "Mar 12, 2026", status: "Under Review", location: "Lahore" },
    { role: "React Developer", company: "Innovate PK", date: "Mar 05, 2026", status: "Rejected", location: "Karachi" },
    { role: "Full Stack Engineer", company: "StartupX", date: "Feb 28, 2026", status: "Interviewed", location: "Remote" },
    { role: "UI/UX Designer", company: "DesignStudio", date: "Feb 15, 2026", status: "Hired", location: "Islamabad" },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>
      
      <div className="space-y-4">
        {applications.map((app, i) => (
          <Card key={i} className="hover:border-[var(--color-primary)]/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                    <Briefcase size={24} className="text-[var(--color-muted-foreground)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{app.role}</h3>
                    <div className="text-[var(--color-muted-foreground)] font-medium">{app.company}</div>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-[var(--color-muted-foreground)]">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {app.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> Applied on {app.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col justify-between items-end gap-2">
                  <button className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
                    <MoreVertical size={20} />
                  </button>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                    app.status === 'Under Review' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    app.status === 'Interviewed' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    app.status === 'Hired' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}>
                    {app.status}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
