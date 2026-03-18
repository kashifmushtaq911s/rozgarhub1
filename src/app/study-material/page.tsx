import { Metadata } from "next"
import { BookOpen, Download, FileText, FileBadge } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Study Material & MCQs | Rozgarhub",
  description: "Download study material, Multiple Choice Questions (MCQs), and preparation guides in Word and PDF formats.",
}

export default function StudyMaterialPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 sm:px-8 max-w-6xl flex-1 animate-fade-in">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-4 py-2 text-sm font-bold mb-6 text-[var(--color-primary)]">
          <BookOpen size={18} /> Test Preparation
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#0f172a] tracking-tight leading-tight">
          Study <span className="text-[var(--color-primary)]">Material</span>
        </h1>
        <p className="text-xl text-[#475569] max-w-2xl mx-auto leading-relaxed font-medium">
          Download free MCQs, past papers, and comprehensive study guides in Word &amp; PDF formats to prepare for your upcoming exams.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: "General Knowledge MCQs 2026", 
            category: "General", 
            type: "PDF Document",
            size: "2.4 MB",
            icon: <FileText size={40} className="text-red-500" />
          },
          { 
            title: "Testing Service Past Papers Compilation", 
            category: "Past Papers", 
            type: "Word Document (.docx)",
            size: "1.8 MB",
            icon: <FileBadge size={40} className="text-blue-500" />
          },
          { 
            title: "Everyday Science Notes", 
            category: "Science", 
            type: "PDF Document",
            size: "3.1 MB",
            icon: <FileText size={40} className="text-red-500" />
          },
          { 
            title: "Federal Intelligence Test Guide", 
            category: "Federal Tests", 
            type: "Word Document (.docx)",
            size: "1.2 MB",
            icon: <FileBadge size={40} className="text-blue-500" />
          },
          { 
            title: "Islamic Studies Complete Review", 
            category: "Islamiat", 
            type: "PDF Document",
            size: "4.5 MB",
            icon: <FileText size={40} className="text-red-500" />
          },
          { 
            title: "Computer Science Provincial Questions", 
            category: "IT & Tech", 
            type: "PDF Document",
            size: "2.0 MB",
            icon: <FileText size={40} className="text-red-500" />
          }
        ].map((file, i) => (
          <div key={i} className="bg-white rounded-[2.5rem] border border-[#e2e8f0] p-8 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1 hover:border-[var(--color-primary)]/20 transition-all group flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <div className="bg-[#f8fafc] p-4 rounded-2xl group-hover:bg-[var(--color-primary)]/10 transition-colors border border-[#e2e8f0] group-hover:border-transparent">
                {file.icon}
              </div>
              <span className="bg-[#f8fafc] text-[#1e293b] text-xs font-bold px-4 py-1.5 rounded-full border border-[#e2e8f0]">{file.category}</span>
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2 leading-tight flex-1 group-hover:text-[var(--color-primary)] transition-colors">{file.title}</h3>
            <p className="text-[#475569] text-sm mb-8 flex items-center gap-2 font-medium">
              {file.type} • {file.size}
            </p>
            
            <button className="w-full flex justify-center items-center gap-2 bg-[#f8fafc] text-[#1e293b] font-bold py-4 rounded-2xl border border-[#e2e8f0] group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-transparent transition-all cursor-pointer shadow-sm active:scale-95">
              <Download size={18} /> Download Now
            </button>
          </div>
        ))}
      </div>
 
      <div className="mt-20 bg-blue-50 border-2 border-blue-100 p-12 rounded-[4rem] text-center shadow-2xl shadow-blue-900/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 blur-3xl rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100/50 blur-3xl rounded-full -ml-32 -mb-32"></div>
        <h3 className="text-4xl font-black mb-6 text-slate-900 relative z-10">Need Specific Material?</h3>
        <p className="text-xl mb-10 text-slate-600 max-w-2xl mx-auto font-medium relative z-10">
          If you are looking for specific test preparation material that is not listed above, let us know and we will upload it for the community.
        </p>
        <Link href="/contact" className="inline-block relative z-10">
          <button className="bg-blue-600 text-white px-12 py-5 rounded-[2rem] font-black hover:bg-blue-700 transition-all text-lg cursor-pointer shadow-xl shadow-blue-500/20 active:scale-95">
            Request Material
          </button>
        </Link>
      </div>
    </div>
  )
}
