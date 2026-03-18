"use client"
import React, { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Briefcase, Filter, Clock, Wallet, Loader2 } from "lucide-react"
import Link from "next/link"
import { getPublishedJobs } from "@/actions/jobs"
import { formatDate } from "@/lib/utils"

function makeSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")
  const [visibleCount, setVisibleCount] = useState(10)
  const [jobs, setJobs] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true)
      const result = await getPublishedJobs()
      if (result.success) {
        setJobs(result.data)
      }
      setLoading(false)
    }
    fetchJobs()
  }, [])

  // Filter Active Jobs & Search
  const activeJobs = useMemo(() => {
    let filtered = jobs.filter(job => {
      // Only show jobs that are not expired
      if (job.deadline) {
        const deadlineDate = new Date(job.deadline)
        if (!isNaN(deadlineDate.getTime()) && deadlineDate < new Date()) {
          return false
        }
      }
      return true
    })
    
    if (searchTerm) {
      const lower = searchTerm.toLowerCase()
      filtered = filtered.filter(job => 
        (job.title || "").toLowerCase().includes(lower) || 
        (job.company || "").toLowerCase().includes(lower) ||
        (job.category || "").toLowerCase().includes(lower)
      )
    }
    
    if (locationTerm) {
      const lower = locationTerm.toLowerCase()
      filtered = filtered.filter(job => 
        (job.city || "").toLowerCase().includes(lower) || 
        (job.province || "").toLowerCase().includes(lower)
      )
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter(job => selectedCategories.includes(job.category))
    }

    if (selectedTypes.length > 0) {
      filtered = filtered.filter(job => selectedTypes.includes(job.type))
    }
    
    return filtered
  }, [jobs, searchTerm, locationTerm, selectedCategories, selectedTypes])

  const visibleJobs = activeJobs.slice(0, visibleCount)

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10)
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-[1400px] flex-1 animate-fade-in">
      {/* Search Header */}
      <div className="mb-12 rounded-[2.5rem] bg-[#f8fafc] p-8 md:p-12 border border-[#e2e8f0] shadow-sm">
        <h1 className="text-4xl font-black mb-8 text-[#0f172a] tracking-tight">Browse Opportunities</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-[2] flex items-center bg-white rounded-2xl px-5 py-3 border border-[#e2e8f0] focus-within:border-[var(--color-primary)]/40 focus-within:ring-4 focus-within:ring-[var(--color-primary)]/5 transition-all shadow-sm">
            <Search className="text-[#94a3b8] mr-3 shrink-0" size={24} />
            <input 
              type="text" 
              placeholder="Job title, keywords, or company" 
              className="w-full bg-transparent border-none focus:outline-none text-[#1e293b] font-medium h-10 text-lg placeholder:text-[#94a3b8]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-1 flex items-center bg-white rounded-2xl px-5 py-3 border border-[#e2e8f0] focus-within:border-[var(--color-primary)]/40 focus-within:ring-4 focus-within:ring-[var(--color-primary)]/5 transition-all shadow-sm">
            <MapPin className="text-[#94a3b8] mr-3 shrink-0" size={24} />
            <input 
              type="text" 
              placeholder="City or province" 
              className="w-full bg-transparent border-none focus:outline-none text-[#1e293b] font-medium h-10 text-lg placeholder:text-[#94a3b8]"
              value={locationTerm}
              onChange={(e) => setLocationTerm(e.target.value)}
            />
          </div>
          <Button size="lg" className="h-[4rem] rounded-2xl px-10 shadow-xl shadow-blue-600/20 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98]">
            Find Jobs
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-28 rounded-[2rem] border border-[#e2e8f0] bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-bold text-xl text-[#0f172a] flex items-center gap-2">
                <Filter size={20} className="text-[var(--color-primary)]" /> Filters
              </h2>
              <button onClick={() => {
                setSearchTerm(""); 
                setLocationTerm("");
                setSelectedCategories([]);
                setSelectedTypes([]);
              }} className="text-sm font-bold text-[var(--color-primary)] hover:opacity-80 transition-opacity cursor-pointer">Clear all</button>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-bold mb-4 text-[#0f172a] uppercase tracking-wider text-[11px]">Job Category</h3>
                <div className="space-y-3">
                  {["IT & Software", "Sales & Marketing", "Design & Creative", "Operations", "Finance"].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-[#cbd5e1] text-[var(--color-primary)] focus:ring-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer" 
                        checked={selectedCategories.includes(cat)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedCategories([...selectedCategories, cat])
                          else setSelectedCategories(selectedCategories.filter(c => c !== cat))
                        }}
                      />
                      <span className="text-sm font-medium text-[#475569] group-hover:text-[var(--color-primary)] transition-colors">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-[#0f172a] uppercase tracking-wider text-[11px]">Job Type</h3>
                <div className="space-y-3">
                  {["Full-time", "Part-time", "Contract", "Government", "Internship"].map((type) => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-[#cbd5e1] text-[var(--color-primary)] focus:ring-[var(--color-primary)] accent-[var(--color-primary)] cursor-pointer" 
                        checked={selectedTypes.includes(type)}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedTypes([...selectedTypes, type])
                          else setSelectedTypes(selectedTypes.filter(t => t !== type))
                        }}
                      />
                      <span className="text-sm font-medium text-[#475569] group-hover:text-[var(--color-primary)] transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Job Listings Main Column */}
        <main className="w-full lg:w-3/4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-bold text-2xl text-[#0f172a]">
              {loading ? "Loading..." : `Showing ${activeJobs.length} Job${activeJobs.length !== 1 ? 's' : ''}`}
            </h2>
            <div className="flex items-center gap-3 bg-[#f8fafc] px-4 py-2 rounded-xl border border-[#e2e8f0]">
              <span className="text-sm font-bold text-[#64748b]">Sort by:</span>
              <select className="text-sm bg-transparent border-none focus:ring-0 cursor-pointer font-bold text-[#0f172a]">
                <option value="recent">Recently Posted</option>
                <option value="relevance">Most Relevant</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-20 bg-[#f8fafc] rounded-[2rem] border-2 border-dashed border-[#e2e8f0]">
              <Loader2 size={48} className="mx-auto text-[var(--color-primary)] mb-4 animate-spin" />
              <p className="text-lg font-bold text-[#64748b]">Fetching latest opportunities...</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {visibleJobs.length === 0 ? (
                 <div className="text-center py-20 bg-[#f8fafc] rounded-[2rem] border-2 border-dashed border-[#e2e8f0]">
                   <Briefcase size={48} className="mx-auto text-[#cbd5e1] mb-4" />
                   <p className="text-lg font-bold text-[#64748b]">No active jobs found matching your criteria.</p>
                    <button onClick={() => {
                        setSearchTerm(""); 
                        setLocationTerm("");
                        setSelectedCategories([]);
                        setSelectedTypes([]);
                      }} className="mt-4 text-[var(--color-primary)] font-bold hover:underline">Clear all filters</button>
                 </div>
              ) : (
                visibleJobs.map((job) => (
                  <Link key={job.id} href={`/job/${makeSlug(job.title)}`}>
                    <Card className="group hover:bg-white hover:shadow-2xl hover:shadow-blue-900/10 hover:border-[var(--color-primary)]/20 transition-all cursor-pointer rounded-[2rem] border-[#e2e8f0] relative overflow-hidden bg-white shadow-sm">
                      <CardContent className="p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                          <div className="flex gap-6">
                            <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] border border-[var(--color-primary)]/10 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-500 overflow-hidden">
                              {job.logo_url ? (
                                <img src={job.logo_url} alt="" className="h-full w-full object-cover" />
                              ) : (
                                <Briefcase size={28} />
                              )}
                            </div>
                            <div>
                              <h3 className="font-bold text-xl text-[#0f172a] group-hover:text-[var(--color-primary)] transition-colors tracking-tight">{job.title}</h3>
                              <div className="text-[#475569] sm:mt-1 font-bold">{job.company}</div>
                              <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider">
                                {job.city && (
                                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1.5 text-[#475569] group-hover:bg-[var(--color-primary)]/5 group-hover:border-[var(--color-primary)]/10 transition-colors">
                                    <MapPin size={14} className="text-[var(--color-primary)]" /> {job.city}
                                  </span>
                                )}
                                {job.type && (
                                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1.5 text-[#475569] group-hover:bg-[var(--color-primary)]/5 group-hover:border-[var(--color-primary)]/10 transition-colors">
                                    <Clock size={14} className="text-[var(--color-primary)]" /> {job.type}
                                  </span>
                                )}
                                {job.scale && job.scale !== "N/A" && (
                                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 border border-blue-100 px-3 py-1.5 text-blue-600 font-black">
                                    {job.scale}
                                  </span>
                                )}
                                {job.salary && (
                                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] px-3 py-1.5 text-[#475569] group-hover:bg-[var(--color-primary)]/5 group-hover:border-[var(--color-primary)]/10 transition-colors">
                                    <Wallet size={14} className="text-[var(--color-primary)]" /> {job.salary}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 h-full">
                            {job.created_at && (
                              <span className="text-xs text-[#94a3b8] font-bold bg-[#f8fafc] px-3 py-1.5 rounded-lg border border-[#e2e8f0]">{formatDate(job.created_at)}</span>
                            )}
                            <Button className="rounded-xl border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white font-bold transition-all px-6">
                              Details
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              )}
            </div>
          )}
          
          {!loading && visibleCount < activeJobs.length && (
            <div className="mt-8 flex justify-center">
              <Button onClick={handleLoadMore} variant="outline" size="lg" className="rounded-xl px-8 border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)] shadow-sm">
                Load More Jobs
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
