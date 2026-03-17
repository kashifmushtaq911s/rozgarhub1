"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Search, Filter, Edit, Trash2, Eye, Briefcase, Sparkles, TrendingUp, Calendar } from "lucide-react"
import Link from "next/link"
import { getAdminJobs, deleteJob } from "@/actions/admin"
import { useState, useEffect } from "react"
import { formatDate } from "@/lib/utils"

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    setLoading(true)
    const result = await getAdminJobs()
    if (result.success) {
      setJobs(result.data || [])
    }
    setLoading(false)
  }

  const handleDelete = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to permanently delete "${title}"? This cannot be undone.`)) {
      const result = await deleteJob(id)
      if (result.success) {
        setJobs(jobs.filter(job => job.id !== id))
        alert("Listing successfully removed.")
      } else {
        alert("Failed to delete: " + result.error)
      }
    }
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'published': return <span className="bg-emerald-500/10 text-emerald-600 border border-emerald-100 px-3 py-1 rounded-xl text-xs font-black uppercase tracking-widest">Active</span>
      case 'draft': return <span className="bg-slate-100 text-slate-500 border border-slate-200 px-3 py-1 rounded-xl text-xs font-black uppercase tracking-widest">Draft</span>
      case 'closing_soon': return <span className="bg-orange-500/10 text-orange-600 border border-orange-100 px-3 py-1 rounded-xl text-xs font-black uppercase tracking-widest">Urgent</span>
      case 'expired': return <span className="bg-rose-500/10 text-rose-600 border border-rose-100 px-3 py-1 rounded-xl text-xs font-black uppercase tracking-widest">Closed</span>
      default: return null
    }
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Job <span className="text-indigo-600">Inventory</span></h1>
          <p className="text-slate-500 font-medium">Manage and monitor live opportunities across Pakistan.</p>
        </div>
        <Link href="/admin/jobs/new">
          <Button className="h-14 px-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-black shadow-xl shadow-indigo-500/20 gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]">
            <Plus size={20} /> Publish New Listing
          </Button>
        </Link>
      </div>

      {/* Advanced Filters Card */}
      <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
        <CardContent className="p-8 flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex items-center bg-slate-50 rounded-2xl px-6 border border-slate-100 focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-100 transition-all h-14 group">
            <Search className="text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by title, institute or scale..." 
              className="w-full bg-transparent border-none focus:outline-none text-sm font-bold text-slate-700 placeholder:text-slate-400 ml-4"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative min-w-[160px]">
              <select className="appearance-none h-14 w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 text-sm font-black text-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 cursor-pointer">
                <option>All Status</option>
                <option>Active</option>
                <option>Draft</option>
                <option>Closed</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                <Filter size={14} />
              </div>
            </div>
            <Button variant="outline" className="h-14 px-6 rounded-2xl border-slate-100 bg-slate-50 text-slate-500 font-bold hover:bg-white hover:border-indigo-200 hover:text-indigo-600 transition-all">
              Advanced Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Jobs Table */}
      <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Listing Identity</th>
                <th className="px-6 py-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Classification</th>
                <th className="px-6 py-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Status</th>
                <th className="px-6 py-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Scale/BPS</th>
                <th className="px-6 py-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Lifecycle</th>
                <th className="px-6 py-5 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? jobs.map((job) => (
                <tr key={job.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-all group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform overflow-hidden shadow-inner">
                          {job.logo_url ? <img src={job.logo_url} alt="" className="h-full w-full object-cover" /> : <Briefcase size={16} />}
                        </div>
                        <div className="min-w-0">
                           <p className="font-black text-slate-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight truncate text-[13px]">{job.title}</p>
                           <p className="text-[10px] font-bold text-slate-400 truncate">{job.company}</p>
                        </div>
                    </div>
                  </td>
                   <td className="px-6 py-5">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-tight">{job.category}</span>
                       <span className="text-[9px] font-bold text-slate-400 leading-tight">{job.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    {job.deadline && new Date(job.deadline) < new Date() 
                      ? <span className="bg-rose-500/10 text-rose-600 border border-rose-100 px-2 py-0.5 rounded-lg text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Expired</span>
                      : <div className="scale-90 origin-left">{getStatusBadge(job.status)}</div>
                    }
                  </td>
                  <td className="px-6 py-5 text-center">
                     <span className="font-black text-indigo-500 bg-indigo-50 px-2 py-1 rounded-lg text-[10px]">{job.scale || "N/A"}</span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1.5 text-slate-400 whitespace-nowrap">
                       <Calendar size={12} />
                       <span className="text-[10px] font-bold">{formatDate(job.deadline)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                       <Link href={`/job/${(job.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} target="_blank">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all"><Eye size={16} /></Button>
                       </Link>
                       <Link href={`/admin/jobs/${job.id}/edit`}>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-slate-300 hover:text-blue-500 hover:bg-blue-50 transition-all"><Edit size={16} /></Button>
                       </Link>
                       <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => handleDelete(job.id, job.title)}
                        className="h-8 w-8 rounded-lg text-slate-300 hover:text-rose-500 hover:bg-rose-50 transition-all"
                       >
                         <Trash2 size={16} />
                       </Button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={6} className="p-24 text-center">
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <div className="h-24 w-24 bg-slate-50 rounded-[2rem] flex items-center justify-center text-slate-200 border border-slate-100 shadow-inner">
                        <Briefcase size={40} className="opacity-50" />
                      </div>
                      <div className="space-y-2">
                         <p className="text-xl font-black text-slate-900">Zero Listings Found</p>
                         <p className="text-slate-400 font-medium max-w-xs mx-auto">Your job portal is currently empty. Start by deploying your first mission.</p>
                      </div>
                      <Link href="/admin/jobs/new">
                        <Button className="h-12 px-8 rounded-xl bg-white border-2 border-indigo-600 text-indigo-600 font-black hover:bg-indigo-600 hover:text-white transition-all shadow-lg shadow-indigo-500/10">Publish Early Access Job</Button>
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {jobs.length > 0 && (
          <div className="p-8 bg-slate-50/30 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Inventory Index: {jobs.length} Opportunities Captured</span>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="h-10 px-6 rounded-xl border-slate-200 text-slate-400 font-bold" disabled>Prev Level</Button>
              <Button variant="outline" size="sm" className="h-10 px-6 rounded-xl border-indigo-200 text-indigo-600 font-bold" disabled>Next Level</Button>
            </div>
          </div>
        )}
      </Card>

      {/* Analytics Mini-Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
         <div className="bg-indigo-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-indigo-500/30 flex justify-between items-center relative overflow-hidden group">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>
            <div className="space-y-2 relative z-10">
               <p className="text-indigo-200 font-black text-[10px] uppercase tracking-[0.2em]">Total Postings</p>
               <h3 className="text-4xl font-black">{jobs.length} Jobs</h3>
               <p className="text-indigo-100/60 font-medium text-sm">Total listings in the database.</p>
            </div>
            <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md relative z-10">
               <TrendingUp size={32} />
            </div>
         </div>
         <div className="bg-emerald-500 rounded-[3rem] p-12 text-white shadow-2xl shadow-emerald-500/30 flex justify-between items-center relative overflow-hidden group">
             <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 blur-3xl rounded-full"></div>
            <div className="space-y-2 relative z-10">
               <p className="text-emerald-100 font-black text-[10px] uppercase tracking-[0.2em]">Conversion Rate</p>
               <h3 className="text-4xl font-black">100% Secure</h3>
               <p className="text-emerald-50/60 font-medium text-sm">All listings verified and active.</p>
            </div>
            <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md relative z-10">
               <Sparkles size={32} />
            </div>
         </div>
      </div>
    </div>
  )
}

