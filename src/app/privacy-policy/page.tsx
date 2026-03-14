import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Rozgarhub",
  description: "Privacy Policy for Rozgarhub.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#2d3748]">Privacy <span className="text-[var(--color-primary)]">Policy</span></h1>
        <p className="text-lg text-[#6b7280]">Last Updated: March 2026</p>
      </div>
      
      <div className="prose prose-xl dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">1. Information We Collect</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            We collect information that you explicitly provide to us when you register for an account,
            build a CV, or apply for jobs. This may include your name, email, phone number, employment history, and education.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">2. How We Use Your Information</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            The primary purpose of collecting your data is to help you find a job. We share your information 
            with prospective employers only when you actively apply for a job posting. We also use your data 
            to improve our services and suggest relevant job openings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">3. Data Security</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            We implement a variety of security measures to maintain the safety of your personal information 
            when you enter, submit, or access your personal information through our platform.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">4. Third-Party Services</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            We may use third-party service providers like Supabase (for authentication and database) and Cloudinary 
            (for media storage). These third parties have access to your Personal Data only to perform these tasks 
            on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>
      </div>
    </div>
  )
}
