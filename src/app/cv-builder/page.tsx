import { Metadata } from "next"
import CVBuilderClient from "@/components/cv/CVBuilderClient"

export const metadata: Metadata = {
  title: "Free CV Builder | Rozgarhub",
  description: "Build a modern CV for free in minutes. Export to PDF and apply directly to jobs in Pakistan.",
}

export default function CVBuilderPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-8 flex-1 flex flex-col animate-fade-in">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e2e8f0] pb-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-1.5 text-xs font-black mb-6 text-[var(--color-primary)] uppercase tracking-widest border border-[var(--color-primary)]/10">
            Professional CV Builder
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] mb-6 leading-tight">Build Your <span className="text-[var(--color-primary)]">Future</span></h1>
          <p className="text-xl text-[#475569] max-w-2xl font-medium leading-relaxed">Create a high-impact resume instantly with our premium international templates. Real-time preview as you type.</p>
        </div>
      </div>
      
      <CVBuilderClient />
    </div>
  )
}
