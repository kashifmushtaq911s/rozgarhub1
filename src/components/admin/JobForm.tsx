"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Save, Upload, Briefcase, MapPin, FileText } from "lucide-react"
import { useRouter } from "next/navigation"

import { JOB_CATEGORIES } from "@/data/departments"

const PAY_SCALES = [
  "N/A",
  "BS-01", "BS-02", "BS-03", "BS-04", "BS-05", "BS-06", "BS-07", "BS-08", "BS-09", "BS-10",
  "BS-11", "BS-12", "BS-13", "BS-14", "BS-15", "BS-16", "BS-17", "BS-18", "BS-19", "BS-20", "BS-21", "BS-22"
]

const PROVINCE_CITIES: Record<string, string[]> = {
  punjab: ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sialkot", "Bahawalpur", "Sargodha", "Sahiwal", "Rahim Yar Khan", "Sheikhupura", "Jhang", "Dera Ghazi Khan", "Gujrat", "Jhelum", "Kasur", "Okara", "Vehari", "Muzaffargarh", "Mianwali", "Chiniot", "Attock", "Hafizabad", "Khanewal", "Bhakkar", "Layyah", "Lodhran", "Narowal", "Pakpattan", "Toba Tek Singh", "Nankana Sahib", "Mandi Bahauddin", "Chakwal", "Khushab", "Rajanpur"].sort(),
  sindh: ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", "Mirpur Khas", "Jacobabad", "Shikarpur", "Khairpur", "Dadu", "Thatta", "Badin", "Tando Adam", "Tando Allahyar", "Umerkot", "Sanghar", "Ghotki", "Matiari", "Kashmore", "Jamshoro"].sort(),
  kpk: ["Peshawar", "Mardan", "Mingora", "Kohat", "Abbottabad", "Mansehra", "Nowshera", "Charsadda", "Swabi", "Bannu", "Dera Ismail Khan", "Haripur", "Lakki Marwat", "Tank", "Hangu", "Karak", "Battagram", "Buner", "Chitral", "Dir Lower", "Dir Upper", "Shangla", "Tor Ghar", "Kolai-Pallas"].sort(),
  balochistan: ["Quetta", "Turbat", "Khuzdar", "Hub", "Chaman", "Gwadar", "Sibi", "Zhob", "Loralai", "Pishin", "Nushki", "Kalat", "Mastung", "Dera Bugti", "Panjgur", "Jaffarabad", "Nasirabad", "Lasbela", "Bolan", "Awaran"].sort(),
  islamabad: ["Islamabad"].sort(),
  ajk: ["Muzaffarabad", "Mirpur", "Bhimber", "Kotli", "Rawalakot", "Bagh", "Pallandri", "Neelum", "Haveli", "Hattian Bala"].sort(),
  gb: ["Gilgit", "Skardu", "Chilas", "Ghizer", "Hunza", "Nagar", "Astore", "Ghanche", "Shigar", "Kharmang"].sort(),
}

interface JobFormProps {
  initialData?: any
  onSubmit: (formData: FormData) => Promise<{ success: boolean; error?: string }>
  isEditing?: boolean
}

