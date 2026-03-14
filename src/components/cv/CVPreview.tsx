"use client"
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { ModernCV } from './templates/ModernCV';
import { CVData } from './schema';

export default function CVPreview({ data }: { data: CVData }) {
  return (
    <PDFViewer width="100%" height="100%" className="border-none">
      <ModernCV data={data} />
    </PDFViewer>
  );
}
