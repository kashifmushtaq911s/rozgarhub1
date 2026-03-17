"use client"
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { CVData } from '../schema';

// Disable hyphenation completely
Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
    padding: '40 40',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#2d3748',
    paddingBottom: 20,
    marginBottom: 20,
  },
  headerLeft: {
    flex: 1,
  },
  photoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#f1f5f9',
    marginLeft: 20,
  },
  photo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 6,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  jobTitle: {
    fontSize: 14,
    color: '#4a5568',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  body: {
    flexDirection: 'row',
  },
  leftColumn: {
    width: '38%',
    paddingRight: 15,
  },
  rightColumn: {
    width: '62%',
    paddingLeft: 15,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2d3748',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cbd5e1',
    paddingBottom: 4,
  },
  contactItem: {
    fontSize: 9,
    color: '#4a5568',
    marginBottom: 6,
    lineHeight: 1.4,
  },
  skillItem: {
    fontSize: 10,
    color: '#4a5568',
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 10,
    color: '#cbd5e1',
    fontSize: 12,
  },
  summary: {
    fontSize: 10,
    color: '#4a5568',
    lineHeight: 1.6,
    marginBottom: 25,
    textAlign: 'left',
  },
  entry: {
    marginBottom: 20,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  entryTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1a202c',
  },
  entryDate: {
    fontSize: 9,
    color: '#64748b',
    fontWeight: 'bold',
  },
  entrySubtitle: {
    fontSize: 11,
    color: '#334155',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  entryDesc: {
    fontSize: 10,
    color: '#4a5568',
    lineHeight: 1.5,
    textAlign: 'left',
  },
  eduGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 6,
  },
  eduItem: {
    fontSize: 9,
    color: '#475569',
    backgroundColor: '#f8fafc',
    padding: '3 6',
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
});

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  if (dateStr.toLowerCase() === 'present') return 'Present';
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }
  return dateStr;
};

export const ModernCV = ({ data }: { data: CVData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>{data.personalInfo.fullName || 'Your Name'}</Text>
          <Text style={styles.jobTitle}>
            {data.personalInfo.jobTitle || (data.experience.length > 0 ? data.experience[0].jobTitle : '')}
          </Text>
        </View>
        {data.personalInfo.photo && (
          <View style={styles.photoContainer}>
            <Image src={data.personalInfo.photo} style={styles.photo} />
          </View>
        )}
      </View>

      {/* Body */}
      <View style={styles.body}>
        {/* Left Column */}
        <View style={styles.leftColumn}>
          <View style={{ marginBottom: 25 }}>
            <Text style={styles.sectionTitle}>Contact</Text>
            {data.personalInfo.email && <Text style={styles.contactItem}>{data.personalInfo.email}</Text>}
            {data.personalInfo.phone && <Text style={styles.contactItem}>{data.personalInfo.phone}</Text>}
            {data.personalInfo.location && <Text style={styles.contactItem}>{data.personalInfo.location}</Text>}
          </View>

          {data.links && data.links.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Links</Text>
              {data.links.map((link, i) => (
                <Text key={i} style={styles.contactItem}>{link.name}: {link.url.replace(/^https?:\/\//, '')}</Text>
              ))}
            </View>
          )}

          {data.skills && data.skills.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Skills</Text>
              {data.skills.map((s, i) => (
                <View key={i} style={styles.skillItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{s.name}</Text>
                </View>
              ))}
            </View>
          )}

          {data.languages && data.languages.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Languages</Text>
              {data.languages.map((l, i) => (
                <View key={i} style={styles.skillItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{l.name}{l.level ? ` (${l.level})` : ''}</Text>
                </View>
              ))}
            </View>
          )}

          {data.interests && data.interests.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Interests</Text>
              {data.interests.map((int, i) => (
                <View key={i} style={styles.skillItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text>{int.name}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {/* Right Column */}
        <View style={styles.rightColumn}>
          {data.personalInfo.summary && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Profile Summary</Text>
              <Text style={styles.summary}>{data.personalInfo.summary}</Text>
            </View>
          )}

          {data.experience && data.experience.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
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

          {data.education && data.education.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Education</Text>
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

          {data.courses && data.courses.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>Certifications & Courses</Text>
              {data.courses.map((course, i) => (
                <View key={i} style={styles.entry}>
                  <View style={styles.entryHeader}>
                    <Text style={styles.entryTitle}>{course.name}</Text>
                    <Text style={styles.entryDate}>{course.date}</Text>
                  </View>
                  {course.institution && <Text style={styles.entrySubtitle}>{course.institution}</Text>}
                </View>
              ))}
            </View>
          )}

          {data.references && data.references.length > 0 && (
            <View style={{ marginBottom: 25 }}>
              <Text style={styles.sectionTitle}>References</Text>
              {data.references.map((ref, i) => (
                <View key={i} style={styles.entry}>
                  <Text style={styles.entryTitle}>{ref.name}</Text>
                  {ref.designation && <Text style={styles.entrySubtitle}>{ref.designation}{ref.company ? `, ${ref.company}` : ''}</Text>}
                  {ref.contact && <Text style={styles.entryDesc}>{ref.contact}</Text>}
                </View>
              ))}
            </View>
          )}

          {data.additionalInfo && (
            <View>
              <Text style={styles.sectionTitle}>Additional Information</Text>
              <Text style={styles.entryDesc}>{data.additionalInfo}</Text>
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
);
