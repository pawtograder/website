export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  emoji: string;
  title: string;
  description: string;
}

export interface Audience {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSection {
  title: string;
  links?: FooterLink[];
  description?: string;
} 