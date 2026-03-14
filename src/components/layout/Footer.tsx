import Link from "next/link"
import { BriefcaseBusiness, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#e2e8f0] bg-[#f5f7fa] pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Top: Brand + Quick Links */}
        <div className="flex flex-col items-center text-center mb-8">
          <Link href="/" className="flex items-center gap-3 mb-4 transition-opacity hover:opacity-90">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-white shadow-md shadow-blue-500/15">
              <BriefcaseBusiness size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#2d3748]">Rozgarhub</span>
          </Link>
          <p className="max-w-lg text-sm text-[#6b7280] leading-relaxed mb-6">
            Pakistan&apos;s premier digital gateway bridging the gap between innovative talent and industry-leading opportunities nationwide.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 py-4 border-y border-[#e2e8f0]/60 w-full max-w-3xl mx-auto">
            <Link href="/about" className="text-sm font-medium text-[#2d3748] hover:text-[var(--color-primary)] transition-colors">About</Link>
            <span className="text-[#e2e8f0] hidden md:block">|</span>
            <Link href="/why-us" className="text-sm font-medium text-[#2d3748] hover:text-[var(--color-primary)] transition-colors">Why we are #1</Link>
            <span className="text-[#e2e8f0] hidden md:block">|</span>
            <Link href="/faq" className="text-sm font-medium text-[#2d3748] hover:text-[var(--color-primary)] transition-colors">FAQ</Link>
            <span className="text-[#e2e8f0] hidden md:block">|</span>
            <Link href="/privacy-policy" className="text-sm font-medium text-[#2d3748] hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
            <span className="text-[#e2e8f0] hidden md:block">|</span>
            <Link href="/terms" className="text-sm font-medium text-[#2d3748] hover:text-[var(--color-primary)] transition-colors">Terms and Conditions</Link>
            <span className="text-[#e2e8f0] hidden md:block">|</span>
            <Link href="/contact" className="text-sm font-medium text-[#2d3748] hover:text-[var(--color-primary)] transition-colors">Contact Us</Link>
          </div>
        </div>

        {/* Contact Info - Compact, professional single row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-8 text-xs text-[#6b7280]">
          <a href="mailto:support@rozgarhub.pk" className="flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors">
            <Mail size={13} className="text-[var(--color-primary)]" />
            <span>support@rozgarhub.pk</span>
          </a>
          <span className="text-[#e2e8f0] hidden sm:block">•</span>
          <a href="tel:+923001234567" className="flex items-center gap-1.5 hover:text-[var(--color-primary)] transition-colors">
            <Phone size={13} className="text-[var(--color-primary)]" />
            <span>+92 300 1234567</span>
          </a>
          <span className="text-[#e2e8f0] hidden sm:block">•</span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[var(--color-primary)]" />
            <span>Islamabad, Pakistan</span>
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/8 text-[#6b7280] hover:bg-[var(--color-primary)] hover:text-white transition-all" aria-label="Facebook">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/8 text-[#6b7280] hover:bg-[var(--color-primary)] hover:text-white transition-all" aria-label="Twitter / X">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/8 text-[#6b7280] hover:bg-[var(--color-primary)] hover:text-white transition-all" aria-label="LinkedIn">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/8 text-[#6b7280] hover:bg-[var(--color-primary)] hover:text-white transition-all" aria-label="Instagram">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.882 0 1.441 1.441 0 012.882 0z"/></svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="group flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-primary)]/8 text-[#6b7280] hover:bg-[var(--color-primary)] hover:text-white transition-all" aria-label="YouTube">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col items-center justify-between border-t border-[#e2e8f0] pt-6 sm:flex-row gap-3">
          <p className="text-xs text-[#6b7280]">
            © {currentYear} Rozgarhub Pakistan. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
             <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
             <span className="text-xs text-[var(--color-primary)] font-semibold">Pakistan&apos;s #1 Job Portal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
