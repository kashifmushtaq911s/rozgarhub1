import RegisterForm from "@/components/auth/RegisterForm"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Join the Hub | Rozgarhub",
  description: "Create your elite account on Rozgarhub and access advanced career tools.",
}

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center p-6 bg-[#f8fafc]/50">
      <RegisterForm />
    </div>
  )
}
