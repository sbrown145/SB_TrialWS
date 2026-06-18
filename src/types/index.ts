export type Accent = 'a1' | 'a2' | 'a3' | 'a4';

export interface Project {
  title: string;
  company: string;
  period?: string;
  summary: string;
  bullets?: string[];
  tags: string[];
  link?: string;
  accent: Accent;
  featured?: boolean;
}

export interface Role {
  title: string;
  company: string;
  period: string;
  location?: string;
  accent: Accent;
  points: string[];
}

export interface SkillGroup {
  title: string;
  accent: Accent;
  items: string[];
}
