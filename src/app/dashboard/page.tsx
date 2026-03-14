import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Bookmark, Eye, Briefcase } from "lucide-react"
import Link from "next/link"

export default function DashboardOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-[var(--color-primary)] text-white border-transparent">
          <CardContent className="p-6 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium opacity-80">Applied Jobs</p>
              <FileText size={20} className="opacity-80" />
            </div>
            <p className="text-3xl font-bold">12</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-[var(--color-muted-foreground)]">Saved Jobs</p>
              <Bookmark size={20} className="text-[var(--color-muted-foreground)]" />
            </div>
            <p className="text-3xl font-bold">5</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-[var(--color-muted-foreground)]">Profile Views</p>
              <Eye size={20} className="text-[var(--color-muted-foreground)]" />
            </div>
            <p className="text-3xl font-bold">48</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col justify-between h-32">
            <div className="flex justify-between items-start">
              <p className="text-sm font-medium text-[var(--color-muted-foreground)]">Job Alerts</p>
              <Briefcase size={20} className="text-[var(--color-muted-foreground)]" />
            </div>
            <p className="text-3xl font-bold">3</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { role: "Senior Frontend Developer", company: "TechCorp Pakistan", date: "2 days ago", status: "Under Review" },
              { role: "React Developer", company: "Innovate PK", date: "1 week ago", status: "Rejected" },
              { role: "Full Stack Engineer", company: "StartupX", date: "2 weeks ago", status: "Interviewed" },
            ].map((app, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] hover:bg-[var(--color-primary)]/5 group transition-colors gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <Briefcase size={18} className="text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-primary)] transition-colors">{app.role}</h4>
                    <p className="text-sm text-[var(--color-muted-foreground)]">{app.company} • Applied {app.date}</p>
                  </div>
                </div>
                <div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                    app.status === 'Under Review' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    app.status === 'Interviewed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}>
                    {app.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/dashboard/applications" className="text-sm text-[var(--color-primary)] hover:underline font-medium">
              View All Applications
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
