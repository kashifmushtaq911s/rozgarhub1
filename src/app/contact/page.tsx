import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Rozgarhub",
  description: "Get in touch with the Rozgarhub team.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-8 max-w-6xl flex-1">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get in Touch</h1>
      <p className="text-lg text-[var(--color-muted-foreground)] text-center mb-16 max-w-2xl mx-auto">
        Have questions about our platform, need help with your CV, or want to partner with us? We&apos;d love to hear from you.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-8 rounded-3xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold mb-1.5 block text-[var(--color-foreground)]">Full Name</label>
                <Input placeholder="e.g. Ali Khan" className="rounded-xl border-[var(--color-border)] focus:ring-[var(--color-primary)]/20" />
              </div>
              <div>
                <label className="text-sm font-semibold mb-1.5 block text-[var(--color-foreground)]">Email Address</label>
                <Input type="email" placeholder="ali@example.com" className="rounded-xl border-[var(--color-border)] focus:ring-[var(--color-primary)]/20" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold mb-1.5 block text-[var(--color-foreground)]">Subject / Type of Enquiry</label>
              <select className="flex h-10 w-full rounded-xl border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer">
                <option value="general">General Inquiry</option>
                <option value="proposal">Business Proposal</option>
                <option value="support">Technical Support</option>
                <option value="billing">Billing/Jobs Listing</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold mb-1.5 block text-[var(--color-foreground)]">Your Message / Proposal Details</label>
              <textarea 
                className="w-full min-h-[120px] rounded-xl border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/50 transition-all"
                placeholder="Describe your message or proposal in detail..."
              ></textarea>
            </div>
            <div>
              <label className="text-sm font-semibold mb-1.5 block text-[var(--color-foreground)]">Attach Document (PDF, DOCX, etc.)</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-[var(--color-border)] border-dashed rounded-2xl cursor-pointer bg-[var(--color-primary)]/[0.02] hover:bg-[var(--color-primary)]/[0.05] transition-colors">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg className="w-8 h-8 mb-3 text-[var(--color-primary)]/60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p className="mb-2 text-sm text-[var(--color-muted-foreground)]"><span className="font-semibold text-[var(--color-primary)]">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Max file size: 10MB</p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <Button className="w-full h-12 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-lg shadow-blue-500/20 text-base font-semibold" size="lg">
              Submit Request
            </Button>
          </form>
        </div>

        <div className="flex flex-col gap-8 justify-center">
          <div className="flex items-start gap-4">
            <div className="bg-[var(--color-primary)]/10 p-4 rounded-full text-[var(--color-primary)]">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Support</h3>
              <p className="text-[var(--color-muted-foreground)]">Our team will get back to you within 24 hours.</p>
              <a href="mailto:support@rozgarhub.pk" className="font-medium mt-1 text-[var(--color-primary)] hover:underline">support@rozgarhub.pk</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[var(--color-primary)]/10 p-4 rounded-full text-[var(--color-primary)]">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone / WhatsApp</h3>
              <p className="text-[var(--color-muted-foreground)]">Available Mon-Fri from 9am to 6pm.</p>
              <a href="tel:+923001234567" className="font-medium mt-1 text-[var(--color-primary)] hover:underline">+92 300 1234567</a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-[var(--color-primary)]/10 p-4 rounded-full text-[var(--color-primary)]">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Headquarters</h3>
              <p className="text-[var(--color-muted-foreground)]">Come say hello at our office HQ.</p>
              <p className="font-medium mt-1">Blue Area, Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
