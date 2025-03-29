import { NavLink, Feature, Audience, Stat, FooterSection } from './types';

export const navLinks: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#who-its-for', label: 'Who it\'s for' },
  { href: '#demo', label: 'Demo' },
  { href: '#open-source', label: 'Open Source' },
  { href: 'https://docs.pawtograder.com', label: 'Docs' },
];

export const features: Feature[] = [
  {
    emoji: '🧪',
    title: 'Auto-Grading via GitHub',
    description: 'GitHub Actions power your test suites, run on every commit, and report results straight into the TA dashboard.',
  },
  {
    emoji: '✍️',
    title: 'Manual & Peer Feedback',
    description: 'TAs and students review code through a clean, focused grading interface — complete with rubrics, line-level comments, and peer review workflows.',
  },
  {
    emoji: '💬',
    title: 'Rich Discussion Board',
    description: 'Foster collaboration through integrated discussion boards',
  },
  {
    emoji: '📞',
    title: 'Smart Help Queue',
    description: 'Students request help with one click — linked to their code and automated feedback. TAs respond with chat, video, and context-aware guidance'
  },
];

export const audiences: Audience[] = [
  {
    title: 'Instructors',
    description: 'Manage grading teams, track progress, enable peer review, and scale your support to large classes effortlessly.'
  },
  {
    title: 'Students',
    description: 'From git push to feedback in minutes. Regrade requests and help sessions built right in.'
  },
  {
    title: 'Teaching Assistants',
    description: 'Grade faster, leave better feedback, and help more students in less time.'
  },
];

export const stats: Stat[] = [
  { label: 'GitHub Stars', value: '1.2k+' },
  { label: 'Contributors', value: '50+' },
  { label: 'Active Users', value: '10k+' },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Pawtograder',
    description: 'Making CS education better, one paw at a time.',
  },
  {
    title: 'Links',
    links: [
      { href: '#', label: 'Documentation' },
      { href: '#', label: 'GitHub' },
      { href: '#', label: 'Contributing' },
      { href: '#', label: 'Contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: '#', label: 'Twitter' },
      { href: '#', label: 'Discord' },
      { href: '#', label: 'LinkedIn' },
    ],
  },
]; 