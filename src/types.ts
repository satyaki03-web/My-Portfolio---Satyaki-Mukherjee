export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  badgeText?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  keyFeatures: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  color: 'primary' | 'secondary' | 'tertiary';
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: string;
  highlight?: string;
}

