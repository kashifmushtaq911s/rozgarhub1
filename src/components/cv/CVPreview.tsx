"use client"
import React, { useEffect, useState } from 'react';
import { PDFViewer, BlobProvider } from '@react-pdf/renderer';
import { ModernCV } from './templates/ModernCV';
import { CVData } from './schema';
import { ExternalLink, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CVPreview({ data }: { data: CVData }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] flex flex-col">
      {isMobile ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl border border-dashed border-[#cbd5e1]">
          <div className="w-16 h-16 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-4">
            <Eye className="text-[var(--color-primary)]" size={32} />
          </div>
          <h3 className="text-lg font-bold text-[#1e293b] mb-2">Mobile Preview</h3>
          <p className="text-sm text-[#64748b] mb-6 max-w-xs">
            PDF previews might not display directly in all mobile browsers. You can open it in a new tab to see it clearly.
          </p>
          
          <BlobProvider document={<ModernCV data={data} />}>
            {({ url, loading }) => (
              <Button 
                onClick={() => url && window.open(url, '_blank')}
                disabled={loading}
                className="gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] rounded-xl px-8"
              >
                <ExternalLink size={18} />
                {loading ? "Generating..." : "Open Preview in New Tab"}
              </Button>
            )}
          </BlobProvider>
          
          <p className="mt-8 text-xs text-[#94a3b8]">
            Tip: Complete your details in the Editor tab first.
          </p>
        </div>
      ) : (
        <PDFViewer width="100%" height="100%" className="border-none flex-1 rounded-xl overflow-hidden shadow-inner">
          <ModernCV data={data} />
        </PDFViewer>
      )}
    </div>
  );
}
