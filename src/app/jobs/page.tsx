import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, MapPin, Briefcase, Filter, Clock, Wallet } from "lucide-react"
import Link from "next/link"

// Mock data
const JOB_LISTINGS = [
  { slug: "senior-frontend-developer", title: "Senior Frontend Developer", company: "TechCorp Pakistan", location: "Lahore", type: "Full-time", mode: "Hybrid", salary: "Rs. 200,000 to Rs. 300,000", posted: "2d ago" },
  { slug: "creative-ui-designer", title: "Creative UI Designer", company: "DesignStudio", location: "Islamabad", type: "Contract", mode: "Remote", salary: "Rs. 150,000 to Rs. 200,000", posted: "5d ago" },
  { slug: "backend-engineer-node", title: "Backend Engineer (Node.js)", company: "Innovate PK", location: "Karachi", type: "Full-time", mode: "On-site", salary: "Rs. 180,000 to Rs. 250,000", posted: "1w ago" },
  { slug: "product-manager", title: "Product Manager", company: "StartupX", location: "Remote", type: "Full-time", mode: "Remote", salary: "Rs. 250,000 to Rs. 400,000", posted: "2w ago" },
]

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 flex-1">
      {/* Search Header */}
      <div className="mb-8 rounded-3xl bg-[var(--color-primary)]/[0.05] p-6 md:p-8 border border-[var(--color-primary)]/10 shadow-sm">
        <h1 className="text-3xl font-bold mb-6 text-[var(--color-primary)]">Find Your Next Opportunity</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center bg-[var(--color-background)] rounded-xl px-4 py-2 border border-[var(--color-border)] focus-within:border-[var(--color-primary)] transition-colors">
            <Search className="text-[var(--color-muted-foreground)] mr-3" size={20} />
            <input 
              type="text" 
              placeholder="Job title, keywords, or company" 
              className="w-full bg-transparent border-none focus:outline-none text-[var(--color-foreground)] h-10"
            />
          </div>
          <div className="flex-1 flex items-center bg-[var(--color-background)] rounded-xl px-4 py-2 border border-[var(--color-border)] focus-within:border-[var(--color-primary)] transition-colors">
            <MapPin className="text-[var(--color-muted-foreground)] mr-3" size={20} />
            <input 
              type="text" 
              placeholder="City, province, or remote" 
              className="w-full bg-transparent border-none focus:outline-none text-[var(--color-foreground)] h-10"
            />
          </div>
          <Button size="lg" className="h-[3.5rem] rounded-xl px-8">Search</Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-1/4">
          <div className="sticky top-24 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <Filter size={18} /> Filters
              </h2>
              <button className="text-sm text-[var(--color-primary)] hover:underline cursor-pointer">Clear all</button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3 text-sm">Job Type</h3>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Freelance", "Internship"].map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] accent-[var(--color-primary)]" />
                      <span className="text-sm text-[var(--color-muted-foreground)]">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 text-sm">Work Mode</h3>
                <div className="space-y-2">
                  {["On-site", "Hybrid", "Remote"].map((mode) => (
                    <label key={mode} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] accent-[var(--color-primary)]" />
                      <span className="text-sm text-[var(--color-muted-foreground)]">{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-3 text-sm">Experience Level</h3>
                <div className="space-y-2">
                  {["Entry Level", "Mid Level", "Senior Level", "Director", "Executive"].map((level) => (
                    <label key={level} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)] accent-[var(--color-primary)]" />
                      <span className="text-sm text-[var(--color-muted-foreground)]">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Job Listings Main Column */}
        <main className="w-full lg:w-3/4">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-semibold text-lg">Showing {JOB_LISTINGS.length} Jobs</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[var(--color-muted-foreground)]">Sort by:</span>
              <select className="text-sm bg-transparent border-none focus:ring-0 cursor-pointer font-medium">
                <option>Most Relevant</option>
                <option>Date Posted</option>
                <option>Salary (High to Low)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {JOB_LISTINGS.map((job) => (
              <Link key={job.slug} href={`/job/${job.slug}`}>
                <Card className="group hover:bg-[var(--color-primary)]/5 hover:border-[var(--color-primary)]/30 transition-all cursor-pointer rounded-2xl shadow-sm border-[var(--color-border)]">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                          <Briefcase size={24} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg group-hover:text-[var(--color-primary)] transition-colors">{job.title}</h3>
                          <div className="text-[var(--color-muted-foreground)] sm:mt-1 font-medium">{job.company}</div>
                          <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium">
                            <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-primary)]/10 px-2 py-1 text-[var(--color-primary)]">
                              <MapPin size={12} /> {job.location}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-primary)]/10 px-2 py-1 text-[var(--color-primary)]">
                              <Clock size={12} /> {job.type}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-primary)]/10 px-2 py-1 text-[var(--color-primary)]">
                              {job.mode}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded-md bg-[var(--color-primary)]/10 px-2 py-1 text-[var(--color-primary)]">
                              <Wallet size={12} /> {job.salary}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 h-full">
                        <span className="text-xs text-[var(--color-muted-foreground)]">{job.posted}</span>
                        <Button variant="ghost" className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)]">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <Button variant="outline" size="lg" className="rounded-xl px-8 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)]">Load More</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
