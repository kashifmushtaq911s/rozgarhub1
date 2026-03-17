import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, Globe, Shield, Bell, Save, Sparkles } from "lucide-react"

export default function AdminSettingsPage() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">System <span className="text-indigo-600">Preferences</span></h1>
          <p className="text-slate-500 font-medium">Fine-tune the platform core configurations and SEO behavior.</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-100 shadow-sm">
          <Sparkles size={14} className="animate-pulse" /> All Systems Nominal
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
            <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
               <div className="h-8 w-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center">
                  <Globe size={18} />
               </div>
               Identity & Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Platform Brand Name</label>
              <Input defaultValue="Rozgarhub" className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-indigo-100 font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Universal Support Email</label>
              <Input defaultValue="support@rozgarhub.pk" className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-indigo-100 font-bold" />
            </div>
            <div className="space-y-3">
               <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Official Contact Line</label>
               <Input defaultValue="+92 308 8636811" className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-indigo-100 font-bold" />
            </div>
            <Button className="h-14 w-full rounded-2xl bg-slate-900 hover:bg-black text-white font-black shadow-xl gap-3 transition-all">
               <Save size={18} /> Cache Global Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
            <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
               <div className="h-8 w-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
                  <Shield size={18} />
               </div>
               SEO & Visibility
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Global Meta Briefing</label>
              <textarea 
                className="w-full min-h-[140px] rounded-[2rem] border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all shadow-inner resize-none"
                defaultValue="Find your dream job in Pakistan. Build your CV, apply to jobs, and get hired. The ultimate hub for career growth."
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Social Handle (Twitter)</label>
              <Input defaultValue="@rozgarhub_pk" className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-indigo-100 font-bold" />
            </div>
            <Button className="h-14 w-full rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black shadow-xl gap-3 transition-all">
               <Sparkles size={18} /> Update Indexing Logic
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
