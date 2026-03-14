import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, UserCircle } from "lucide-react"

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile Settings</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3 space-y-6">
          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
            <CardContent className="p-6 text-center pt-8">
              <div className="mx-auto h-24 w-24 rounded-full bg-[var(--color-secondary)] mb-4 flex items-center justify-center relative group overflow-hidden">
                <UserCircle size={48} className="text-[var(--color-muted-foreground)]" />
                <div className="absolute inset-0 bg-black/50 hidden group-hover:flex flex-col items-center justify-center text-white cursor-pointer transition-colors">
                  <Upload size={20} className="mb-1" />
                  <span className="text-[10px] font-medium">Upload</span>
                </div>
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-[var(--color-muted-foreground)] text-sm mb-6">Senior Frontend Developer</p>
              <Button variant="outline" className="w-full">Public View</Button>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Resume</h3>
              <div className="flex items-center justify-between p-3 border border-[var(--color-border)] rounded-xl bg-[var(--color-secondary)] mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-red-500/10 text-red-500 p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">John_Doe_CV.pdf</h4>
                    <p className="text-xs text-[var(--color-muted-foreground)]">Updated 2 days ago</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full gap-2 text-[var(--color-primary)] border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/5">
                <Upload size={16} /> Upload New Resume
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="w-full lg:w-2/3">
          <Card className="rounded-2xl border-[var(--color-border)] shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-6">Personal Information</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">First Name</label>
                    <Input defaultValue="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name</label>
                    <Input defaultValue="Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input type="email" defaultValue="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Phone</label>
                    <Input defaultValue="+92 300 0000000" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-1 block">Headline / Job Title</label>
                    <Input defaultValue="Senior Frontend Developer" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium mb-1 block">Bio</label>
                    <textarea 
                      className="w-full min-h-[120px] rounded-xl border border-[var(--color-border)] bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
                      defaultValue="Passionate frontend developer with 5+ years of experience building scalable web applications using React and Next.js."
                    />
                  </div>
                </div>
                
                <div className="border-t border-[var(--color-border)] pt-6 mt-6 flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
