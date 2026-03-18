"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BriefcaseBusiness, Mail, ShieldCheck, ArrowRight } from "lucide-react"

interface CVBuilderAuthWallProps {
  onSignIn: (email: string) => void
}

export default function CVBuilderAuthWall({ onSignIn }: CVBuilderAuthWallProps) {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError("Email address is required")
      return
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email address")
      return
    }
    
    setIsLoading(true)
    // Simulate a short auth delay
    setTimeout(() => {
      onSignIn(email)
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="flex-1 flex items-center justify-center py-20 animate-fade-in px-4">
      <div className="max-w-md w-full bg-white dark:bg-[#1a1d28] rounded-[2.5rem] border border-[var(--color-border)] shadow-2xl shadow-blue-500/10 overflow-hidden">
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="h-16 w-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20 mb-6">
              <BriefcaseBusiness size={32} />
            </div>
            <h2 className="text-3xl font-extrabold text-[var(--color-foreground)] tracking-tight mb-3">Welcome to Rozgarhub</h2>
            <p className="text-[var(--color-muted-foreground)] text-sm leading-relaxed">
              Unlock our premium CV builder and templates <br className="hidden md:block" />
              by providing your Google email address below.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-muted-foreground)] ml-1">
                Google Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:text-[var(--color-primary)] transition-colors">
                  <Mail size={18} />
                </div>
                <Input 
                  type="email" 
                  placeholder="name@gmail.com" 
                  className="pl-12 h-14 rounded-2xl border-[var(--color-border)] bg-[#f8faff] focus:bg-white focus:ring-[var(--color-primary)]/10 transition-all text-base"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError("")
                  }}
                />
              </div>
              {error && <p className="text-xs text-red-500 font-medium ml-1">{error}</p>}
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-lg shadow-blue-500/20 text-base font-bold gap-3 group"
              disabled={isLoading}
            >
              {isLoading ? (
                "Verifying..."
              ) : (
                <>
                  Build My CV
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          {/* Alternative */}
          <div className="mt-8 flex items-center justify-center gap-3 py-4 border-t border-[var(--color-border)]">
             <div className="flex h-10 w-full items-center justify-center border border-[var(--color-border)] rounded-2xl gap-2 hover:bg-[#f8faff] cursor-pointer transition-colors text-sm font-medium">
               <svg width="18" height="18" viewBox="0 0 18 18">
                 <path fill="#4285F4" d="M17.64 9.2c0-.63-.06-1.25-.16-1.84H9v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z"/>
                 <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.83.86-3.04.86-2.34 0-4.33-1.58-5.04-3.7H.9V12.8A8.99 8.99 0 0 0 9 18z"/>
                 <path fill="#FBBC05" d="M3.96 10.72A5.4 5.4 0 0 1 3.6 9c0-.6.1-1.18.27-1.72V5.01H.9a8.99 8.99 0 0 0 0 7.98l3.06-2.27z"/>
                 <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.34L15 2.35A8.96 8.96 0 0 0 9 0 8.99 8.99 0 0 0 .9 5.01l3.06 2.27c.71-2.12 2.7-3.7 5.04-3.7z"/>
               </svg>
               Continue with Google
             </div>
          </div>

          {/* Footer Security */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[var(--color-muted-foreground)]">
            <ShieldCheck size={14} className="text-blue-500" />
            <span>Secure & Private • 100% Free Service</span>
          </div>
        </div>
      </div>
    </div>
  )
}
