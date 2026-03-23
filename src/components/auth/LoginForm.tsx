"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, LogIn, Mail, Lock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
})

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    setLoading(true)
    setError(null)
    
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (authError) throw authError

      router.push("/")
      router.refresh()
    } catch (err: any) {
      setError(err.message || "Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md border-none shadow-2xl bg-white/95 backdrop-blur-md rounded-[2.5rem] overflow-hidden group">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 group-hover:h-3"></div>
      <CardHeader className="p-10 pb-4 text-center">
        <CardTitle className="text-4xl font-black tracking-tighter text-slate-800 flex flex-col items-center gap-2">
          WELCOME <span className="text-blue-600">BACK</span>
        </CardTitle>
        <CardDescription className="text-slate-500 font-medium pt-2">Access your elite career dashboard.</CardDescription>
      </CardHeader>
      
      <CardContent className="p-10 pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Mail size={18} />
                </div>
                <Input 
                  {...register("email")}
                  type="email"
                  placeholder="name@example.com"
                  className="pl-12 h-14 rounded-2xl border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold"
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 font-black ml-1 uppercase leading-none mt-1">{errors.email.message}</p>}
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Key</label>
                <Link href="/auth/reset-password" className="text-[10px] font-black uppercase text-blue-600 hover:underline">
                  Forgot?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={18} />
                </div>
                <Input 
                  {...register("password")}
                  type="password"
                  placeholder="••••••••"
                  className="pl-12 h-14 rounded-2xl border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold"
                />
              </div>
              {errors.password && <p className="text-xs text-red-500 font-black ml-1 uppercase leading-none mt-1">{errors.password.message}</p>}
            </div>
          </div>

          {error && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-[11px] font-black uppercase leading-[1.4]">
              {error}
            </div>
          )}

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-16 rounded-[1.5rem] bg-slate-900 hover:bg-black text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-900/10 transition-all active:scale-95"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <><LogIn size={18} /> Secure Sign In</>}
          </Button>

          <div className="pt-4 text-center">
            <span className="text-slate-400 font-medium text-sm">New to the Hub? </span>
            <Link href="/auth/register" className="text-blue-600 font-black text-sm hover:underline tracking-tight">
              Create Account
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
