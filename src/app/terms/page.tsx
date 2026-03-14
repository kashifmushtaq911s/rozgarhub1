import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Rozgarhub",
  description: "Terms of Service for Rozgarhub.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-8 max-w-5xl flex-1 animate-fade-in">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#2d3748]">Terms of <span className="text-[var(--color-primary)]">Service</span></h1>
        <p className="text-lg text-[#6b7280]">Last Updated: March 2026</p>
      </div>
      
      <div className="prose prose-xl dark:prose-invert max-w-none">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">1. Acceptance of Terms</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            By accessing or using the Rozgarhub platform, you agree to comply with and be bound by 
            these Terms of Service. If you do not agree with these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">2. User Accounts</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            You are responsible for maintaining the confidentiality of your account credentials. 
            You must immediately notify us of any unauthorized use of your account.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">3. Content Guidelines</h2>
          <ul className="space-y-4 text-lg text-[#6b7280]">
            <li>You may not post false, inaccurate, or misleading information.</li>
            <li>CVs and profiles must accurately represent your professional experience.</li>
            <li>Employers must post legitimate job opportunities and refrain from discriminatory practices.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-[#2d3748]">4. Limitation of Liability</h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Rozgarhub acts as a platform to connect job seekers and employers. We do not guarantee 
            employment, nor do we guarantee the quality or safety of the jobs listed. Use our platform at your own risk.
          </p>
        </section>
      </div>
    </div>
  )
}
