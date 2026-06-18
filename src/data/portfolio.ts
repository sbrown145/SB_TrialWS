import { Project, Role, SkillGroup, Accent } from '../types';

const ACCENTS: Accent[] = ['a1', 'a2', 'a3', 'a4'];

export const cycleAccent = (i: number): Accent => ACCENTS[i % ACCENTS.length];

export const about = {
  name: 'Shawn Brown',
  title: 'Versatile Scientist / Engineer',
  tagline: 'Lab R&D · Sorbent Media · IAQ · Carbon Capture',
  location: 'Newton Centre, Massachusetts',
  blurb:
    'Versatile scientist committed to developing technologies which benfit our world.',
};

export const contact = {
  email: 'shawnbrown145@yahoo.com',
  linkedin: 'https://www.linkedin.com/in/shawn-brown-710a2358/',
};

export const experience: Role[] = [
  {
    title: 'Lab Engineer',
    company: 'Aquatic Labs',
    period: 'Nov 2025 – Present',
    location: 'Cambridge, Massachusetts',
    accent: 'a2',
    points: [
      'Climate technology product manufacturing for ocean monitoring and carbon removal.',
      'End-to-end solution instrumenting projects with scalable tools for real-time data-driven insights.',
      'Independent measurement, reporting, and verification (MRV) for scalable ocean carbon removal.',
    ],
  },
  {
    title: 'Lab Engineer → R&D Engineer Lab Manager → Lead Scientist',
    company: 'enVerid Systems',
    period: 'Jun 2015 – Jul 2025',
    location: 'Westwood, Massachusetts',
    accent: 'a1',
    points: [
      'Development and qualification of bench and pilot scale test platforms, including custom test beds, sensors, electromechanical components, and data acquisition/control systems.',
      'Manager and technical lead for commercial scale formulation, production, and analysis of enResin-133, enSorb-144, and SVT-250.',
      'Development and management of sorbent media / system validation and quality control programs.',
      'Subject matter expert for sorbent media capability and compatibility, focus on IAQ and carbon capture.',
      'Manager and technical lead of R&D laboratory and operations.',
      'R&D of new polymers, sorbent materials, gas and particulate filtration, sorbent-air & liquid-air contactors, and energy optimization technologies.',
      'R&D of carbon capture systems and technologies (DAC & PSC).',
    ],
  },
  {
    title: 'Lab Tech',
    company: 'Epoxy Technology',
    period: 'Oct 2012 – Jun 2015',
    location: 'Billerica, Massachusetts',
    accent: 'a3',
    points: [
      'Release testing of raw materials through final products using viscometer, DSC, TGA, ion chromatograph, laser diffraction, FT-IR, Karl Fischer, lap shear, and die shear.',
      'Test procedure development and revision.',
      'Set-up, calibration, troubleshooting, and repairs of lab instruments and equipment.',
    ],
  },
  {
    title: 'QC Analyst',
    company: 'SEQENS (PCI Synthesis)',
    period: 'Jan 2011 – Sep 2012',
    location: 'Écully, France',
    accent: 'a4',
    points: [
      'Release testing of raw materials through final products using HPLC, GC, Karl Fischer, FT-IR, UV/Vis, auto-titrator, laser diffraction, and auto-polarimeter in a cGMP facility.',
      'Authoring and revising SOPs.',
      'IQ/OQ, calibration, repair, and modification of lab equipment.',
      'Maintenance of all lab inventories and supplies.',
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    title: 'Analytical & Lab',
    accent: 'a2',
    items: [
      'HPLC',
      'FT-IR',
      'DSC',
      'TGA',
      'Karl Fischer',
      'GC',
      'UV/Vis',
      'Particle size analysis',
      'Laser diffraction',
      'Release testing',
      'Ion chromatography',
    ],
  },
  {
    title: 'R&D & Materials',
    accent: 'a1',
    items: [
      'Sorbent media',
      'Polymers',
      'Filtration',
      'Carbon capture',
      'Indoor air quality (IAQ)',
      'Prototyping',
      'Gas treatment',
      'Scrubbing',
      'Materials technology',
    ],
  },
  {
    title: 'Systems & Engineering',
    accent: 'a3',
    items: [
      'Data acquisition',
      'Electromechanical components',
      'Sensors',
      'Pilot-scale platforms',
      'Test bed development',
      'Concept prototyping',
      'Energy optimization',
    ],
  },
  {
    title: 'Quality & Operations',
    accent: 'a4',
    items: [
      'cGMP',
      'Validation',
      'IQ/OQ',
      'QC programs',
      'Release management',
      'System validation',
      'Lab instrument calibration',
      'Equipment management',
    ],
  },
  {
    title: 'Leadership',
    accent: 'a1',
    items: [
      'Technical lead',
      'R&D management',
      'Laboratory management',
      'Sorbent compatibility SME',
      'Technology leadership',
      'Procedure development',
    ],
  },
];

export const professionalProjects: Project[] = [
  {
    title: 'SVT — Daikin Rebel RTU',
    company: 'enVerid Systems / Daikin Applied',
    period: '2020–2025',
    summary:
      'Integration of Sorbent Ventilation Technology into Daikin\'s Rebel Applied RTU, delivering superior IAQ while reducing outside air intake to save energy.',
    bullets: [
      'Collaborated with Daikin Applied engineering team on product integration.',
      'Sorbent-based ventilation reduces OA requirements per ASHRAE IAQP.',
      'Addresses cognitive effects of poor IAQ in commercial buildings.',
    ],
    tags: ['Featured', 'IAQ', 'HVAC', 'SVT'],
    accent: 'a1',
    featured: true,
  },
  {
    title: 'SVT — Daikin Vision & Skyline Air Handlers',
    company: 'enVerid Systems / Daikin Applied',
    period: '2022–2025',
    summary:
      'Upgraded Vision and Skyline semi-custom air handler offerings with Sorbent Ventilation Technology.',
    bullets: [
      'Energy cost savings through reduced outside air requirements.',
      'Sustainable IAQ improvement for commercial air handling systems.',
    ],
    tags: ['Featured', 'IAQ', 'HVAC', 'SVT'],
    accent: 'a2',
    featured: true,
  },
  {
    title: 'enResin-133 / enSorb-144 / SVT-250 Commercial Scale-Up',
    company: 'enVerid Systems',
    period: '2017–2025',
    summary:
      'Manager and technical lead for commercial scale formulation, production, and analysis of proprietary sorbent products.',
    bullets: [
      'Scaled proprietary sorbent formulations from lab to commercial production.',
      'Managed quality control and validation programs for sorbent media.',
      'Subject matter expert for sorbent capability and compatibility.',
    ],
    tags: ['Featured', 'Sorbents', 'Manufacturing'],
    accent: 'a3',
    featured: true,
  },
  {
    title: 'Ocean Monitoring & MRV Instrumentation',
    company: 'Aquatic Labs',
    period: '2025–Present',
    summary:
      'End-to-end ocean monitoring with scalable tools and real-time data-driven insights for MRV of ocean carbon removal.',
    bullets: [
      'Scalable ocean monitoring instrumentation.',
      'Real-time operational insights for independent MRV.',
      'Accountability framework for ocean carbon removal.',
    ],
    tags: ['Featured', 'Climate', 'Ocean', 'MRV'],
    accent: 'a2',
    featured: true,
  },
  {
    title: 'Carbon Capture R&D (DAC & PSC)',
    company: 'enVerid Systems',
    period: '2019–2025',
    summary:
      'Research and development of direct air capture and post-combustion capture systems and technologies.',
    bullets: [
      'Novel carbon capture system design and prototyping.',
      'Sorbent-air and liquid-air contactor development.',
      'Energy optimization and recovery technologies.',
    ],
    tags: ['Carbon Capture', 'R&D'],
    accent: 'a1',
  },
  {
    title: 'Bench & Pilot-Scale Test Platforms',
    company: 'enVerid Systems',
    period: '2015–2025',
    summary:
      'Development and qualification of custom test beds, sensors, electromechanical components, and data acquisition/control systems.',
    bullets: [
      'Custom test bed design and build.',
      'Sensor integration and electromechanical component development.',
      'Data acquisition and control system architecture.',
    ],
    tags: ['Prototyping', 'Sensors', 'Test Engineering'],
    accent: 'a4',
  },
  {
    title: 'cGMP Pharmaceutical QC',
    company: 'SEQENS (PCI Synthesis)',
    period: '2011–2012',
    summary:
      'Release testing and quality control in a cGMP pharmaceutical manufacturing facility.',
    bullets: [
      'Raw material through final product release testing.',
      'SOP authoring and revision.',
      'Lab equipment IQ/OQ, calibration, and maintenance.',
    ],
    tags: ['Pharma', 'QC', 'cGMP'],
    accent: 'a3',
  },
];

export const personalProjects: Project[] = [
  {
    title: 'HomeBench — DIY IAQ & CO₂ Logging Rig',
    company: 'Personal',
    period: 'Ongoing',
    summary:
      'Weekend bench project building a low-cost indoor air quality monitoring rig with off-the-shelf sensors, inspired by precision-vs-accuracy thinking from lab QC work.',
    bullets: [
      'Arduino-based data logger capturing CO₂, VOC, and particulate trends over time.',
      'Side-by-side comparison of consumer-grade vs calibrated reference probes.',
      'Simple Python dashboard plotting precision vs accuracy of each sensor channel.',
      'Documented calibration drift and environmental sensitivity lessons applicable to lab instrument qualification.',
    ],
    tags: ['Personal', 'Sensors', 'IAQ', 'Prototyping'],
    accent: 'a2',
  },
];

export const notFound = {
  headline: 'This page drifted into the void.',
  subtext:
    'Even aurora lights can\'t find that URL. Double-check the link, or head home before you float away.',
  ctaLabel: 'Take me home',
};

export const collectTags = (projects: Project[]): string[] => {
  const set = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => set.add(t)));
  const tags = Array.from(set).sort();
  return tags.sort((a, b) =>
    a === 'Featured' ? -1 : b === 'Featured' ? 1 : a.localeCompare(b)
  );
};
