"use client"

import { Card, CardContent } from "@/components/ui/card"
import { FileText, Sparkles, Inbox } from "lucide-react"

export default function AdminApplicationsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Application <span className="text-blue-600">Archive</span></h1>
        <p className="text-slate-500 font-medium text-lg">Central hub for talent submissions and recruitment tracking.</p>
      </div>

      <Card className="rounded-[3rem] border-none shadow-2xl shadow-slate-200/50 bg-white overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-500"></div>
        <CardContent className="p-24 flex flex-col items-center justify-center text-center">
           <div className="h-24 w-24 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2rem] flex items-center justify-center text-slate-300 mb-8 border border-slate-200 rotate-3 shadow-inner">
             <Inbox size={48} />
           </div>
           
           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
              <Sparkles size={14} className="text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Pending Integration</span>
           </div>

           <h2 className="text-2xl font-black text-slate-800 mb-4 tracking-tight">Intelligence Vault Empty</h2>
           <p className="text-slate-500 font-medium max-w-sm mb-10 leading-relaxed">
             Our neural engines are ready to process incoming applications. Once candidates start applying, their professional profiles will appear here for your review.
           </p>
           
           <div className="h-1.5 w-48 bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-blue-500 animate-[shimmer_2s_infinite]"></div>
           </div>
        </CardContent>
      </Card>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  )
}
