import { Metadata } from "next"
import { Bell, Newspaper, Briefcase, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Upcoming Jobs & News | Rozgarhub",
  description: "Stay updated with upcoming job opportunities, employment news, and career announcements in Pakistan.",
}

export default function UpcomingJobsPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-bold mb-6 text-[var(--color-primary)]">
          <Bell size={18} /> Stay Updated
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#0f172a] tracking-tight leading-tight">
          Upcoming <span className="text-[var(--color-primary)]">Jobs &amp; News</span>
        </h1>
        <p className="text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-medium">
          Be the first to know about soon-to-open government tests, major private sector hiring drives, and national employment news.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-16">
        {/* Placeholder Items for Admin to populate later */}
        {[
          { 
            title: "New Policy on Minimum Wage", 
            date: "Posted: 16-03-2026", 
            category: "Policy", 
            desc: "The provincial governments are reviewing the current minimum wage policies in light of recent economic changes. Implementation expected by next quarter." 
          },
          { 
            title: "Federal Government Mega Hiring Drive", 
            date: "Posted: 14-03-2026", 
            category: "Govt Jobs", 
            desc: "The Federal Government is preparing to announce over 500+ vacancies across various ministries. Prepare your documents in advance." 
          },
          { 
            title: "Tech Industry Remote Drive 2026", 
            date: "Posted: 10-03-2026", 
            category: "Private Sector", 
            desc: "Several top IT firms in Pakistan are collaborating for a massive remote hiring initiative for developers." 
          },
          { 
            title: "Educators Recruitment Drive", 
            date: "Posted: 05-03-2026", 
            category: "Education", 
            desc: "The anticipated educators recruitment drive across the province is currently pending financial approval." 
          }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] border border-[#e2e8f0] shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 transition-all flex flex-col h-full group">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-[#f8fafc] text-[#1e293b] text-xs font-bold px-4 py-1.5 rounded-full border border-[#e2e8f0]">{item.category}</span>
              <span className="flex items-center gap-1.5 text-xs font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/5 px-3 py-1.5 rounded-lg">
                <Calendar size={14} /> {item.date}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#0f172a] mb-4 group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h2>
            <p className="text-[#475569] leading-relaxed flex-1 font-medium">{item.desc}</p>
            <div className="mt-8 pt-6 border-t border-[#f1f5f9]">
              <Link href={`/news/${item.title.toLowerCase().replace(/ /g, '-')}`} className="inline-block w-full sm:w-auto">
                <button className="bg-[#f8fafc] text-[var(--color-primary)] px-6 py-2.5 rounded-xl font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all flex items-center gap-2 cursor-pointer shadow-sm border border-[#e2e8f0] group-hover:border-transparent">
                  <Newspaper size={18} /> Read Full Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-[#f8fafc] rounded-[2.5rem] p-12 text-center border border-[#e2e8f0] shadow-inner">
        <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Want to submit an update?</h3>
        <p className="text-[#475569] mb-8 text-lg font-medium">If you have verified news regarding upcoming employment opportunities, please let us know.</p>
        <Link href="/contact" className="inline-block">
          <button className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-xl font-bold hover:bg-[var(--color-primary-hover)] transition-all cursor-pointer shadow-lg shadow-blue-900/20 active:scale-95">
            Contact Admin
          </button>
        </Link>
      </div>
    </div>
  )
}
