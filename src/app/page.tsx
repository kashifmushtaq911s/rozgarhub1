"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Briefcase, FileText } from "lucide-react"
import Link from "next/link"

const PROVINCE_CITIES: Record<string, string[]> = {
  punjab: ["Lahore", "Faisalabad", "Rawalpindi", "Multan", "Gujranwala", "Sialkot", "Bahawalpur", "Sargodha", "Sahiwal", "Rahim Yar Khan", "Sheikhupura", "Jhang", "Dera Ghazi Khan", "Gujrat", "Jhelum", "Kasur", "Okara", "Vehari", "Muzaffargarh", "Mianwali", "Chiniot", "Attock", "Hafizabad", "Khanewal", "Bhakkar", "Layyah", "Lodhran", "Narowal", "Pakpattan", "Toba Tek Singh", "Nankana Sahib", "Mandi Bahauddin", "Chakwal", "Khushab", "Rajanpur"].sort(),
  sindh: ["Karachi", "Hyderabad", "Sukkur", "Larkana", "Nawabshah", "Mirpur Khas", "Jacobabad", "Shikarpur", "Khairpur", "Dadu", "Thatta", "Badin", "Tando Adam", "Tando Allahyar", "Umerkot", "Sanghar", "Ghotki", "Matiari", "Kashmore", "Jamshoro"].sort(),
  kpk: ["Peshawar", "Mardan", "Mingora", "Kohat", "Abbottabad", "Mansehra", "Nowshera", "Charsadda", "Swabi", "Bannu", "Dera Ismail Khan", "Haripur", "Lakki Marwat", "Tank", "Hangu", "Karak", "Battagram", "Buner", "Chitral", "Dir Lower", "Dir Upper", "Shangla", "Tor Ghar", "Kolai-Pallas"].sort(),
  balochistan: ["Quetta", "Turbat", "Khuzdar", "Hub", "Chaman", "Gwadar", "Sibi", "Zhob", "Loralai", "Pishin", "Nushki", "Kalat", "Mastung", "Dera Bugti", "Panjgur", "Jaffarabad", "Nasirabad", "Lasbela", "Bolan", "Awaran"].sort(),
  islamabad: ["Islamabad"].sort(),
  ajk: ["Muzaffarabad", "Mirpur", "Bhimber", "Kotli", "Rawalakot", "Bagh", "Pallandri", "Neelum", "Haveli", "Hattian Bala"].sort(),
  gb: ["Gilgit", "Skardu", "Chilas", "Ghizer", "Hunza", "Nagar", "Astore", "Ghanche", "Shigar", "Kharmang"].sort(),
}

