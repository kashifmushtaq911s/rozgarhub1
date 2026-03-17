"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Briefcase, FileText, Users } from "lucide-react"
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
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 text-[#0f172a] text-balance leading-[1.1]">
            Find Your Dream Job <br className="hidden md:block" />
            in <span className="text-[var(--color-primary)]">Pakistan</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-[#475569] mb-12 font-medium">
            Discover premier opportunities, build an industry-standard CV in minutes, and accelerate your career journey.
          </p>

          <div className="mx-auto max-w-5xl bg-white border border-[#e2e8f0] rounded-[2.5rem] p-4 shadow-[0_32px_64px_-16px_rgba(30,64,175,0.08)] flex flex-col gap-4">
            <div className="flex items-center bg-[#f8fafc] rounded-2xl px-5 py-4 border border-transparent focus-within:border-[var(--color-primary)]/30 focus-within:bg-white transition-all shadow-sm">
              <Search className="text-[#94a3b8] mr-4 shrink-0" size={24} />
              <input 
                type="text" 
                placeholder="Job title, keywords, or company" 
                className="w-full bg-transparent border-none focus:outline-none text-[#1e293b] text-xl placeholder:text-[#94a3b8]"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="flex items-center bg-[#f5f7fa] rounded-xl px-4 py-2 border border-transparent focus-within:border-[var(--color-primary)]/50 transition-colors">
                <Briefcase className="text-[#6b7280] mr-3 shrink-0" size={20} />
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

              <div className="flex items-center bg-[#f5f7fa] rounded-xl px-4 py-2 border border-transparent focus-within:border-[var(--color-primary)]/50 transition-colors">
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

              <div className="flex items-center bg-[#f8fafc] rounded-2xl px-5 py-3 border border-transparent focus-within:border-[var(--color-primary)]/30 focus-within:bg-white transition-all shadow-sm">
                <MapPin className="text-[#94a3b8] mr-3 shrink-0" size={20} />
                <select className="w-full bg-transparent border-none focus:outline-none text-[#1e293b] appearance-none cursor-pointer font-medium">
                  <option value="">{selectedProvince ? `Cities in ${selectedProvince.toUpperCase()}` : "Select Province First"}</option>
                  {selectedProvince && PROVINCE_CITIES[selectedProvince].map((city) => (
                    <option key={city} value={city.toLowerCase()}>{city}</option>
                  ))}
                </select>
              </div>

              <Button size="lg" className="h-full rounded-2xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold text-lg shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Search Jobs
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
              { name: "IT & Software", count: "0", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=100&w=800" },
              { name: "Sales & Marketing", count: "0", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=100&w=800" },
              { name: "Accounting", count: "0", image: "https://images.unsplash.com/photo-1554224155-619939958c9b?auto=format&fit=crop&q=100&w=800" },
              { name: "Engineering", count: "0", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=100&w=800" },
            ].map((cat, i) => (
              <Link key={i} href={`/jobs?category=${cat.name.toLowerCase().replace(/ & /g, '-')}`}>
                <div className="group cursor-pointer rounded-3xl overflow-hidden relative h-56 transition-all hover:shadow-2xl hover:-translate-y-2">
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="font-black text-xl text-white mb-1 tracking-tight">{cat.name}</h3>
                    <p className="text-sm text-slate-300 font-medium">{cat.count} Jobs</p>
                  </div>
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
                  Stand out from the crowd. Use our tailored template, export to PDF instantly, and apply to top jobs with confidence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/cv-builder">
                    <Button size="lg" className="rounded-xl bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] font-black h-16 px-10 text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all">
                      Create Your CV Now
                    </Button>
                  </Link>
                </div>
              </div>
              {/* Realistic CV Preview - Mirrors ModernCV template */}
              <div className="relative h-[600px] w-full bg-slate-50 rounded-3xl border border-slate-100 shadow-2xl overflow-hidden flex items-center justify-center p-4 sm:p-6">
                <div className="w-full h-full bg-white rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden border border-slate-200 relative animate-slide-up hover:scale-[1.01] transition-transform duration-700">
                  {/* CV Header */}
                  <div className="flex justify-between items-center px-8 py-5 border-b-2 border-slate-800">
                    <div>
                      <p className="text-lg sm:text-xl font-black text-slate-900 tracking-wider uppercase">MUHAMMAD AHMED</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.25em] mt-1">Senior Software Engineer</p>
                    </div>
                    <div className="h-14 w-14 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden shadow-sm">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150" alt="Candidate" className="h-full w-full object-cover" />
                    </div>
                  </div>

                  {/* CV Body */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Left Column */}
                    <div className="w-[38%] p-5 space-y-4 text-[7px] sm:text-[8px] bg-[#fcfdfe]">
                       <div>
                        <p className="text-[7px] font-black text-slate-800 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1">Contact</p>
                        <p className="text-slate-500 truncate text-[6px]">ahmed@linkedin.com/in/ahmed</p>
                        <p className="text-slate-500 truncate text-[6px]">portfolio.com/muhammad-ahmed</p>
                        <p className="text-slate-500 text-[6px] mt-1 italic">Lahore, Pakistan</p>
                      </div>
                      <div>
                        <p className="text-[7px] font-black text-slate-800 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1">Technical Skills</p>
                        <div className="space-y-0.5 text-slate-500 font-bold">
                          <p>• React / Next.js</p>
                          <p>• Node.js / Express</p>
                          <p>• TypeScript / Tailwind</p>
                          <p>• PostgreSQL / Prisma</p>
                          <p>• AWS & Docker</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[7px] font-black text-slate-800 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1">Languages</p>
                        <div className="space-y-0.5 text-slate-500">
                          <p>• English (Fluent)</p>
                          <p>• Urdu (Native)</p>
                          <p>• Arabic (Basic)</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-[7px] font-black text-slate-800 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1">Interests</p>
                        <div className="space-y-0.5 text-slate-500 italic">
                          <span>Photography, </span>
                          <span>Open Source, </span>
                          <span>Tech Blogging</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-[62%] p-5 space-y-3.5 text-[7px] sm:text-[8px]">
                      <div>
                        <p className="text-[7px] font-black text-slate-800 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1">Profile Summary</p>
                        <p className="text-slate-500 leading-relaxed font-medium">Innovative software engineer with 5+ years of experience specialized in building cloud-native web systems. Committed to writing clean, maintainable, and efficient code.</p>
                      </div>
                      <div>
                        <p className="text-[7px] font-black text-slate-800 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1">Work Experience</p>
                        <div className="space-y-2.5">
                          <div>
                            <div className="flex justify-between items-baseline">
                              <p className="font-black text-slate-900">Lead Frontend Engineer</p>
                              <p className="text-slate-400 font-black scale-90">2023 - Present</p>
                            </div>
                            <p className="font-bold text-slate-600 mb-0.5">TechCorp Pakistan</p>
                            <p className="text-slate-500 leading-tight">Orchestrated the migration of legacy monolith into modern micro-frontend architecture using Next.js.</p>
                          </div>
                          <div>
                            <div className="flex justify-between items-baseline">
                              <p className="font-black text-slate-900">Full Stack Developer</p>
                              <p className="text-slate-400 font-black scale-90">2020 - 2023</p>
                            </div>
                            <p className="font-bold text-slate-600 mb-0.5">Innovate Labs</p>
                            <p className="text-slate-500 leading-tight">Developed real-time financial dashboards servicing over 50K daily active users across the MENA region.</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-[7px] font-black text-slate-800 uppercase tracking-widest mb-1.5 border-b border-slate-200 pb-1">Education</p>
                        <div className="flex justify-between items-baseline">
                          <p className="font-black text-slate-900">BS Computer Science</p>
                          <p className="text-slate-400 font-black scale-90">2016 - 2020</p>
                        </div>
                        <p className="font-bold text-slate-600">FAST NUCES, Lahore</p>
                        <div className="flex justify-between items-end">
                           <div className="mt-1">
                             <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[6px] border border-indigo-100 font-black rounded uppercase tracking-tighter">CGPA: 3.85 / 4.0</span>
                           </div>
                           <div className="flex flex-col items-end opacity-60">
                              <p className="text-[6px] font-black text-slate-400 uppercase">Certifications</p>
                              <p className="text-[6px] font-bold text-slate-500 truncate max-w-[80px]">AWS Practitioner</p>
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
