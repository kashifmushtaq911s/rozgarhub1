import LoginForm from "@/components/auth/LoginForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Welcome Back | Rozgarhub",
  description: "Sign in to your Rozgarhub account to continue your career journey.",
}

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center p-6 bg-[#f8fafc]/50">
      <LoginForm />
    </div>
  )
}
