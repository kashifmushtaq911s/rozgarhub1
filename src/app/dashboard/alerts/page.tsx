import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Plus, Settings2, Trash2, MapPin, Briefcase } from "lucide-react"

export default function JobAlertsPage() {
  const alerts = [
    { title: "Frontend Developer", location: "Lahore", frequency: "Daily", matches: 12, enabled: true },
    { title: "React Engineer", location: "Remote", frequency: "Weekly", matches: 45, enabled: true },
    { title: "UI/UX Designer", location: "Islamabad", frequency: "Daily", matches: 3, enabled: false },
  ]

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2 text-[#0f172a] tracking-tight">Job <span className="text-[var(--color-primary)]">Alerts</span></h1>
          <p className="text-[#64748b] font-medium">Get notified personally when new jobs match your elite professional preferences.</p>
        </div>
        <Button className="gap-3 rounded-2xl h-14 px-8 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] font-black transition-all shadow-lg shadow-blue-900/10">
          <Plus size={20} /> Create New Alert
        </Button>
      </div>
      
      <Card className="rounded-[2.5rem] border-[#e2e8f0] bg-white shadow-sm mb-12 overflow-hidden border-l-8 border-l-[var(--color-primary)]">
        <CardContent className="p-10">
          <h2 className="text-2xl font-black mb-8 text-[#0f172a] flex items-center gap-4">
            <div className="h-10 w-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center">
              <Bell size={22} className="animate-pulse-slow" />
            </div>
            Smart Alert Configuration
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Keywords / Job Title</label>
              <Input placeholder="e.g. Frontend Developer" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-[#64748b] ml-1">Location / Work Mode</label>
              <Input placeholder="e.g. Karachi or Remote" className="h-14 rounded-2xl border-[#e2e8f0] focus:ring-[var(--color-primary)]/20" />
            </div>
            <div className="flex items-end">
              <Button className="w-full h-14 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] font-black text-lg transition-all shadow-lg shadow-blue-900/10">Save Alert</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-[#0f172a] tracking-tight">Live Alerts <span className="text-[var(--color-primary)]/40 ml-2 font-black">{alerts.length}</span></h2>
        <div className="h-0.5 flex-1 mx-6 bg-[#e2e8f0]"></div>
      </div>

      <div className="space-y-6">
        {alerts.map((alert, i) => (
          <Card key={i} className={`group rounded-3xl border-[#e2e8f0] bg-white shadow-sm transition-all hover:shadow-xl hover:shadow-blue-900/5 ${alert.enabled ? '' : 'opacity-60 grayscale'}`}>
            <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center transition-all ${alert.enabled ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <Bell size={28} />
                </div>
                <div>
                  <h3 className="font-black text-xl text-[#0f172a] tracking-tight mb-2">{alert.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#64748b] font-bold">
                    <span className="flex items-center gap-2 uppercase tracking-wider text-[10px]"><MapPin size={14} className="text-[var(--color-primary)]" /> {alert.location}</span>
                    <span className="flex items-center gap-2 uppercase tracking-wider text-[10px]"><Briefcase size={14} className="text-[var(--color-primary)]" /> {alert.frequency} matches: <strong className="text-[#0f172a] text-xs px-2 py-0.5 bg-slate-100 rounded-lg">{alert.matches}</strong></span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-6 md:pt-0 border-t md:border-t-0 border-[#e2e8f0]">
                 <div className="flex items-center mr-6">
                    <label className="text-xs font-black uppercase tracking-widest text-[#64748b] mr-3 cursor-pointer">{alert.enabled ? 'Active' : 'Paused'}</label>
                    <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-all ${alert.enabled ? 'bg-[var(--color-primary)] ring-4 ring-blue-500/10' : 'bg-slate-200'}`}>
                      <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${alert.enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
                    </div>
                 </div>
                 <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl text-[#64748b] border-[#e2e8f0] hover:bg-neutral-50"><Settings2 size={20} /></Button>
                 <Button variant="outline" size="icon" className="h-12 w-12 rounded-xl text-red-500 border-[#e2e8f0] hover:bg-red-50 hover:border-red-100"><Trash2 size={20} /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {alerts.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-dashed border-[#e2e8f0]">
             <Bell size={48} className="mx-auto text-[#cbd5e1] mb-6" />
             <p className="text-xl font-bold text-[#64748b]">No active alerts found.</p>
             <p className="text-sm text-[#94a3b8] mt-2">Create an alert to stay ahead of the competition.</p>
          </div>
        )}
      </div>
    </div>
  )
}
