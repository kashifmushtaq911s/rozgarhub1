import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Rozgarhub",
  description: "Terms of Service for Rozgarhub.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in text-[#1e293b]">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#0f172a] tracking-tight leading-tight">Terms of <span className="text-[var(--color-primary)]">Service</span></h1>
        <div className="h-1.5 w-24 bg-[var(--color-primary)] rounded-full mb-6"></div>
        <p className="text-lg text-[#64748b] font-bold uppercase tracking-widest">Effective Date: 20-03-2026</p>
      </div>
      
      <div className="grid gap-16">
        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">01</span>
            Acceptance of Terms
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed font-medium">
            By accessing or using the Rozgarhub platform, you agree to comply with and be bound by 
            these Terms of Service. If you do not agree with these terms, please do not use our services.
          </p>
        </section>

        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">02</span>
            Use of Service
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed font-medium">
            Our platform provides tools for building CVs and aggregating job postings. You agree to use these services 
            only for lawful purposes and in a manner that does not infringe on the rights of others.
          </p>
        </section>

        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">03</span>
            Content Guidelines
          </h2>
          <ul className="space-y-4 text-lg text-[#475569] font-medium">
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--color-primary)] mt-2.5 shrink-0"></div>
              You may not use our services to create false, inaccurate, or misleading documents.
            </li>
            <li className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--color-primary)] mt-2.5 shrink-0"></div>
              CVs and profiles created must accurately represent your professional experience.
            </li>
          </ul>
        </section>

        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">04</span>
            Limitation of Liability
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed font-medium">
            Rozgarhub acts as a platform to provide career tools and aggregate job listings. We do not guarantee 
            employment, nor do we guarantee the quality or safety of the external jobs listed. Use our platform at your own risk.
          </p>
        </section>
      </div>
    </div>
  )
}