export default function Home() {
  const [selectedProvince, setSelectedProvince] = useState<string>("")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-[var(--color-primary)]/5 to-transparent pointer-events-none"></div>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] bg-[var(--color-primary)]/5 blur-[120px] rounded-full -z-10"></div>
        
        <div className="container relative mx-auto px-4 sm:px-8 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-[#2d3748] text-balance">
            Find Your Dream Job <br className="hidden md:block" />
            in <span className="text-[var(--color-primary)]">Pakistan</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#6b7280] mb-10">
            Connect with top employers, build a professional CV in minutes, and take the next step in your career journey.
          </p>

          <div className="mx-auto max-w-5xl bg-white border border-[#e2e8f0] rounded-3xl p-3 shadow-2xl shadow-blue-500/10 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-[2] flex items-center bg-[#f5f7fa] rounded-xl px-4 py-2 border border-transparent focus-within:border-[var(--color-primary)]/50 transition-colors">
                <Search className="text-[#6b7280] mr-3 shrink-0" size={20} />
                <input 
                  type="text" 
                  placeholder="Job title, keywords, or company" 
                  className="w-full bg-transparent border-none focus:outline-none text-[#2d3748]"
                />
              </div>
              <div className="flex-1 flex items-center bg-[#f5f7fa] rounded-xl px-4 py-2 border border-transparent focus-within:border-[var(--color-primary)]/50 transition-colors">
                <select className="w-full bg-transparent border-none focus:outline-none text-[#2d3748] appearance-none cursor-pointer">
                  <option value="">Any Category</option>
                  <option value="it">IT &amp; Software</option>
                  <option value="marketing">Sales &amp; Marketing</option>
                  <option value="accounting">Accounting &amp; Finance</option>
                  <option value="engineering">Engineering</option>
                  <option value="medical">Medical &amp; Healthcare</option>
                  <option value="education">Education &amp; Training</option>
                  <option value="media">Media &amp; Communications</option>
                  <option value="hr">Human Resources</option>
                  <option value="legal">Legal</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center bg-[#f5f7fa] rounded-xl px-4 py-2 border border-transparent focus-within:border-[var(--color-primary)]/50 transition-colors">
                <MapPin className="text-[#6b7280] mr-3 shrink-0" size={20} />
                <select 
                  className="w-full bg-transparent border-none focus:outline-none text-[#2d3748] appearance-none cursor-pointer"
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                >
                  <option value="">Any Province</option>
                  <option value="punjab">Punjab</option>
                  <option value="sindh">Sindh</option>
                  <option value="kpk">Khyber Pakhtunkhwa</option>
                  <option value="balochistan">Balochistan</option>
                  <option value="islamabad">Islamabad</option>
                  <option value="ajk">Azad Jammu &amp; Kashmir</option>
                  <option value="gb">Gilgit-Baltistan</option>
                </select>
              </div>
              <div className="flex-1 flex items-center bg-[#f5f7fa] rounded-xl px-4 py-2 border border-transparent focus-within:border-[var(--color-primary)]/50 transition-colors">
                <MapPin className="text-[#6b7280] mr-3 shrink-0 opacity-50" size={20} />
                <select className="w-full bg-transparent border-none focus:outline-none text-[#2d3748] appearance-none cursor-pointer">
                  <option value="">{selectedProvince ? `Cities in ${selectedProvince.toUpperCase()}` : "Select Province First"}</option>
                  {selectedProvince && PROVINCE_CITIES[selectedProvince].map((city) => (
                    <option key={city} value={city.toLowerCase()}>{city}</option>
                  ))}
                </select>
              </div>
              <Button size="lg" className="sm:w-32 rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-lg shadow-blue-500/20">
                Search
              </Button>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm text-[#6b7280]">
            <span>Popular searches:</span>
            {["Software Engineer", "Marketing", "Data Analyst", "Remote", "Karachi"].map((tag) => (
              <Link key={tag} href={`/jobs?q=${tag.toLowerCase()}`} className="rounded-full bg-[#f0f2f5] px-3 py-1 hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition-colors">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-[#f5f7fa]">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#2d3748]">Explore by Category</h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">Discover opportunities across various industries tailored to your skills and expertise.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "IT & Software", count: "1,200+" },
              { name: "Sales & Marketing", count: "850+" },
              { name: "Accounting", count: "420+" },
              { name: "Engineering", count: "650+" },
            ].map((cat, i) => (
              <Link key={i} href={`/jobs?category=${cat.name.toLowerCase().replace(/ & /g, '-')}`}>
                <div className="group cursor-pointer rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all hover:border-[var(--color-primary)]/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/5 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-[#2d3748] group-hover:text-[var(--color-primary)] transition-colors">{cat.name}</h3>
                  <p className="text-sm text-[#6b7280] mt-2">{cat.count} Jobs</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CV Builder Promo */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="overflow-hidden rounded-3xl bg-white border border-[#e2e8f0] shadow-2xl shadow-blue-500/5">
            <div className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-sm font-medium mb-6 text-[var(--color-primary)]">
                  <FileText size={16} /> Free CV Builder
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#2d3748]">Build a Professional CV in Minutes</h2>
                <p className="text-[#6b7280] text-lg mb-8">
                  Stand out from the crowd. Use our tailored templates, export to PDF instantly, and apply to top jobs with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cv-builder">
                    <Button size="lg" className="rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]">
                      Create Your CV Now
                    </Button>
                  </Link>
                  <Link href="/cv-builder">
                    <Button size="lg" variant="outline" className="rounded-xl border-[#e2e8f0] text-[#4a5568] hover:bg-[#f5f7fa] hover:border-[var(--color-primary)]/30">
                      View Templates
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full bg-gradient-to-br from-[var(--color-primary)]/30 to-white/5 rounded-2xl border border-[#e2e8f0] shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Abstract graphic representation of CV page */}
                <div className="w-[60%] h-[80%] bg-white rounded shadow-lg p-6 flex flex-col gap-4 animate-slide-up hover:scale-105 transition-transform duration-500">
                  <div className="h-12 w-12 bg-blue-50 rounded-full"></div>
                  <div className="h-4 w-3/4 bg-blue-50 rounded"></div>
                  <div className="h-3 w-1/2 bg-[#f0f2f5] rounded"></div>
                  <div className="mt-4 border-b border-[#f0f2f5]"></div>
                  <div className="h-3 w-full bg-[#f0f2f5] rounded mt-4"></div>
                  <div className="h-3 w-5/6 bg-[#f0f2f5] rounded"></div>
                  <div className="h-3 w-4/6 bg-[#f0f2f5] rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
