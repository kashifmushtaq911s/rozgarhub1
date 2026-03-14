"use client"
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { CVData } from '../schema';

// Register fonts if needed, but sticking to standard for now to avoid complexity
// Font.register({ family: 'Helvetica-Bold', src: 'https://fonts.gstatic.com/s/helveticaneue/v70/77Uo35S2npGmwQIwIBUOBnZJXYnBmsWN0A.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
  },
  sidebar: {
    width: '30%',
    backgroundColor: '#F8FAFF',
    color: '#3C4043',
    padding: 30,
    height: '100%',
  },
  main: {
    width: '70%',
    padding: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2563eb',
  },
  jobTitleSidebar: {
    fontSize: 10,
    color: '#5F6368',
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sidebarSectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2563eb',
    marginTop: 20,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#DADCE0',
    paddingBottom: 4,
  },
  sidebarText: {
    fontSize: 9,
    color: '#3C4043',
    marginBottom: 6,
    lineHeight: 1.4,
  },
  mainSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3748',
    marginTop: 15,
    marginBottom: 10,
    textTransform: 'uppercase',
    borderBottomWidth: 2,
    borderBottomColor: '#2563eb',
    paddingBottom: 4,
  },
  entry: {
    marginBottom: 15,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2d3748',
  },
  entrySubtitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#3C4043',
    marginBottom: 2,
  },
  entryDate: {
    fontSize: 9,
    color: '#5F6368',
    fontWeight: 'bold',
  },
  entryDesc: {
    fontSize: 10,
    color: '#3C4043',
    lineHeight: 1.5,
    marginTop: 4,
  },
  eduGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
    marginTop: 4,
  },
  eduItem: {
    fontSize: 9,
    color: '#475569',
    backgroundColor: '#f1f5f9',
    padding: '2 6',
    borderRadius: 4,
  },
  summary: {
    fontSize: 10,
    color: '#334155',
    lineHeight: 1.6,
    marginBottom: 15,
  },
  skillItem: {
    fontSize: 9,
    color: '#cbd5e1',
    marginBottom: 4,
    flexDirection: 'row',
  },
  bullet: {
    width: 10,
    color: '#38bdf8',
  }
});

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  if (dateStr.toLowerCase() === 'present') return 'Present';
  // Handle YYYY-MM-DD
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return dateStr;
};

export const ModernCV = ({ data }: { data: CVData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Text style={styles.name}>{data.personalInfo.fullName || 'YOUR NAME'}</Text>
        <Text style={styles.jobTitleSidebar}>
          {data.experience.length > 0 ? data.experience[0].jobTitle : ''}
        </Text>

        <Text style={styles.sidebarSectionTitle}>Contact</Text>
        {data.personalInfo.email && <Text style={styles.sidebarText}> {data.personalInfo.email}</Text>}
        {data.personalInfo.phone && <Text style={styles.sidebarText}> {data.personalInfo.phone}</Text>}
        {data.personalInfo.location && <Text style={styles.sidebarText}> {data.personalInfo.location}</Text>}

        {data.skills && data.skills.length > 0 && (
          <View>
            <Text style={styles.sidebarSectionTitle}>Skills</Text>
            {data.skills.map((s, i) => (
              <View key={i} style={styles.skillItem}>
                <Text style={styles.bullet}>•</Text>
                <Text>{s.name}</Text>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* Main Content */}
      <View style={styles.main}>
        {data.personalInfo.summary && (
          <View>
            <Text style={styles.mainSectionTitle}>About Me</Text>
            <Text style={styles.summary}>{data.personalInfo.summary}</Text>
          </View>
        )}

        {data.experience.length > 0 && (
          <View>
            <Text style={styles.mainSectionTitle}>Work Experience</Text>
            {data.experience.map((exp, i) => (
              <View key={i} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{exp.jobTitle}</Text>
                  <Text style={styles.entryDate}>{formatDate(exp.startDate)} - {formatDate(exp.endDate)}</Text>
                </View>
                <Text style={styles.entrySubtitle}>{exp.company}</Text>
                <Text style={styles.entryDesc}>{exp.description}</Text>
              </View>
            ))}
          </View>
        )}

        {data.education.length > 0 && (
          <View>
            <Text style={styles.mainSectionTitle}>Education</Text>
            {data.education.map((edu, i) => (
              <View key={i} style={styles.entry}>
                <View style={styles.entryHeader}>
                  <Text style={styles.entryTitle}>{edu.degree}</Text>
                  <Text style={styles.entryDate}>
                    {edu.startDate && edu.endDate ? `${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}` : formatDate(edu.startDate || edu.endDate || '')}
                  </Text>
                </View>
                <Text style={styles.entrySubtitle}>{edu.institution}</Text>
                
                <View style={styles.eduGrid}>
                  {edu.cgpa && <Text style={styles.eduItem}>CGPA: {edu.cgpa}</Text>}
                  {edu.grade && <Text style={styles.eduItem}>Grade: {edu.grade}</Text>}
                  {edu.obtainedMarks && (
                    <Text style={styles.eduItem}>
                      Marks: {edu.obtainedMarks}{edu.totalMarks ? `/${edu.totalMarks}` : ''}
                    </Text>
                  )}
                </View>
              </View>
            ))}
          </View>
        )}
      </View>
    </Page>
  </Document>
);
