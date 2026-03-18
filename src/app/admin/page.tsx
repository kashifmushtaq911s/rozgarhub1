import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, FileText, TrendingUp, Activity, Clock, ShieldCheck, Plus, Eye, CheckCircle, AlertCircle } from "lucide-react"
import { getAdminMetrics } from "@/actions/admin"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export default async function AdminOverview() {
  const data = await getAdminMetrics()

  const metrics = [
    {
      label: "Live Jobs",
      value: (data as any).jobs.toString(),
      icon: Briefcase,
      trend: "+12%",
      color: "from-blue-500 to-blue-600",
      description: "Active opportunities on Rozgarhub"
    },
    {
      label: "Expired Jobs",
      value: (data as any).expiredJobs.toString(),
      icon: Clock,
      trend: "Critical",
      color: "from-red-500 to-rose-600",
      description: "Jobs past their deadline"
    },
    {
      label: "CVs Generated",
      value: (data as any).cvs.toString(),
      icon: FileText,
      trend: "+5%",
      color: "from-blue-500 to-blue-600",
      description: "Professional resumes by talent"
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Control <span className="text-blue-600">Terminal</span></h1>
          <p className="text-slate-500 font-medium">Platform orchestration and recruitment intelligence.</p>
        </div>
        <div className="flex items-center gap-4 bg-white p-2.5 rounded-[1.5rem] shadow-sm border border-slate-100">
           <div className="h-10 px-5 flex items-center gap-3 text-sm font-bold text-slate-500 bg-slate-50 rounded-xl">
              <Clock size={16} className="text-blue-500" />
              {formatDate(new Date())}
           </div>
           <Link href="/admin/jobs/new">
            <button className="h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-black transition-all shadow-lg shadow-blue-600/20 active:scale-95 flex items-center gap-2">
                <Plus size={18} /> New Posting
            </button>
           </Link>
        </div>
      </div>

      {/* Modern Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, i) => (
          <Card key={i} className="group relative overflow-hidden rounded-[2.5rem] border-none shadow-2xl shadow-slate-200/40 bg-white transition-all duration-500 hover:-translate-y-2">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${metric.color} opacity-[0.03] rounded-full -mr-16 -mt-16 transition-all group-hover:scale-150 duration-700`}></div>
            <CardContent className="p-10">
              <div className="flex justify-between items-start mb-10">
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${metric.color} text-white flex items-center justify-center shadow-2xl shadow-blue-500/20 group-hover:rotate-6 transition-transform`}>
                  <metric.icon size={32} />
                </div>
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-1 text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                    <TrendingUp size={12} /> {metric.trend}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 font-sans">{metric.label}</h3>
                <p className="text-5xl font-black text-slate-900 tracking-tighter">{metric.value}</p>
                <p className="text-slate-400 font-medium text-xs pt-6 mt-6 border-t border-slate-50">{metric.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>


      {/* Recent Activity Table */}
      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden">
         <div className="p-10 border-b border-slate-50 flex items-center justify-between">
            <div>
               <h3 className="text-2xl font-black text-slate-900 tracking-tight">Priority Listings</h3>
               <p className="text-slate-400 font-medium text-sm">Real-time snapshots of recent deployments.</p>
            </div>
            <Link href="/admin/jobs">
               <button className="px-6 h-12 rounded-xl border border-slate-200 text-slate-500 font-bold hover:bg-slate-50 transition-all text-sm">Full Inventory</button>
            </Link>
         </div>
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="bg-slate-50/50">
                     <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Reference</th>
                     <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100">Institute</th>
                     <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 text-center">Domain</th>
                     <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 text-center">Status</th>
                     <th className="p-6 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 text-right">Action</th>
                  </tr>
               </thead>
               <tbody>
                  {data.recentJobs && data.recentJobs.length > 0 ? (
                    data.recentJobs.map((job: any, i: number) => (
                      <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                        <td className="p-6">
                            <p className="font-bold text-slate-700 leading-tight">{job.title}</p>
                            <p className="text-[10px] text-slate-400 font-black uppercase mt-1">Ref: RZH-{job.id.slice(0,5)}</p>
                        </td>
                        <td className="p-6 text-sm font-bold text-slate-600">{job.company}</td>
                        <td className="p-6 text-center">
                            <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-[10px] font-black uppercase">{job.category}</span>
                        </td>
                        <td className="p-6">
                            <div className="flex items-center justify-center gap-2">
                                {job.deadline && new Date(job.deadline) < new Date() ? (
                                  <>
                                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                    <span className="text-xs font-bold text-red-600">Expired</span>
                                  </>
                                ) : (
                                  <>
                                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                    <span className="text-xs font-bold text-slate-600">Active</span>
                                  </>
                                )}
                            </div>
                        </td>
                        <td className="p-6 text-right">
                            <Link href="/admin/jobs">
                              <button className="h-9 w-9 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-sm transition-all ml-auto">
                                <Eye size={16} />
                              </button>
                            </Link>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-12 text-center text-slate-400 font-medium text-sm italic">
                        No active deployments detected.
                      </td>
                    </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  )
}

