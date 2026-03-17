import { Metadata } from "next"
import Link from "next/link"
import { Briefcase, Users, Zap, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Why Rozgarhub | Pakistan's #1 Job Portal",
  description: "Discover why Rozgarhub is the leading choice for job seekers in Pakistan.",
}

export default function WhyUsPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#0f172a] tracking-tight leading-tight">Why We Are <span className="text-[var(--color-primary)]">#1</span></h1>
        <p className="text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed font-medium">
          Elevating Pakistan&apos;s job market with a platform designed for the modern professional. Discover why thousands choose Rozgarhub.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-24">
        {[
          { 
            icon: <Users size={32} />, 
            title: "Massive Talent Pool", 
            desc: "Connecting over 100,000+ professionals with top local and international companies in Pakistan." 
          },
          { 
            icon: <Zap size={32} />, 
            title: "Lightning Fast Matching", 
            desc: "Our AI-driven algorithms ensure that the right candidates find the right roles in record time." 
          },
          { 
            icon: <ShieldCheck size={32} />, 
            title: "High Quality Listings", 
            desc: "We curate the best job postings across Pakistan to protect our community from spam and scams." 
          },
          { 
            icon: <Briefcase size={32} />, 
            title: "End-to-End Solutions", 
            desc: "From the first resume to the final offer letter, we provide tools for every step of your career." 
          }
        ].map((item, i) => (
          <div key={i} className="p-12 rounded-[2.5rem] border border-[#e2e8f0] bg-white shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:border-[var(--color-primary)]/20 transition-all group">
            <div className="mb-8 h-16 w-16 flex items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#0f172a] group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h3>
            <p className="text-lg text-[#475569] leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#f8fafc] rounded-[3rem] p-16 text-center border border-[#e2e8f0] shadow-inner">
        <h2 className="text-4xl font-black mb-6 text-[#0f172a]">Join Pakistan&apos;s Fastest Growing Community</h2>
        <p className="text-xl text-[#475569] mb-12 max-w-2xl mx-auto font-medium">
          Experience the difference of a portal designed specifically for the Pakistani job market.
        </p>
        <div className="flex justify-center">
          <Link href="/jobs">
            <button className="bg-[var(--color-primary)] text-white px-12 py-5 rounded-[2rem] font-black hover:bg-[var(--color-primary-hover)] transition-all text-xl shadow-xl shadow-blue-900/20 active:scale-95 cursor-pointer">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
