"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, Save, Bell, Edit, Calendar } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  desc: string
}

const INITIAL_NEWS: NewsItem[] = [
  { id: "1", title: "New Policy on Minimum Wage", category: "Policy", date: "16-03-2026", desc: "The provincial governments are reviewing the current minimum wage policies in light of recent economic changes." },
  { id: "2", title: "Federal Government Mega Hiring Drive", category: "Govt Jobs", date: "14-03-2026", desc: "The Federal Government is preparing to announce over 500+ vacancies across various ministries." },
  { id: "3", title: "Tech Industry Remote Drive 2026", category: "Private Sector", date: "10-03-2026", desc: "Several top IT firms in Pakistan are collaborating for a massive remote hiring initiative." },
  { id: "4", title: "Educators Recruitment Drive", category: "Education", date: "05-03-2026", desc: "The anticipated educators recruitment drive across the province is currently pending financial approval." },
]

export default function AdminUpcomingPage() {
  const [newsList, setNewsList] = useState<NewsItem[]>(INITIAL_NEWS)
  const [editId, setEditId] = useState<string | null>(null)
  const [form, setForm] = useState({ title: "", category: "", date: "", desc: "" })

  const handleAdd = () => {
    if (!form.title || !form.desc) return alert("Title and description are required.")
    const newItem: NewsItem = {
      id: Date.now().toString(),
      title: form.title,
      category: form.category || "General",
      date: formatDate(form.date || new Date()),
      desc: form.desc,
    }
    setNewsList([newItem, ...newsList])
    setForm({ title: "", category: "", date: "", desc: "" })
  }

  const handleUpdate = () => {
    if (!editId) return
    setNewsList(newsList.map(n => n.id === editId ? { ...n, ...form } : n))
    setEditId(null)
    setForm({ title: "", category: "", date: "", desc: "" })
  }

  const handleDelete = (id: string) => {
    if (confirm("Delete this news item?")) {
      setNewsList(newsList.filter(n => n.id !== id))
    }
  }

  const startEdit = (item: NewsItem) => {
    setEditId(item.id)
    setForm({ title: item.title, category: item.category, date: item.date, desc: item.desc })
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Upcoming <span className="text-blue-600">News</span></h1>
        <p className="text-slate-500 font-medium">Add, edit, and manage upcoming job announcements and news updates.</p>
      </div>

      {/* Add / Edit Form */}
      <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-500"></div>
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
          <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
            <div className="h-8 w-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
              <Bell size={18} />
            </div>
            {editId ? "Edit News Item" : "Add New Update"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Title</label>
              <Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Federal Hiring Drive 2026" className="rounded-2xl h-14" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Category</label>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
                  <option value="">Select...</option>
                  <option value="Govt Jobs">Govt Jobs</option>
                  <option value="Policy">Policy</option>
                  <option value="Private Sector">Private Sector</option>
                  <option value="Education">Education</option>
                  <option value="General">General</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Date</label>
                <Input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="rounded-2xl h-14" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Description</label>
            <textarea value={form.desc} onChange={e => setForm({ ...form, desc: e.target.value })} rows={4} placeholder="Brief summary of the news item..." className="w-full rounded-[2rem] border border-slate-200 px-6 py-4 font-bold text-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none" />
          </div>
          <div className="flex gap-4">
            <Button onClick={editId ? handleUpdate : handleAdd} className="h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black shadow-xl shadow-blue-500/20 gap-3">
              {editId ? <><Save size={18} /> Update News</> : <><Plus size={18} /> Add News</>}
            </Button>
            {editId && (
              <Button variant="outline" onClick={() => { setEditId(null); setForm({ title: "", category: "", date: "", desc: "" }) }} className="h-14 px-8 rounded-2xl font-black">
                Cancel
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Existing News List */}
      <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Title</th>
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Category</th>
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Date</th>
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {newsList.map((item) => (
                <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-all group">
                  <td className="p-6">
                    <p className="font-bold text-slate-800">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">{item.desc}</p>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-black uppercase">{item.category}</span>
                  </td>
                  <td className="p-6">
                    <span className="text-xs font-bold text-slate-400 flex items-center gap-2"><Calendar size={14} />{item.date}</span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Button variant="ghost" size="icon" onClick={() => startEdit(item)} className="h-10 w-10 rounded-xl text-slate-300 hover:text-blue-500 hover:bg-blue-50"><Edit size={18} /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)} className="h-10 w-10 rounded-xl text-slate-300 hover:text-rose-500 hover:bg-rose-50"><Trash2 size={18} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
              {newsList.length === 0 && (
                <tr><td colSpan={4} className="p-12 text-center text-slate-400 font-medium italic">No news items. Add one above to get started.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
