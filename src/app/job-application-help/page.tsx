import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Job Application Help | Rozgarhub",
  description: "Get professional assistance with your job applications for just Rs. 200/-",
}

export default function JobApplicationHelpPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 sm:px-8 max-w-4xl flex-1 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#2d3748] tracking-tight">
          Job Application <span className="text-[var(--color-primary)]">Assistance</span>
        </h1>
        <p className="text-xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
          Struggling to find the time or not sure how to apply? Let our experts apply for jobs on your behalf.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-[2rem] p-8 md:p-12 border border-[#e2e8f0] shadow-xl shadow-[var(--color-primary)]/5 mb-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-[#2d3748]">How Our Service Works</h2>
          <p className="text-[#6b7280] text-lg">
            For a nominal fee of just <strong className="text-[var(--color-primary)] text-2xl">Rs. 200/-</strong>, our dedicated team will handle the hard work for you.
          </p>
          
          <ul className="space-y-4 mt-8">
            {[
              "Send us your documents in PDF format separately.",
              "We will apply to relevant jobs on your behalf.",
              "Save time and avoid the hassle of application forms.",
              "Receive updates when applications are successfully submitted."
            ].map((benefit, i) => (
              <li key={i} className="flex items-start gap-3 text-[#4a5568] text-lg">
                <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="w-full md:w-[350px] bg-[#f8fafc] rounded-2xl p-8 border border-[#e2e8f0] text-center flex flex-col items-center">
          <div className="h-16 w-16 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
            <MessageCircle size={32} />
          </div>
          <h3 className="text-xl font-bold text-[#2d3748] mb-2">Hire Us Now</h3>
          <p className="text-[#64748b] mb-8">Available 7 days a week. We will respond to your inquiry as soon as possible.</p>
          
          <div className="w-full space-y-3">
            <a href="https://wa.me/923088636811" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button size="lg" className="w-full rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/20 py-6 text-lg cursor-pointer">
                WhatsApp Us
              </Button>
            </a>
            <Button variant="outline" size="lg" className="w-full rounded-xl border-[#cbd5e1] text-[#475569] hover:bg-[#f1f5f9] py-6 text-lg flex items-center gap-2 cursor-pointer">
              <Phone size={18} /> +92 308 8636811
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[#6b7280]">
          Note: This fee is for the application service only and does not guarantee a job or interview. 
          Selection is purely based on employer requirements and candidate merit.
        </p>
      </div>
    </div>
  )
}