export default function JobForm({ initialData, onSubmit, isEditing = false }: JobFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedProvince, setSelectedProvince] = useState(initialData?.province || "")
  const [logoPreview, setLogoPreview] = useState<string | null>(initialData?.logo_url || null)
  const [deadlineType, setDeadlineType] = useState<"date" | "relative">(
    initialData?.deadline?.includes("publication") ? "relative" : "date"
  )

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setLogoPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    
    if (deadlineType === "relative") {
      const customRelative = formData.get("deadline_custom")?.toString()
      if (customRelative) formData.set("deadline", customRelative)
    }
    
    const result = await onSubmit(formData)
    setLoading(false)
    
    if (result.success) {
      alert(isEditing ? "Listing updated successfully!" : "Job published successfully!")
      router.push("/admin/jobs")
    } else {
      alert("Error: " + result.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 pb-32">
      <Card className="rounded-[2.5rem] border-slate-200 shadow-xl shadow-slate-200/50 bg-white overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-indigo-500 to-emerald-500"></div>
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
          <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800 uppercase tracking-tighter">
            <div className="h-8 w-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center">
               <Briefcase size={18} />
            </div>
            Identification
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">title</label>
            <Input name="title" defaultValue={initialData?.title} required className="rounded-2xl h-14" />
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">company</label>
              <Input name="company" defaultValue={initialData?.company} required className="rounded-2xl h-14" />
            </div>
            <div className="space-y-3">
               <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">logo_url</label>
               <input type="file" name="logo_url" accept="image/*" className="hidden" id="logo-upload" onChange={handleLogoChange} />
               <label htmlFor="logo-upload" className="flex items-center gap-4 px-5 h-14 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50">
                 <div className="h-9 w-9 rounded-xl bg-slate-100 flex items-center justify-center overflow-hidden">
                   {logoPreview ? <img src={logoPreview} alt="" className="h-full w-full object-cover" /> : <Upload size={18} />}
                 </div>
                 <span className="text-[10px] font-black uppercase text-slate-500">Pick Logo</span>
               </label>
            </div>
          </div>
          
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">category</label>
            <select name="category" defaultValue={initialData?.category} required className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
              <option value="">Select Domain...</option>
              {JOB_CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">type</label>
            <select name="type" defaultValue={initialData?.type} required className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="remote">Remote</option>
              <option value="internship">Internship</option>
              <option value="government">Government</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">scale</label>
              <select name="scale" defaultValue={initialData?.scale} className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
                {PAY_SCALES.map(scale => <option key={scale} value={scale}>{scale}</option>)}
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">salary</label>
              <Input name="salary" defaultValue={initialData?.salary} className="rounded-2xl h-14" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[2.5rem] border-slate-200 shadow-xl shadow-slate-200/50 bg-white overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-emerald-500 to-blue-500"></div>
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
          <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
            <div className="h-8 w-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center">
               <MapPin size={18} />
            </div>
            Placement & Timeline
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">province</label>
            <select name="province" required className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold" value={selectedProvince} onChange={(e) => setSelectedProvince(e.target.value)}>
              <option value="">Select Region...</option>
              {Object.keys(PROVINCE_CITIES).map(p => <option key={p} value={p}>{p.toUpperCase()}</option>)}
            </select>
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">city</label>
            <select name="city" defaultValue={initialData?.city} required className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
              <option value="">Pick Location...</option>
              {selectedProvince && PROVINCE_CITIES[selectedProvince].map(city => <option key={city} value={city.toLowerCase()}>{city}</option>)}
            </select>
          </div>
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center justify-between mb-2">
               <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">deadline</label>
               <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button type="button" onClick={() => setDeadlineType("date")} className={`px-3 py-1.5 text-[10px] font-black rounded-lg ${deadlineType === "date" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400"}`}>FIXED</button>
                  <button type="button" onClick={() => setDeadlineType("relative")} className={`px-3 py-1.5 text-[10px] font-black rounded-lg ${deadlineType === "relative" ? "bg-white text-indigo-600 shadow-sm" : "text-slate-400"}`}>RELATIVE</button>
               </div>
            </div>
            {deadlineType === "date" ? (
              <Input name="deadline" type="date" defaultValue={initialData?.deadline?.match(/^\d{4}-\d{2}-\d{2}/) ? initialData.deadline : ""} required className="rounded-2xl h-14" />
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <select name="deadline" defaultValue={initialData?.deadline} required className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
                  <option value="Within 07 days of publication">Within 07 Days</option>
                  <option value="Within 15 days of publication">Within 15 Days</option>
                  <option value="Within 20 days of publication">Within 20 Days</option>
                  <option value="Within 30 days of publication">Within 30 Days</option>
                  <option value="Till Seats are Filled">Open Recruitment</option>
                </select>
                <Input name="deadline_custom" placeholder="e.g. 15 working days" className="rounded-2xl h-14" />
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[2.5rem] border-slate-200 shadow-xl shadow-slate-200/50 bg-white overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
          <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
            <div className="h-8 w-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
               <FileText size={18} />
            </div>
            Content Hub
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-8">
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">description</label>
            <textarea name="description" defaultValue={initialData?.description} required rows={8} className="w-full rounded-[2rem] border border-slate-200 px-6 py-6 font-bold text-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 resize-none" />
          </div>
          <div className="space-y-3">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">requirements</label>
            <textarea name="requirements" defaultValue={initialData?.requirements} rows={6} className="w-full rounded-[2rem] border border-slate-200 px-6 py-6 font-bold text-slate-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 resize-none" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Direct Website URL</label>
              <Input name="website_url" type="url" placeholder="https://..." defaultValue={initialData?.website_url} required className="rounded-2xl h-14" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Image URL Link</label>
              <Input name="image_url" type="url" placeholder="https://..." defaultValue={initialData?.image_url} className="rounded-2xl h-14" />
            </div>
            <div className="space-y-3 md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Application Link</label>
              <Input name="application_link" defaultValue={initialData?.application_link} className="rounded-2xl h-14" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-6">
        <Button variant="outline" type="button" onClick={() => router.back()} className="rounded-2xl px-10 h-16 font-black uppercase text-xs">Cancel</Button>
        <Button type="submit" disabled={loading} className="rounded-2xl px-12 h-16 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-black shadow-2xl uppercase text-xs">
          {loading ? <div className="h-6 w-6 border-4 border-white/20 border-t-white rounded-full animate-spin" /> : <><Save size={20} /> {isEditing ? "Update Job Listing" : "Post Job Listing"}</>}
        </Button>
      </div>
    </form>
  )
}
