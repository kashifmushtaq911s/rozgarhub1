import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Briefcase, Clock, Wallet, Bookmark, Share2, ChevronLeft, Calendar } from "lucide-react"
import Link from "next/link"

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  // In a real app, fetch job details from DB
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
  
  return {
    title: `${title} | Rozgarhub`,
    description: `Apply for ${title} job in Pakistan on Rozgarhub.`,
  }
}

export default function JobDetailPage({ params }: { params: { slug: string } }) {
  // Mock Data
  const title = params.slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: title,
    description: `We are looking for an experienced ${title} to join our team.`,
    datePosted: '2026-03-12T00:00:00Z',
    validThrough: '2026-04-15T00:00:00Z',
    employmentType: 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'TechCorp Pakistan',
      sameAs: 'https://techcorp.pk',
      logo: 'https://rozgarhub.pk/logo.png'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lahore',
        addressRegion: 'Punjab',
        addressCountry: 'PK'
      }
    },
    baseSalary: {
      '@type': 'MonetaryAmount',
      currency: 'PKR',
      value: {
        '@type': 'QuantitativeValue',
        value: 250000,
        unitText: 'MONTH'
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:px-8 max-w-5xl flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Link href="/jobs" className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-primary)] mb-6 transition-colors">
        <ChevronLeft size={16} /> Back to jobs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header Card */}
          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent"></div>
            <CardContent className="p-6 md:p-8 -mt-12 relative z-10">
              <div className="bg-white dark:bg-[#1a1d28] h-20 w-20 rounded-xl shadow-sm border border-[var(--color-border)] flex items-center justify-center mb-6">
                <Briefcase size={32} className="text-[var(--color-muted-foreground)]" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
                  <span className="text-lg text-[var(--color-primary)] font-medium">TechCorp Pakistan</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="rounded-xl shrink-0 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5">
                    <Bookmark size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl shrink-0 hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5">
                    <Share2 size={18} />
                  </Button>
                  <Button size="lg" className="rounded-xl ml-2 w-full md:w-auto bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]">Apply Now</Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
                  <MapPin size={16} className="text-[var(--color-primary)]" />
                  Lahore, Pakistan (Hybrid)
                </div>
                <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
                  <Clock size={16} className="text-[var(--color-primary)]" />
                  Full-time
                </div>
                <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
                  <Wallet size={16} className="text-[var(--color-primary)]" />
                  Rs. 200,000 - Rs. 300,000
                </div>
                <div className="flex items-center gap-2 text-[var(--color-muted-foreground)]">
                  <Calendar size={16} className="text-[var(--color-primary)]" />
                  Posted 2 days ago
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
            <CardContent className="p-6 md:p-8 prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-4">Job Description</h3>
              <p>We are looking for an experienced and self-driven Senior Frontend Developer to join our team. You will be responsible for implementing visual elements that users see and interact with in a web application.</p>
              
              <h4 className="text-lg font-medium mt-6 mb-3">Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
                <li>Develop new user-facing features using React.js and Next.js.</li>
                <li>Build reusable code and libraries for future use.</li>
                <li>Ensure the technical feasibility of UI/UX designs.</li>
                <li>Optimize application for maximum speed and scalability.</li>
              </ul>
              
              <h4 className="text-lg font-medium mt-6 mb-3">Requirements:</h4>
              <ul className="list-disc pl-5 space-y-2 text-[var(--color-muted-foreground)]">
                <li>3+ years of experience in frontend development.</li>
                <li>Proficient understanding of web markup, including HTML5, CSS3.</li>
                <li>Good understanding of advanced JavaScript libraries and frameworks.</li>
                <li>Experience with Tailwind CSS and modern styling architectures.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Company Info */}
          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">About the Company</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white dark:bg-[#1a1d28] h-12 w-12 rounded-lg shadow-sm border border-[var(--color-border)] flex items-center justify-center">
                  <Briefcase size={20} className="text-[var(--color-muted-foreground)]" />
                </div>
                <div>
                  <h4 className="font-medium">TechCorp Pakistan</h4>
                  <Link href="/jobs" className="text-sm text-[var(--color-primary)] hover:underline">View profile</Link>
                </div>
              </div>
              <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                TechCorp is a leading software house providing cutting-edge solutions to businesses worldwide.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div className="flex justify-between">
                  <span className="text-[var(--color-muted-foreground)]">Founded</span>
                  <span className="font-medium">2015</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--color-muted-foreground)]">Employees</span>
                  <span className="font-medium">50-200</span>
                </div>
              </div>
              <Button variant="outline" className="w-full hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/5 hover:text-[var(--color-primary)]">Follow Company</Button>
            </CardContent>
          </Card>

          {/* Summary Box */}
          <Card className="rounded-2xl bg-[var(--color-secondary)] border-transparent shadow-none">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Job Summary</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-[var(--color-muted-foreground)] mb-1">Published on</p>
                  <p className="font-medium">March 12, 2026</p>
                </div>
                <div>
                  <p className="text-[var(--color-muted-foreground)] mb-1">Vacancy</p>
                  <p className="font-medium">02</p>
                </div>
                <div>
                  <p className="text-[var(--color-muted-foreground)] mb-1">Experience</p>
                  <p className="font-medium">3 to 5 Years</p>
                </div>
                <div>
                  <p className="text-[var(--color-muted-foreground)] mb-1">Deadline</p>
                  <p className="font-medium text-red-500">April 15, 2026</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
