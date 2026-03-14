"use client"
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ModernCV } from './templates/ModernCV';
import { CVData } from './schema';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CVDownloadButton({ data }: { data: CVData }) {
  const fileName = data.personalInfo.fullName 
    ? `${data.personalInfo.fullName.replace(/\s+/g, '_')}_CV.pdf` 
    : 'Rozgarhub_CV.pdf';

  return (
    <PDFDownloadLink
      document={<ModernCV data={data} />}
      fileName={fileName}
    >
      {({ loading }) => (
        <Button 
          disabled={loading}
          className="gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-xl shadow-lg shadow-blue-500/20 px-6"
        >
          {loading ? (
            'Preparing PDF...'
          ) : (
            <>
              <Download size={18} />
              Download PDF
            </>
          )}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
