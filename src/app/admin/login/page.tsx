"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShieldCheck, Lock, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simple authentication logic for the admin panel
    // In a production app, this would verify against a database
    if (email === "admin@rozgarhub.pk" && password === "admin123") {
      // Set a cookie or local storage to simulate a session
      document.cookie = "admin_session=true; path=/; max-age=3600"
      
      setTimeout(() => {
        setLoading(false)
        router.push("/admin")
      }, 1000)
    } else {
      setTimeout(() => {
        setLoading(false)
        setError("Invalid email or password. Please use admin@rozgarhub.pk / admin123")
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-secondary)] flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-primary)] text-white shadow-lg shadow-green-500/20 mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">Admin Login</h1>
          <p className="text-[var(--color-muted-foreground)] mt-2">Access the Rozgarhub control panel</p>
        </div>

        <Card className="rounded-3xl border-[var(--color-border)] shadow-xl bg-white overflow-hidden">
          <CardContent className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Mail size={16} className="text-[var(--color-primary)]" /> Email Address
                </label>
                <Input 
                  type="email" 
                  placeholder="admin@rozgarhub.pk" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/10"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold flex items-center gap-2">
                  <Lock size={16} className="text-[var(--color-primary)]" /> Password
                </label>
                <Input 
                  type="password" 
                  placeholder="••••••••" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)]/10"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-xs font-medium rounded-xl animate-shake">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-12 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-lg shadow-lg shadow-green-500/10 gap-2"
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>Sign In to Dashboard <ArrowRight size={18} /></>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <p className="text-center mt-8 text-sm text-[var(--color-muted-foreground)]">
          <Link href="/" className="hover:text-[var(--color-primary)] transition-colors underline underline-offset-4">Return to Public Site</Link>
        </p>
      </div>
    </div>
  )
}
