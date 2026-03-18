"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Globe, Shield, Save, Sparkles, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import { getSiteSettings, updateSiteSettings } from "@/actions/settings"

export default function AdminSettingsPage() {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [settings, setSettings] = useState({
    site_name: "",
    support_email: "",
    contact_number: "",
    meta_description: "",
    twitter_handle: ""
  })

  useEffect(() => {
    async function loadSettings() {
      const res = await getSiteSettings()
      if (res.success && res.data) {
        setSettings(res.data as any)
      }
      setLoading(false)
    }
    loadSettings()
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const formData = new FormData()
    formData.append("site_name", settings.site_name)
    formData.append("support_email", settings.support_email)
    formData.append("contact_number", settings.contact_number)
    formData.append("meta_description", settings.meta_description)
    formData.append("twitter_handle", settings.twitter_handle)

    const res = await updateSiteSettings(formData)
    if (res.success) {
      alert("Settings successfully synchronized.")
    } else {
      alert("Failed: " + res.error)
    }
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    )
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">System <span className="text-blue-600">Preferences</span></h1>
          <p className="text-slate-500 font-medium">Fine-tune the platform core configurations and SEO behavior.</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-2xl border border-blue-100 shadow-sm">
          <Sparkles size={14} className={saving ? "animate-spin" : "animate-pulse"} /> {saving ? "Synchronizing..." : "All Systems Nominal"}
        </div>
      </div>
      
      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-400"></div>
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
            <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
               <div className="h-8 w-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                  <Globe size={18} />
               </div>
               Identity & Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Platform Brand Name</label>
              <Input 
                value={settings.site_name} 
                onChange={e => setSettings({...settings, site_name: e.target.value})}
                className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold" 
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Universal Support Email</label>
              <Input 
                value={settings.support_email} 
                onChange={e => setSettings({...settings, support_email: e.target.value})}
                className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold" 
              />
            </div>
            <div className="space-y-3">
               <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Official Contact Line</label>
               <Input 
                value={settings.contact_number} 
                onChange={e => setSettings({...settings, contact_number: e.target.value})}
                className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold" 
              />
            </div>
            <Button type="submit" disabled={saving} className="h-14 w-full rounded-2xl bg-slate-900 hover:bg-black text-white font-black shadow-xl gap-3 transition-all">
               {saving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} Cache Global Changes
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-500"></div>
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
            <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
               <div className="h-8 w-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
                  <Shield size={18} />
               </div>
               SEO & Visibility
            </CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Global Meta Briefing</label>
              <textarea 
                className="w-full min-h-[140px] rounded-[2rem] border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all shadow-inner resize-none"
                value={settings.meta_description}
                onChange={e => setSettings({...settings, meta_description: e.target.value})}
              />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Social Handle (Twitter)</label>
              <Input 
                value={settings.twitter_handle} 
                onChange={e => setSettings({...settings, twitter_handle: e.target.value})}
                className="rounded-2xl h-14 border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold" 
              />
            </div>
            <Button type="submit" disabled={saving} className="h-14 w-full rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black shadow-xl gap-3 transition-all">
               {saving ? <Loader2 className="animate-spin" size={18} /> : <Sparkles size={18} />} Update Indexing Logic
            </Button>
          </CardContent>
        </Card>
      </form>
    </div>
  )
}
