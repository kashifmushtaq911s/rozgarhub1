import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Rozgarhub",
  description: "Privacy Policy for Rozgarhub.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in text-[#1e293b]">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#0f172a] tracking-tight leading-tight">Privacy <span className="text-[var(--color-primary)]">Policy</span></h1>
        <div className="h-1.5 w-24 bg-[var(--color-primary)] rounded-full mb-6"></div>
        <p className="text-lg text-[#64748b] font-bold uppercase tracking-widest">Effective Date: 20-03-2026</p>
      </div>
      
      <div className="grid gap-16">
        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">01</span>
            Information We Collect
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed font-medium">
            We value your privacy above all. We do not mandate the creation of user accounts or collect personal profiles. Any information you input into our free CV Builder is processed locally on your device and is not saved or transmitted to our servers.
          </p>
        </section>

        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">02</span>
            How We Use Your Information
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed font-medium">
            The primary purpose of collecting your data is to help you build professional resumes and 
            navigate the job market. Your data is processed locally on your device for CV generation 
            and we only use aggregated, non-personal data to improve our services and algorithms.
          </p>
        </section>

        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">03</span>
            Data Security
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed font-medium">
            We implement a variety of security measures to maintain the safety of your information. 
            Since our CV builder processes your sensitive document information heavily on the client-side, 
            your data remains private and secure under your direct control.
          </p>
        </section>

        <section className="bg-white p-10 rounded-[2.5rem] border border-[#e2e8f0] shadow-sm">
          <h2 className="text-2xl font-black mb-6 text-[#0f172a] flex items-center gap-4">
            <span className="h-8 w-8 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center text-sm">04</span>
            Third-Party Links
          </h2>
          <p className="text-lg text-[#475569] leading-relaxed font-medium">
            Our platform may contain links to external job boards or company application portals. 
            Once you leave our site to apply for a role, we are not responsible for the privacy practices 
            or content of those external websites.
          </p>
        </section>
      </div>
    </div>
  )
}
