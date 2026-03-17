import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Briefcase, Clock, Wallet, Bookmark, Share2, ChevronLeft, Calendar, TrendingUp, Users, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"
import { supabase } from "@/lib/supabase"
import { formatDate } from "@/lib/utils"

type Props = { params: Promise<{ slug: string }> }

async function getJobBySlug(slug: string) {
  // Fetch all published jobs and find matching slug
  const { data, error } = await supabase
    .from("posting")
    .select("*")
    .eq("status", "published")

  if (error || !data) return null

  // Find job whose title generates the matching slug
  const job = data.find((j: any) => {
    const jobSlug = (j.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    return jobSlug === slug
  })

  return job || null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug)
  const title = job?.title || slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
  
  return {
    title: `${title} | Rozgarhub`,
    description: `Apply for ${title} job in Pakistan on Rozgarhub.`,
  }
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = await getJobBySlug(slug)
  
  const title = job?.title || slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
  const company = job?.company || ""
  const salary = job?.salary || ""
  const city = job?.city || ""
  const province = job?.province || ""
  const location = city ? `${city}${province ? `, ${province.toUpperCase()}` : ''}` : (province || "")
  const scale = job?.scale || ""
  const type = job?.type || ""
  const deadline = job?.deadline || ""
  const description = job?.description || ""
  const requirements = job?.requirements || ""
  const applicationLink = job?.application_link || ""
  const websiteUrl = job?.direct_website_url || ""
  const imageUrl = job?.image_url_link || ""
  const logoUrl = job?.logo_url || ""
  const category = job?.category || ""
  const createdAt = job?.created_at || ""

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: title,
    description: description || `Apply for ${title} position.`,
    datePosted: createdAt || new Date().toISOString(),
    validThrough: deadline || '',
    employmentType: type?.toUpperCase().replace('-', '_') || 'FULL_TIME',
    hiringOrganization: {
      '@type': 'Organization',
      name: company || 'Rozgarhub',
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: city,
        addressRegion: province,
        addressCountry: 'PK'
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-[1400px] flex-1 animate-fade-in">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-[#64748b] hover:text-[var(--color-primary)] transition-all group">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to job listings
        </Link>
        <div className="flex flex-wrap gap-3 items-center">
          <Link href={`mailto:?subject=Job Opportunity: ${title}&body=Check out this job: ${title} on Rozgarhub`} className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-slate-200 bg-white hover:border-emerald-500/30 hover:bg-emerald-50 transition-all text-slate-500 hover:text-emerald-600">
            <Share2 size={18} />
          </Link>
          <Link href={`https://wa.me/?text=Check out this job: ${title} on Rozgarhub`} target="_blank" className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-slate-200 bg-white hover:border-emerald-500/30 hover:bg-emerald-50 transition-all text-slate-500 hover:text-emerald-600">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 space-y-10">
          <Card className="rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden bg-white">
            <div className="border-b border-slate-50 p-10 md:p-14">
              <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       {type && <span className="px-4 py-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-black uppercase tracking-[0.2em] rounded-xl border border-emerald-100">{type}</span>}
                       {category && <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{category}</span>}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight max-w-2xl">
                      {title}
                    </h1>
                    {company && <p className="text-xl md:text-2xl font-bold text-emerald-600">{company}</p>}
                 </div>
                 <div className="h-20 w-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 shadow-inner overflow-hidden">
                    {logoUrl ? (
                      <img src={logoUrl} alt={company} className="h-full w-full object-cover" />
                    ) : (
                      <Briefcase size={32} className="text-slate-300" />
                    )}
                 </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[
                   ...(salary ? [{ label: "Salary Range", value: salary, icon: Wallet }] : []),
                   ...(location ? [{ label: "Location", value: location, icon: MapPin }] : []),
                   ...(scale && scale !== "N/A" ? [{ label: "Scale / BPS", value: scale, icon: TrendingUp }] : []),
                   ...(deadline ? [{ label: "Last Date", value: formatDate(deadline), icon: Calendar }] : []),
                 ].map((item, i) => (
                   <div key={i} className="relative p-6 rounded-3xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-xl group overflow-hidden">
                      <div className="h-10 w-10 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-all">
                        <item.icon size={18} className="text-slate-400 group-hover:text-slate-900" />
                      </div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className="font-black text-slate-900 text-sm">{item.value}</p>
                   </div>
                 ))}
              </div>
            </div>
            
            <CardContent className="p-10 md:p-14">
              <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">
                {description && (
                  <div className="mb-14">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                      Job Description
                      <div className="h-0.5 flex-1 bg-slate-50"></div>
                    </h3>
                    <div className="text-lg whitespace-pre-line">{description}</div>
                  </div>
                )}

                {requirements && (
                  <div className="mb-14">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                      <CheckCircle className="text-emerald-500" size={24} />
                      Requirements & Eligibility
                    </h3>
                    <div className="text-lg whitespace-pre-line">{requirements}</div>
                  </div>
                )}

                {/* Advertisement Image from Cloudinary */}
                {imageUrl && (
                  <div className="mt-10">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-4">
                      Official Advertisement
                      <div className="h-0.5 flex-1 bg-slate-50"></div>
                    </h3>
                    <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                      <img 
                        src={imageUrl} 
                        alt={`${title} - Official Advertisement`}
                        className="w-full h-auto rounded-[2rem] object-contain" 
                      />
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-slate-200 bg-white overflow-hidden sticky top-28">
            <div className="bg-emerald-600 h-2 px-8"></div>
            <CardContent className="p-10">
              <h3 className="font-black text-2xl mb-8 text-slate-900">Engagement</h3>
              <div className="space-y-6">
                
                {createdAt && (
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:bg-emerald-50 hover:border-emerald-100">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-emerald-600 border border-slate-100"><Calendar size={20} /></div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">Posted On</p>
                      <p className="font-black text-slate-900">{formatDate(createdAt)}</p>
                    </div>
                  </div>
                )}

                {deadline && (
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-rose-50 border border-rose-100 transition-all">
                    <div className="bg-white p-3 rounded-xl shadow-sm text-rose-500 border border-rose-100"><Clock size={20} /></div>
                    <div>
                      <p className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-0.5">Last Date</p>
                      <p className="font-black text-rose-600">{formatDate(deadline)}</p>
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-slate-100 space-y-4">
                  {applicationLink ? (
                    <Link href={applicationLink} target="_blank" className="block">
                      <Button className="w-full h-15 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg">
                        Apply Now
                      </Button>
                    </Link>
                  ) : websiteUrl ? (
                    <Link href={websiteUrl} target="_blank" className="block">
                      <Button className="w-full h-15 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg">
                        Apply Now
                      </Button>
                    </Link>
                  ) : (
                    <Button className="w-full h-15 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg" disabled>
                      Apply Now
                    </Button>
                  )}


                  <Button variant="outline" className="w-full h-14 rounded-2xl border-slate-200 text-slate-500 font-bold hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center gap-3">
                    <Bookmark size={20} /> Save Position
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
