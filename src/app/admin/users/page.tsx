"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Search, Filter, ShieldCheck, UserMinus, Plus, Mail, Loader2, X, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { getUsers, registerAdmin } from "@/actions/admin"
import { formatDate } from "@/lib/utils"

interface User {
  id: string
  full_name: string
  email: string
  is_admin: boolean
  role?: string
  created_at: string
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [registerLoading, setRegisterLoading] = useState(false)

  const fetchUsers = async () => {
    setLoading(true)
    const result = await getUsers()
    if (result.success) {
      setUsers(result.data || [])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setRegisterLoading(true)
    const formData = new FormData(e.currentTarget)
    const result = await registerAdmin(formData)
    if (result.success) {
      alert("New Admin registered successfully.")
      setIsModalOpen(false)
      fetchUsers()
    } else {
      alert("Registration failed: " + result.error)
    }
    setRegisterLoading(false)
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">User <span className="text-blue-600">Directory</span></h1>
          <p className="text-slate-500 font-medium">Monitor and regulate access control for the platform.</p>
        </div>
        <div className="flex gap-4">
           <Button variant="outline" className="h-14 px-8 rounded-2xl border-slate-200 text-slate-500 font-black hover:bg-slate-50 transition-all uppercase tracking-widest text-[10px]">
              Export CSV
           </Button>
           <Button 
            onClick={() => setIsModalOpen(true)}
            className="h-14 px-8 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black shadow-xl shadow-blue-500/20 gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
           >
              <Plus size={20} /> Register New Admin
           </Button>
        </div>
      </div>

      <Card className="rounded-[2.5rem] border-none shadow-xl shadow-slate-200/60 bg-white overflow-hidden">
        <CardContent className="p-8 flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex items-center bg-slate-50 rounded-2xl px-6 border border-slate-100 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100 transition-all h-14 group">
            <Search className="text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, email or ID..." 
              className="w-full bg-transparent border-none focus:outline-none text-sm font-bold text-slate-700 placeholder:text-slate-400 ml-4"
            />
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="h-14 px-6 rounded-2xl border-slate-100 bg-slate-50 text-slate-500 font-bold hover:bg-white hover:border-blue-200 hover:text-blue-600 transition-all gap-2">
              <Filter size={18} /> Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-[2.5rem] border-none shadow-2xl shadow-slate-200/50 overflow-hidden bg-white">
        <div className="overflow-x-auto overflow-y-auto max-h-[600px] custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-6 font-black text-[10px] text-slate-400 uppercase tracking-widest">Full Name</th>
                <th className="px-8 py-6 font-black text-[10px] text-slate-400 uppercase tracking-widest">Email Address</th>
                <th className="px-8 py-6 font-black text-[10px] text-slate-400 uppercase tracking-widest text-center">Role Status</th>
                <th className="px-8 py-6 font-black text-[10px] text-slate-400 uppercase tracking-widest">Join Date</th>
                <th className="px-8 py-6 font-black text-[10px] text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-24 text-center">
                    <Loader2 size={40} className="mx-auto text-blue-600 animate-spin mb-4" />
                    <p className="font-bold text-slate-500">Retrieving system accounts...</p>
                  </td>
                </tr>
              ) : users.length > 0 ? (
                users.map((u) => (
                  <tr key={u.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-all group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-blue-600 font-bold shadow-inner">
                          {u.full_name?.charAt(0) || u.email?.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-black text-slate-900 uppercase tracking-tight">{u.full_name || "N/A"}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm font-bold text-slate-500">{u.email}</td>
                    <td className="px-8 py-6 text-center">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                        u.is_admin 
                        ? "bg-blue-50 text-blue-600 border-blue-100" 
                        : "bg-blue-50 text-blue-600 border-blue-100"
                      }`}>
                        {u.role || (u.is_admin ? "Admin" : "Job Seeker")}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-xs font-bold text-slate-400">{formatDate(u.created_at)}</td>
                    <td className="px-8 py-6 text-right">
                       <Button variant="ghost" size="icon" className="h-10 w-10 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-xl">
                          <UserMinus size={18} />
                       </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                   <td colSpan={5} className="p-24 text-center">
                      <div className="h-24 w-24 bg-slate-50 rounded-[2.5rem] flex items-center justify-center text-slate-200 border border-slate-100 mx-auto mb-6 shadow-inner">
                        <Users size={48} className="opacity-40" />
                      </div>
                      <h3 className="text-xl font-black text-slate-900">Directory Undetected</h3>
                      <p className="text-slate-400 font-medium max-w-xs mx-auto mt-2">No user accounts found. Register a new administrator to begin platform operations.</p>
                   </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Register Admin Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white w-full max-w-xl rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 animate-slide-up">
            <div className="p-10 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">Register New Admin</h3>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Platform Core Access</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)} className="rounded-2xl h-12 w-12 text-slate-400 hover:bg-slate-50">
                <X size={24} />
              </Button>
            </div>
            
            <form onSubmit={handleRegister} className="p-10 space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Full Admin Name</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      name="fullName" 
                      required 
                      className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-bold text-slate-700 placeholder:text-slate-400"
                      placeholder="e.g. Adnan Ahmad"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Work Email Identity</label>
                  <div className="relative">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      name="email" 
                      type="email" 
                      required 
                      className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-bold text-slate-700 placeholder:text-slate-400"
                      placeholder="admin@rozgarhub.pk"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Specialized Role</label>
                    <select name="role" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-black text-slate-600 appearance-none cursor-pointer">
                      <option value="Super Admin">Super Admin</option>
                      <option value="Moderator">Moderator</option>
                      <option value="Content Editor">Content Editor</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500 ml-1">Access Password</label>
                    <div className="relative">
                      <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        name="password" 
                        type="password" 
                        required 
                        className="w-full h-14 pl-14 pr-6 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-bold text-slate-700" 
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50 flex gap-4">
                <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)} className="flex-1 h-14 rounded-2xl font-black text-slate-400 hover:bg-slate-50 uppercase tracking-widest text-[11px]">Cancel Mission</Button>
                <Button 
                  disabled={registerLoading}
                  className="flex-[2] h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black shadow-xl shadow-blue-500/20 gap-3 transition-all active:scale-95"
                >
                  {registerLoading ? <Loader2 className="animate-spin" size={20} /> : <ShieldCheck size={20} />}
                  Complete Registration
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
