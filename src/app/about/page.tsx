import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us | Rozgarhub",
  description: "Learn more about Rozgarhub, Pakistan's leading job portal.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-[#2d3748] tracking-tight">About <span className="text-[var(--color-primary)]">Rozgarhub</span></h1>
        <p className="text-2xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
          Pakistan&apos;s premier digital gateway bridging the gap between innovative talent and industry-leading opportunities.
        </p>
      </div>

      <div className="prose prose-xl dark:prose-invert max-w-none">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mt-0 mb-6 text-[#2d3748]">Our Vision</h2>
            <p className="text-lg text-[#6b7280] leading-relaxed">
              We envision a Pakistan where every skilled professional can effortlessly discover their perfect career path, 
              empowering them to contribute to a thriving national economy through merit and accessibility.
            </p>
          </div>
          <div className="bg-[#f5f7fa] p-8 rounded-3xl border border-[#e2e8f0] shadow-sm">
             <div className="text-[var(--color-primary)] font-bold text-4xl mb-4">10k+</div>
             <p className="text-[#2d3748] font-medium m-0">Active job listings across major Pakistani cities.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-[#2d3748]">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Smart Matching", desc: "Our algorithms connect you with roles that truly fit your expertise." },
            { title: "Modern Tools", desc: "Build industry-standard resumes with our Europass-inspired builder." },
            { title: "Verified Listings", desc: "Direct connections to trusted employers nationwide." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl border border-[#e2e8f0] hover:border-[var(--color-primary)]/30 transition-colors">
              <h3 className="text-xl font-bold mb-3 mt-0 text-[#2d3748]">{item.title}</h3>
              <p className="text-base text-[#6b7280] m-0">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] p-12 rounded-[40px] text-center text-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-6 mt-0">Ready to Elevate Your Career?</h3>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">Join thousands of professionals who have found their dream roles through Rozgarhub.</p>
          <div className="flex justify-center gap-4">
            <Link href="/jobs" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-2xl font-bold hover:bg-[#f5f7fa] transition-colors text-lg">
              Explore Jobs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
