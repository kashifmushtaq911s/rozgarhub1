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
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-[#2d3748] tracking-tight">Why We Are <span className="text-[var(--color-primary)]">#1</span></h1>
        <p className="text-2xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
          The leading recruitment platform in Pakistan, built on trust, transparency, and top-tier technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
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
            title: "Verified Listings Only", 
            desc: "We manually verify every employer and job posting to protect our community from spam and scams." 
          },
          { 
            icon: <Briefcase size={32} />, 
            title: "End-to-End Solutions", 
            desc: "From the first resume to the final offer letter, we provide tools for every step of your career." 
          }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-3xl border border-[#e2e8f0] bg-white shadow-sm hover:border-[var(--color-primary)]/30 transition-all hover:-translate-y-1">
            <div className="mb-6 h-14 w-14 flex items-center justify-center rounded-2xl bg-[var(--color-primary)]/5 text-[var(--color-primary)]">
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-[#2d3748]">{item.title}</h3>
            <p className="text-lg text-[#6b7280] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-[var(--color-primary)]/5 rounded-[40px] p-12 text-center border border-[var(--color-primary)]/10">
        <h2 className="text-3xl font-bold mb-6 text-[#2d3748]">Join Pakistan&apos;s Fastest Growing Community</h2>
        <p className="text-lg text-[#6b7280] mb-8 max-w-2xl mx-auto">
          Experience the difference of a portal designed specifically for the Pakistani job market.
        </p>
        <div className="flex justify-center flex-col sm:flex-row gap-4">
          <Link href="/jobs">
            <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[var(--color-primary-hover)] transition-all text-lg shadow-lg shadow-blue-500/20 cursor-pointer">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
