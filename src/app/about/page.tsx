import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Rozgarhub",
  description: "Learn more about Rozgarhub, Pakistan's leading job portal.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black mb-8 text-[#0f172a] tracking-tight leading-tight">About <span className="text-[var(--color-primary)]">Rozgarhub</span></h1>
        <p className="text-2xl text-[#475569] max-w-3xl mx-auto leading-relaxed font-medium">
          Pakistan&apos;s premier digital gateway bridging the gap between innovative talent and industry-leading opportunities.
        </p>
      </div>

      <div className="prose prose-xl dark:prose-invert max-w-none">
        <div className="mb-24">
          <h2 className="text-4xl font-black mt-0 mb-8 text-[#0f172a] text-center">Our Mission</h2>
          <p className="text-xl text-[#475569] leading-relaxed text-center max-w-4xl mx-auto font-medium">
            Our mission is to empower the workforce of Pakistan by providing a transparent, merit-driven platform that connects ambition with opportunity. We are committed to reducing employment barriers through innovative technology and a user-centric approach.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-[#0f172a]">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            { title: "Smart Matching", desc: "Our algorithms connect you with roles that truly fit your expertise." },
            { title: "Modern Tools", desc: "Build industry-standard resumes with our Europass-inspired builder." },
            { title: "High Quality Listings", desc: "Direct connections to trusted opportunities nationwide." }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-[2.5rem] border border-[#e2e8f0] bg-white shadow-sm hover:shadow-xl hover:border-[var(--color-primary)]/20 transition-all group">
              <h3 className="text-xl font-bold mb-4 mt-0 text-[#0f172a] group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h3>
              <p className="text-base text-[#475569] m-0 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-hover)] p-12 rounded-[3rem] text-center text-white shadow-2xl shadow-blue-900/10">
          <h3 className="text-4xl font-black mb-8 mt-0">Ready to Elevate Your Career?</h3>
          <p className="text-xl mb-12 opacity-95 max-w-2xl mx-auto font-medium leading-relaxed">Join thousands of professionals who have found their dream roles through Rozgarhub.</p>
          <div className="flex justify-center">
            <Link href="/jobs" className="bg-white text-[var(--color-primary)] px-12 py-5 rounded-[2rem] font-black hover:bg-[#f8fafc] transition-all text-xl shadow-lg active:scale-95">
              Explore Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
