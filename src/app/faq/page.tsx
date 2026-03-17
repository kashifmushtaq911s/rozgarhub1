import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Rozgarhub",
  description: "Find answers to common questions about Rozgarhub.",
}

const FAQS = [
  {
    question: "Is the CV Builder really free?",
    answer: "Yes! Our CV builder is completely free to use. You can select a template, fill in your details, and download the PDF without any hidden fees."
  },
  {
    question: "How do I apply for a job?",
    answer: "Simply navigate to the Jobs section, find a role that interests you, click on it to see the details, and hit the 'Apply Now' button."
  },
  {
    question: "Can I save jobs to apply later?",
    answer: "Currently, we don't require user accounts to browse jobs. You can simply bookmark the job page in your web browser to save it for later."
  },
  {
    question: "Do I need an account to apply?",
    answer: "No! You can apply directly through the provided application links without needing to create an account or maintain a profile on our site."
  },
  {
    question: "Are remote jobs available?",
    answer: "Absolutely. You can use the 'Work Mode' filter on the Jobs page to exclusively search for 'Remote' opportunities."
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-4xl flex-1 animate-fade-in">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#0f172a] tracking-tight leading-tight">Got <span className="text-[var(--color-primary)]">Questions?</span></h1>
        <p className="text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-medium">
          Everything you need to know about navigating Pakistan&apos;s premier job portal. Your career journey is just a search away.
        </p>
      </div>

      <div className="grid gap-8">
        {FAQS.map((faq, index) => (
          <Card key={index} className="group rounded-[2.5rem] border-[#e2e8f0] bg-white shadow-sm hover:border-[var(--color-primary)]/20 transition-all hover:shadow-2xl hover:shadow-blue-900/10 cursor-default">
            <CardContent className="p-10">
              <h3 className="text-2xl font-black mb-6 text-[#0f172a] flex items-start gap-5 transition-colors group-hover:text-[var(--color-primary)] leading-tight">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-lg font-black group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all transform group-hover:scale-110">?</span>
                {faq.question}
              </h3>
              <p className="text-lg text-[#475569] leading-relaxed ml-0 md:ml-15 font-medium border-l-4 border-[var(--color-primary)]/10 pl-6 md:pl-10">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
