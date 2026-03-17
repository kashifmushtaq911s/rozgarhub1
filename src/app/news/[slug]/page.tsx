import { Metadata } from 'next'
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Calendar, Share2, Newspaper, Clock, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())
  
  return {
    title: `${title} | Rozgarhub News`,
    description: `Detailed information about: ${title}`,
  }
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const title = slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-[1200px] flex-1 animate-fade-in">
      <Link href="/upcoming" className="inline-flex items-center gap-2 text-sm font-bold text-[#64748b] hover:text-[var(--color-primary)] mb-10 transition-all group">
        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to News & Updates
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <Card className="rounded-[3rem] border-none shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
            <div className="h-64 bg-slate-900 relative overflow-hidden">
               <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
               <div className="absolute bottom-8 left-10 right-10">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 inline-block">Flash Update</span>
                  <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                    {title}
                  </h1>
               </div>
            </div>
            
            <CardContent className="p-10 md:p-14">
              <div className="flex flex-wrap gap-6 mb-12 border-b border-slate-50 pb-8">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                    <Calendar size={18} className="text-emerald-500" />
                    <span>Posted on {formatDate(new Date('2026-03-17'))}</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                    <Tag size={18} className="text-emerald-500" />
                    <span>Policy Update</span>
                 </div>
                 <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                    <Clock size={18} className="text-emerald-500" />
                    <span>2 Min Read</span>
                 </div>
              </div>

              <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 text-lg">
                <p>
                  Rozgarhub has received verified information regarding the latest announcement of <strong>{title}</strong>. This update is critical for candidate currently preparing for competitive exams or those seeking immediate employment in the public sector.
                </p>
                
                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-6">Key Highlights</h3>
                <p>
                  According to the preliminary reports, the organization is looking to streamline the recruitment process. The core focus will be on merit-based selection and transparent evaluation criteria.
                </p>

                <div className="bg-emerald-50/50 border-l-4 border-emerald-500 p-8 rounded-r-3xl my-10 italic font-medium text-emerald-800">
                  "This policy represents a significant step forward in making national employment more accessible to qualified talent across all provinces."
                </div>

                <h3 className="text-2xl font-black text-slate-900 mt-10 mb-6">How to Prepare?</h3>
                <ul>
                  <li>Keep your academic records organized and verified.</li>
                  <li>Stay tuned to Rozgarhub for the official notification release.</li>
                  <li>Start practicing with our Study Material section.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
           <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-slate-200 bg-white overflow-hidden">
             <CardContent className="p-10">
                <h3 className="font-black text-2xl mb-8 text-slate-900">Share Update</h3>
                <div className="space-y-4">
                   <Button className="w-full h-14 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow-xl shadow-emerald-500/20 gap-3">
                      <Share2 size={20} /> Share via WhatsApp
                   </Button>
                   <Button variant="outline" className="w-full h-14 rounded-2xl border-slate-200 text-slate-500 font-bold hover:bg-slate-50 gap-3">
                      <ChevronLeft size={20} className="rotate-180" /> Copy Link
                   </Button>
                </div>
             </CardContent>
           </Card>

           <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-slate-200 bg-slate-900 text-white overflow-hidden p-10 relative">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Newspaper size={80} />
              </div>
              <h3 className="font-black text-2xl mb-4 relative z-10">Need Assistance?</h3>
              <p className="text-slate-400 font-medium mb-8 relative z-10">Our community team is here to help you understand the latest updates and preparation strategies.</p>
              <Link href="/contact" className="block">
                 <Button className="w-full h-14 rounded-2xl bg-white text-slate-900 font-black hover:bg-slate-100 transition-all">
                    Contact Team
                 </Button>
              </Link>
           </Card>
        </div>
      </div>
    </div>
  )
}
