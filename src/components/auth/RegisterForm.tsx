"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, UserPlus, Mail, Lock, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const registerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export default function RegisterForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  })

  async function onSubmit(data: z.infer<typeof registerSchema>) {
    setLoading(true)
    setError(null)
    
    try {
      // 1. Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            full_name: data.fullName,
          }
        }
      })

      if (authError) throw authError

      // 2. Sync to public.users table if auth succeeded
      if (authData.user) {
        const { error: dbError } = await supabase
          .from("users")
          .insert([
            {
              id: authData.user.id,
              email: data.email,
              full_name: data.fullName,
              role: "User",
              is_admin: false,
              created_at: new Date().toISOString()
            }
          ])
        
        // Note: Sometimes the table might not exist or triggers already handle it
        if (dbError) {
          console.warn("Error syncing user to DB, but auth succeeded:", dbError.message)
        }
      }

      setSuccess(true)
      setTimeout(() => {
        router.push("/auth/login")
      }, 3000)
    } catch (err: any) {
      setError(err.message || "An error occurred during registration")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <Card className="w-full max-w-md border-none shadow-2xl bg-white/95 backdrop-blur-md rounded-[2.5rem] overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>
        <CardContent className="p-10 text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 animate-bounce">
            <UserPlus size={40} />
          </div>
          <CardTitle className="text-3xl font-black tracking-tight text-slate-800 uppercase">Welcome on Board!</CardTitle>
          <CardDescription className="text-lg text-slate-600 font-medium">
            Account created successfully. Please check your email for the confirmation link to activate your access.
          </CardDescription>
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Redirecting to Login...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md border-none shadow-2xl bg-white/95 backdrop-blur-md rounded-[2.5rem] overflow-hidden group">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 group-hover:h-3"></div>
      <CardHeader className="p-10 pb-4 text-center">
        <CardTitle className="text-4xl font-black tracking-tighter text-slate-800 flex flex-col items-center gap-2">
          JOIN THE <span className="text-blue-600">HUB</span>
        </CardTitle>
        <CardDescription className="text-slate-500 font-medium pt-2">Create your account to unlock elite career tools.</CardDescription>
      </CardHeader>
      
      <CardContent className="p-10 pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <User size={18} />
                </div>
                <Input 
                  {...register("fullName")}
                  placeholder="Ali Ahmed"
                  className="pl-12 h-14 rounded-2xl border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold"
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-500 font-black ml-1 uppercase leading-none mt-1">{errors.fullName.message}</p>}
            </div>

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
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Security Key</label>
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

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Confirm Security Key</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                  <Lock size={18} />
                </div>
                <Input 
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="••••••••"
                  className="pl-12 h-14 rounded-2xl border-slate-200 focus:ring-4 focus:ring-blue-100 font-bold"
                />
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-500 font-black ml-1 uppercase leading-none mt-1">{errors.confirmPassword.message}</p>}
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
            className="w-full h-16 rounded-[1.5rem] bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-500/20 transition-all active:scale-95"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : "Create Account"}
          </Button>

          <div className="pt-4 text-center">
            <span className="text-slate-400 font-medium text-sm">Already have an account? </span>
            <Link href="/auth/login" className="text-blue-600 font-black text-sm hover:underline tracking-tight">
              Sign In
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
