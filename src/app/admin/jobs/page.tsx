import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Filter, Edit, Trash2, Eye } from "lucide-react"

export default function AdminJobsPage() {
  const jobs = [
    { id: 1, title: "Senior Frontend Developer", company: "TechCorp Pakistan", type: "Full-time", status: "published", applied: 45, date: "Mar 12, 2026" },
    { id: 2, title: "Product Manager", company: "Innovate PK", type: "Full-time", status: "draft", applied: 0, date: "Mar 13, 2026" },
    { id: 3, title: "Creative UI Designer", company: "DesignStudio", type: "Contract", status: "closing_soon", applied: 120, date: "Feb 28, 2026" },
    { id: 4, title: "Backend Engineer", company: "StartupX", type: "Full-time", status: "expired", applied: 89, date: "Jan 15, 2026" },
    { id: 5, title: "DevOps Specialist", company: "CloudNet", type: "Part-time", status: "archived", applied: 34, date: "Dec 10, 2025" },
  ]

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'published': return <span className="bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-400 px-2 py-1 rounded-full text-xs font-semibold">Published</span>
      case 'draft': return <span className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 px-2 py-1 rounded-full text-xs font-semibold">Draft</span>
      case 'closing_soon': return <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-400 px-2 py-1 rounded-full text-xs font-semibold">Closing Soon</span>
      case 'expired': return <span className="bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-400 px-2 py-1 rounded-full text-xs font-semibold">Expired</span>
      case 'archived': return <span className="bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-400 px-2 py-1 rounded-full text-xs font-semibold">Archived</span>
      default: return null
    }
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Manage Jobs</h1>
        <Button className="gap-2 rounded-xl">
          <Plus size={16} /> Post New Job
        </Button>
      </div>

      <Card className="rounded-2xl border-[var(--color-border)] shadow-sm mb-6">
        <CardContent className="p-4 flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center bg-[var(--color-secondary)] rounded-xl px-4 border border-transparent focus-within:border-[var(--color-primary)] transition-colors h-10">
            <Search className="text-[var(--color-muted-foreground)] mr-2" size={18} />
            <input 
              type="text" 
              placeholder="Search jobs..." 
              className="w-full bg-transparent border-none focus:outline-none text-sm text-[var(--color-foreground)]"
            />
          </div>
          <div className="flex gap-2">
            <select className="h-10 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-3 text-sm focus:outline-none">
              <option>All Status</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Expired</option>
            </select>
            <Button variant="outline" className="h-10 px-3 gap-2 border-[var(--color-border)] opacity-80 rounded-xl">
              <Filter size={16} /> Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-[var(--color-border)] shadow-sm overflow-hidden text-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[var(--color-secondary)] border-b border-[var(--color-border)]">
                <th className="p-4 font-semibold text-[var(--color-muted-foreground)] w-1/3">Job Title & Company</th>
                <th className="p-4 font-semibold text-[var(--color-muted-foreground)]">Type</th>
                <th className="p-4 font-semibold text-[var(--color-muted-foreground)]">Status</th>
                <th className="p-4 font-semibold text-[var(--color-muted-foreground)]">Applicants</th>
                <th className="p-4 font-semibold text-[var(--color-muted-foreground)]">Posted</th>
                <th className="p-4 font-semibold text-[var(--color-muted-foreground)] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-secondary)]/50 transition-colors">
                  <td className="p-4">
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">{job.company}</p>
                  </td>
                  <td className="p-4 text-[var(--color-muted-foreground)]">{job.type}</td>
                  <td className="p-4">{getStatusBadge(job.status)}</td>
                  <td className="p-4 font-medium">{job.applied}</td>
                  <td className="p-4 text-[var(--color-muted-foreground)]">{job.date}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)]"><Eye size={16} /></Button>
                       <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--color-muted-foreground)] hover:text-blue-500"><Edit size={16} /></Button>
                       <Button variant="ghost" size="icon" className="h-8 w-8 text-[var(--color-muted-foreground)] hover:text-red-500"><Trash2 size={16} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-muted-foreground)]">
          <span>Showing 1 to 5 of 32 jobs</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
