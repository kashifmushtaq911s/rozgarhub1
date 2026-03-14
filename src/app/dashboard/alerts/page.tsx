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
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Job Alerts</h1>
          <p className="text-[var(--color-muted-foreground)] text-sm">Get notified when new jobs match your preferences.</p>
        </div>
        <Button className="gap-2 rounded-xl">
          <Plus size={16} /> Create Alert
        </Button>
      </div>
      
      <Card className="rounded-2xl border-[var(--color-border)] shadow-sm mb-8">
        <CardContent className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-primary)] flex items-center gap-2">
            <Bell size={20} /> Create New Alert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Keywords / Job Title</label>
              <Input placeholder="e.g. Frontend Developer" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Location / Work Mode</label>
              <Input placeholder="e.g. Karachi or Remote" />
            </div>
            <div className="flex items-end">
              <Button className="w-full h-10 rounded-xl">Save Alert</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-xl font-semibold mb-4">Your Active Alerts ({alerts.length})</h2>
      <div className="space-y-4">
        {alerts.map((alert, i) => (
          <Card key={i} className={`rounded-xl border-[var(--color-border)] shadow-sm transition-all ${alert.enabled ? '' : 'opacity-60'}`}>
            <CardContent className="p-4 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${alert.enabled ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]' : 'bg-[var(--color-muted)] text-[var(--color-muted-foreground)]'}`}>
                  <Bell size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{alert.title}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-[var(--color-muted-foreground)] mt-1 font-medium">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {alert.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} /> {alert.frequency} matches: <strong className="text-[var(--color-foreground)]">{alert.matches}</strong></span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                 <div className="flex items-center mr-4">
                    <label className="text-sm text-[var(--color-muted-foreground)] mr-2 cursor-pointer">{alert.enabled ? 'Active' : 'Paused'}</label>
                    <div className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-colors ${alert.enabled ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-border)]'}`}>
                      <div className={`w-3 h-3 rounded-full bg-white transition-transform ${alert.enabled ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                 </div>
                 <Button variant="ghost" size="icon" className="text-[var(--color-muted-foreground)]"><Settings2 size={18} /></Button>
                 <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50"><Trash2 size={18} /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
