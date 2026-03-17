"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Trash2, Save, BookOpen, Edit, FileText, FileBadge, Download } from "lucide-react"

interface MaterialItem {
  id: string
  title: string
  category: string
  type: string
  size: string
  downloadUrl: string
}

const INITIAL_MATERIALS: MaterialItem[] = [
  { id: "1", title: "General Knowledge MCQs 2026", category: "General", type: "PDF Document", size: "2.4 MB", downloadUrl: "#" },
  { id: "2", title: "Testing Service Past Papers Compilation", category: "Past Papers", type: "Word Document (.docx)", size: "1.8 MB", downloadUrl: "#" },
  { id: "3", title: "Everyday Science Notes", category: "Science", type: "PDF Document", size: "3.1 MB", downloadUrl: "#" },
  { id: "4", title: "Federal Intelligence Test Guide", category: "Federal Tests", type: "Word Document (.docx)", size: "1.2 MB", downloadUrl: "#" },
  { id: "5", title: "Islamic Studies Complete Review", category: "Islamiat", type: "PDF Document", size: "4.5 MB", downloadUrl: "#" },
  { id: "6", title: "Computer Science Provincial Questions", category: "IT & Tech", type: "PDF Document", size: "2.0 MB", downloadUrl: "#" },
]

export default function AdminStudyMaterialPage() {
  const [materials, setMaterials] = useState<MaterialItem[]>(INITIAL_MATERIALS)
  const [editId, setEditId] = useState<string | null>(null)
  const [form, setForm] = useState({ title: "", category: "", type: "PDF Document", size: "", downloadUrl: "" })

  const handleAdd = () => {
    if (!form.title) return alert("Title is required.")
    const newItem: MaterialItem = {
      id: Date.now().toString(),
      title: form.title,
      category: form.category || "General",
      type: form.type,
      size: form.size || "N/A",
      downloadUrl: form.downloadUrl || "#",
    }
    setMaterials([newItem, ...materials])
    setForm({ title: "", category: "", type: "PDF Document", size: "", downloadUrl: "" })
  }

  const handleUpdate = () => {
    if (!editId) return
    setMaterials(materials.map(m => m.id === editId ? { ...m, ...form } : m))
    setEditId(null)
    setForm({ title: "", category: "", type: "PDF Document", size: "", downloadUrl: "" })
  }

  const handleDelete = (id: string) => {
    if (confirm("Delete this study material?")) {
      setMaterials(materials.filter(m => m.id !== id))
    }
  }

  const startEdit = (item: MaterialItem) => {
    setEditId(item.id)
    setForm({ title: item.title, category: item.category, type: item.type, size: item.size, downloadUrl: item.downloadUrl })
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Study <span className="text-blue-600">Material</span></h1>
        <p className="text-slate-500 font-medium">Upload and manage study resources, MCQs, past papers, and preparation guides.</p>
      </div>

      {/* Add/Edit Form */}
      <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
        <CardHeader className="bg-slate-50/50 border-b border-slate-100 p-8">
          <CardTitle className="text-xl font-black flex items-center gap-3 text-slate-800">
            <div className="h-8 w-8 rounded-lg bg-blue-500 text-white flex items-center justify-center">
              <BookOpen size={18} />
            </div>
            {editId ? "Edit Material" : "Upload New Material"}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Title</label>
              <Input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. General Knowledge MCQs 2026" className="rounded-2xl h-14" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Category</label>
              <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
                <option value="">Select...</option>
                <option value="General">General</option>
                <option value="Past Papers">Past Papers</option>
                <option value="Science">Science</option>
                <option value="Federal Tests">Federal Tests</option>
                <option value="Islamiat">Islamiat</option>
                <option value="IT & Tech">IT & Tech</option>
                <option value="English">English</option>
                <option value="Mathematics">Mathematics</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">File Type</label>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} className="flex h-14 w-full rounded-2xl border border-slate-200 px-5 font-bold">
                <option value="PDF Document">PDF Document</option>
                <option value="Word Document (.docx)">Word Document (.docx)</option>
                <option value="Excel Spreadsheet">Excel Spreadsheet</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">File Size</label>
              <Input value={form.size} onChange={e => setForm({ ...form, size: e.target.value })} placeholder="e.g. 2.4 MB" className="rounded-2xl h-14" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Download URL</label>
              <Input value={form.downloadUrl} onChange={e => setForm({ ...form, downloadUrl: e.target.value })} placeholder="https://drive.google.com/..." className="rounded-2xl h-14" />
            </div>
          </div>
          <div className="flex gap-4">
            <Button onClick={editId ? handleUpdate : handleAdd} className="h-14 px-10 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black shadow-xl shadow-blue-500/20 gap-3">
              {editId ? <><Save size={18} /> Update Material</> : <><Plus size={18} /> Add Material</>}
            </Button>
            {editId && (
              <Button variant="outline" onClick={() => { setEditId(null); setForm({ title: "", category: "", type: "PDF Document", size: "", downloadUrl: "" }) }} className="h-14 px-8 rounded-2xl font-black">
                Cancel
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Existing Materials List */}
      <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Material</th>
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Category</th>
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em]">Type / Size</th>
                <th className="p-6 font-black text-[10px] text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((item) => (
                <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-all group">
                  <td className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                        {item.type.includes("PDF") ? <FileText size={20} className="text-red-500" /> : <FileBadge size={20} className="text-blue-500" />}
                      </div>
                      <p className="font-bold text-slate-800">{item.title}</p>
                    </div>
                  </td>
                  <td className="p-6">
                    <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-[10px] font-black uppercase">{item.category}</span>
                  </td>
                  <td className="p-6">
                    <span className="text-xs font-bold text-slate-400">{item.type} • {item.size}</span>
                  </td>
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <Button variant="ghost" size="icon" onClick={() => startEdit(item)} className="h-10 w-10 rounded-xl text-slate-300 hover:text-blue-500 hover:bg-blue-50"><Edit size={18} /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(item.id)} className="h-10 w-10 rounded-xl text-slate-300 hover:text-rose-500 hover:bg-rose-50"><Trash2 size={18} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
              {materials.length === 0 && (
                <tr><td colSpan={4} className="p-12 text-center text-slate-400 font-medium italic">No materials uploaded. Add one above to get started.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
