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
    answer: "Yes. Once you create an account and log in, you can click the bookmark icon on any job listing to save it to your Job Seeker Dashboard."
  },
  {
    question: "How do I update my profile?",
    answer: "Go to your Dashboard, select 'Profile' from the sidebar, and you can update your contact information, experience, and upload a new profile picture."
  },
  {
    question: "Are remote jobs available?",
    answer: "Absolutely. You can use the 'Work Mode' filter on the Jobs page to exclusively search for 'Remote' opportunities."
  }
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-4xl flex-1 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#2d3748]">Got <span className="text-[var(--color-primary)]">Questions?</span></h1>
        <p className="text-xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about navigating Pakistan&apos;s premier job portal.
        </p>
      </div>

      <div className="grid gap-6">
        {FAQS.map((faq, index) => (
          <Card key={index} className="rounded-3xl border-[#e2e8f0] shadow-sm hover:border-[var(--color-primary)]/30 transition-all hover:shadow-md">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 text-[#2d3748] flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm">?</span>
                {faq.question}
              </h3>
              <p className="text-lg text-[#6b7280] leading-relaxed ml-11">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
