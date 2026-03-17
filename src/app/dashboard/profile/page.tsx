import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, UserCircle } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="animate-fade-in">
      <h1 className="text-4xl font-black mb-10 text-[#0f172a] tracking-tight">Profile <span className="text-[var(--color-primary)]">Settings</span></h1>
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/3 space-y-8">
          <Card className="rounded-[2.5rem] border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
            <CardContent className="p-8 text-center pt-12">
              <div className="mx-auto h-32 w-32 rounded-[2rem] bg-[#f8fafc] border border-[#e2e8f0] mb-6 flex items-center justify-center relative group overflow-hidden transition-all hover:border-[var(--color-primary)]/20 hover:scale-105">
                <UserCircle size={64} className="text-[#cbd5e1] group-hover:text-[var(--color-primary)] transition-colors" />
                <div className="absolute inset-0 bg-[var(--color-primary)]/80 hidden group-hover:flex flex-col items-center justify-center text-white cursor-pointer animate-fade-in">
                  <Upload size={24} className="mb-2" />
                  <span className="text-xs font-black uppercase tracking-widest">Upload Photo</span>
                </div>
              </div>
              <h2 className="text-2xl font-black text-[#0f172a]">John Doe</h2>
              <p className="text-[#64748b] font-bold mb-8 uppercase tracking-widest text-xs">Senior Frontend Developer</p>
              <Button variant="outline" className="w-full h-12 rounded-2xl border-[#e2e8f0] text-[#0f172a] font-bold hover:bg-neutral-50">View Public Profile</Button>
            </CardContent>
          </Card>
          
          <Card className="rounded-[2.5rem] border-[#e2e8f0] bg-white shadow-sm overflow-hidden border-t-8 border-t-red-500/10">
            <CardContent className="p-8">
              <h3 className="font-black text-[#0f172a] mb-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                Professional Resume
              </h3>
              <div className="flex items-center justify-between p-5 border border-[#e2e8f0] rounded-2xl bg-[#fcfdfe] mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/10 text-red-500 h-12 w-12 flex items-center justify-center rounded-xl">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0f172a]">John_Doe_CV.pdf</h4>
                    <p className="text-xs text-[#94a3b8] font-medium uppercase tracking-widest mt-1">Updated 15-03-2026</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full h-14 rounded-2xl gap-3 text-[var(--color-primary)] border-[#e2e8f0] hover:bg-[var(--color-primary)]/5 font-black transition-all">
                <Upload size={18} /> Update PDF Resume
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="w-full lg:w-2/3">
          <Card className="rounded-[2.5rem] border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
            <CardContent className="p-10">
              <h3 className="text-2xl font-black text-[#0f172a] mb-10 tracking-tight">Personal Details</h3>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">First Name</label>
                    <Input defaultValue="John" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Last Name</label>
                    <Input defaultValue="Doe" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Professional Email</label>
                    <Input type="email" defaultValue="john@example.com" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Phone Number</label>
                    <Input defaultValue="+92 300 0000000" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Headline / Role Specialist</label>
                    <Input defaultValue="Senior Frontend Developer" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Professional Biography</label>
                    <textarea 
                      className="w-full min-h-[160px] rounded-2xl border border-[#e2e8f0] bg-[#fafbfc] px-5 py-4 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/20 transition-all"
                      defaultValue="Passionate frontend developer with 5+ years of experience building scalable web applications using React and Next.js. Specialist in performance optimization and international design systems."
                    />
                  </div>
                </div>
                
                <div className="border-t border-[#e2e8f0] pt-10 mt-10 flex flex-col sm:flex-row justify-end gap-4">
                  <Button variant="outline" className="h-14 rounded-2xl px-10 border-[#e2e8f0] text-[#0f172a] font-bold hover:bg-neutral-50">Reset Changes</Button>
                  <Button className="h-14 rounded-2xl px-12 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] font-black transition-all shadow-lg shadow-blue-900/10">Save Profile</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
