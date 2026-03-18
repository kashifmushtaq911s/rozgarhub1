"use client"

import React, { useState } from "react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, CheckCircle2, Send } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-6xl flex-1 animate-fade-in">
      <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#0f172a] tracking-tight leading-tight text-center">Get in <span className="text-[var(--color-primary)]">Touch</span></h1>
      <p className="text-xl text-[#475569] text-center mb-20 max-w-2xl mx-auto font-medium">
        Have questions about our platform, need help with your CV, or want to partner with us? Our team is here to support you in every step.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white border border-[#e2e8f0] p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-300 py-20">
              <div className="h-24 w-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl font-black text-[#0f172a] mb-4">Message Sent!</h2>
              <p className="text-lg text-[#475569] font-medium max-w-xs mx-auto">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <Button 
                variant="outline" 
                className="mt-10 rounded-xl"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-black mb-8 text-[#0f172a]">Send us a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] mb-2 block ml-1">Full Name</label>
                    <Input required placeholder="e.g. Ali Khan" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/40 transition-all font-medium" />
                  </div>
                  <div>
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] mb-2 block ml-1">Email Address</label>
                    <Input required type="email" placeholder="ali@example.com" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/40 transition-all font-medium" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-[#64748b] mb-2 block ml-1">Subject / Type of Enquiry</label>
                  <div className="relative">
                    <select className="flex h-14 w-full rounded-2xl border border-[#e2e8f0] bg-transparent px-5 py-2 text-sm font-bold text-[#1e293b] focus-visible:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/40 transition-all appearance-none cursor-pointer">
                      <option value="general">General Inquiry</option>
                      <option value="proposal">Business Proposal</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing & Jobs</option>
                      <option value="feedback">Feedback</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#94a3b8]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-black uppercase tracking-widest text-[#64748b] mb-2 block ml-1">Your Message</label>
                  <textarea 
                    required
                    className="w-full min-h-[160px] rounded-2xl border border-[#e2e8f0] bg-transparent px-5 py-4 text-sm font-medium focus-visible:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)]/40 transition-all resize-none"
                    placeholder="How can we assist you today?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full h-16 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-xl shadow-blue-900/20 text-xl font-black transition-all hover:scale-[1.01] active:scale-[0.98] gap-3">
                  <Send size={20} />
                  Submit Request
                </Button>
              </form>
            </>
          )}
        </div>

        <div className="flex flex-col gap-12 justify-center lg:pl-12">
          <div className="flex items-start gap-6 group">
            <div className="bg-[var(--color-primary)]/10 p-5 rounded-3xl text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
              <Mail size={32} />
            </div>
            <div>
              <h3 className="font-black text-2xl text-[#0f172a] mb-1">Email Support</h3>
              <p className="text-[#475569] font-medium leading-relaxed mb-2">Our team will get back to you within 24 hours.</p>
              <a href="mailto:support@rozgarhub.pk" className="font-black text-[var(--color-primary)] text-xl hover:underline decoration-2 underline-offset-4 transition-all">support@rozgarhub.pk</a>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="bg-[var(--color-primary)]/10 p-5 rounded-3xl text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
              <Phone size={32} />
            </div>
            <div>
              <h3 className="font-black text-2xl text-[#0f172a] mb-1">WhatsApp Support</h3>
              <p className="text-[#475569] font-medium leading-relaxed mb-2">Available 7 days a week for immediate reach.</p>
              <a href="https://wa.me/923088636811" target="_blank" rel="noopener noreferrer" className="font-black text-[var(--color-primary)] text-xl hover:underline decoration-2 underline-offset-4 transition-all">+92 308 8636811</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

