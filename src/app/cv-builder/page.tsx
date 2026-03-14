import { Metadata } from "next"
import CVBuilderClient from "@/components/cv/CVBuilderClient"

export const metadata: Metadata = {
  title: "Free CV Builder | Rozgarhub",
  description: "Build a modern CV for free in minutes. Export to PDF and apply directly to jobs in Pakistan.",
}

export default function CVBuilderPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 flex-1 flex flex-col">
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2d3748] mb-4">Build Your <span className="text-[var(--color-primary)]">CV</span></h1>
          <p className="text-xl text-[#6b7280] max-w-2xl">Create your resume instantly with our premium templates. Live preview as you type.</p>
        </div>
        <div className="inline-flex h-8 items-center rounded-full border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/5 px-3 text-xs font-medium text-[var(--color-primary)]">
          Free CV generation
        </div>
      </div>
      
      <CVBuilderClient />
    </div>
  )
}
