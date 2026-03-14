import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, FileText, TrendingUp, Activity } from "lucide-react"

export default function AdminOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Overview</h1>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-500/10 text-blue-500 p-2 rounded-lg">
                <Users size={20} />
              </div>
              <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} className="mr-1" /> +12%
              </span>
            </div>
            <div>
              <p className="text-3xl font-bold">12,450</p>
              <p className="text-sm text-[var(--color-muted-foreground)] font-medium">Total Users</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] p-2 rounded-lg">
                <Briefcase size={20} />
              </div>
              <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} className="mr-1" /> +5%
              </span>
            </div>
            <div>
              <p className="text-3xl font-bold">3,205</p>
              <p className="text-sm text-[var(--color-muted-foreground)] font-medium">Active Jobs</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-purple-500/10 text-purple-500 p-2 rounded-lg">
                <FileText size={20} />
              </div>
              <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} className="mr-1" /> +24%
              </span>
            </div>
            <div>
              <p className="text-3xl font-bold">45.2k</p>
              <p className="text-sm text-[var(--color-muted-foreground)] font-medium">Applications Sent</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-orange-500/10 text-orange-500 p-2 rounded-lg">
                <Activity size={20} />
              </div>
              <span className="flex items-center text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">
                <TrendingUp size={12} className="mr-1" /> +8%
              </span>
            </div>
            <div>
              <p className="text-3xl font-bold">8,432</p>
              <p className="text-sm text-[var(--color-muted-foreground)] font-medium">CVs Generated</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Users */}
        <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl">Recent Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Ahmed Khan", role: "Job Seeker", status: "Active", joined: "2 hours ago" },
                { name: "TechCorp PK", role: "Employer", status: "Pending", joined: "5 hours ago" },
                { name: "Sara Ali", role: "Job Seeker", status: "Active", joined: "1 day ago" },
                { name: "Innovate Solutions", role: "Employer", status: "Active", joined: "1 day ago" },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-[var(--color-border)] rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center font-bold text-[var(--color-muted-foreground)]">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{user.name}</p>
                      <p className="text-xs text-[var(--color-muted-foreground)]">{user.role} • {user.joined}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    user.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Jobs Needing Approval */}
        <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl">Jobs Needing Approval</CardTitle>
            <span className="bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">3</span>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "Senior Python Dev", company: "DataSync", type: "Full-time", submitted: "1 hr ago" },
                { title: "Marketing Manager", company: "Growth PK", type: "Contract", submitted: "3 hrs ago" },
                { title: "iOS Developer", company: "AppX", type: "Full-time", submitted: "5 hrs ago" },
              ].map((job, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-[var(--color-border)] rounded-xl">
                  <div>
                    <p className="font-semibold text-sm">{job.title}</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">{job.company} • {job.type}</p>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <button className="text-green-600 hover:text-green-700 font-semibold px-2 py-1 rounded hover:bg-green-50">Approve</button>
                    <button className="text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded hover:bg-red-50">Reject</button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
