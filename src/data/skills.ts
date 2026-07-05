import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Boxes,
  Wrench,
  GitBranch,
  Cloud,
  Terminal,
  Layers,
  Braces,
} from "lucide-react";

export type SkillKind =
  | "language"
  | "framework"
  | "database"
  | "tool"
  | "concept"
  | "cloud";

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  description: string;
  items: { name: string; kind: SkillKind; level?: "Core" | "Working" | "Familiar" }[];
};

export const TECHNICAL_SKILLS: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    description: "Primary languages I ship with.",
    items: [
      { name: "Python", kind: "language", level: "Core" },
      { name: "SQL", kind: "language", level: "Core" },
      { name: "JavaScript", kind: "language", level: "Working" },
      { name: "TypeScript", kind: "language", level: "Working" },
      { name: "C", kind: "language", level: "Familiar" },
      { name: "HTML5", kind: "language", level: "Working" },
      { name: "CSS3", kind: "language", level: "Working" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    description: "Server, UI, and data tooling.",
    items: [
      { name: "FastAPI", kind: "framework", level: "Core" },
      { name: "Streamlit", kind: "framework", level: "Working" },
      { name: "React", kind: "framework", level: "Working" },
      { name: "Node.js", kind: "framework", level: "Familiar" },
      { name: "Tailwind CSS", kind: "framework", level: "Working" },
    ],
  },
  {
    title: "Databases & Storage",
    icon: Boxes,
    description: "Relational modeling and query tuning.",
    items: [
      { name: "MySQL", kind: "database", level: "Core" },
      { name: "SQLite", kind: "database", level: "Core" },
      { name: "PostgreSQL", kind: "database", level: "Working" },
      { name: "Schema Design", kind: "concept", level: "Core" },
      { name: "Query Optimization", kind: "concept", level: "Working" },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description: "Daily engineering toolchain.",
    items: [
      { name: "Git", kind: "tool", level: "Core" },
      { name: "GitHub", kind: "tool", level: "Core" },
      { name: "VS Code", kind: "tool", level: "Core" },
      { name: "Postman", kind: "tool", level: "Working" },
      { name: "Uvicorn", kind: "tool", level: "Working" },
      { name: "Linux CLI", kind: "tool", level: "Working" },
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    description: "Certified fundamentals + practical basics.",
    items: [
      { name: "AWS (Educate)", kind: "cloud", level: "Working" },
      { name: "AWS Compute", kind: "cloud", level: "Working" },
      { name: "AWS Databases", kind: "cloud", level: "Working" },
      { name: "REST APIs", kind: "concept", level: "Core" },
    ],
  },
  {
    title: "CS Fundamentals",
    icon: Braces,
    description: "Concepts I actively work with.",
    items: [
      { name: "Data Structures", kind: "concept", level: "Core" },
      { name: "Algorithms", kind: "concept", level: "Working" },
      { name: "OOP", kind: "concept", level: "Core" },
      { name: "DBMS", kind: "concept", level: "Core" },
      { name: "OS", kind: "concept", level: "Working" },
      { name: "Software Engineering", kind: "concept", level: "Working" },
    ],
  },
];

export type PlatformLink = {
  platform: string;
  handle: string;
  href: string;
  icon: LucideIcon;
  blurb: string;
};

export const PROBLEM_SOLVING: PlatformLink[] = [
  {
    platform: "LeetCode",
    handle: "@ramisa-tabassum",
    href: "https://leetcode.com/u/ramisa-tabassum/",
    icon: Terminal,
    blurb: "Data structures, algorithms, and interview practice.",
  },
  {
    platform: "HackerRank",
    handle: "@ramisatabassum",
    href: "https://www.hackerrank.com/ramisatabassum",
    icon: Terminal,
    blurb: "Problem-solving, SQL, and Python skill tracks.",
  },
  {
    platform: "Codeforces",
    handle: "@ramisa_tabassum",
    href: "https://codeforces.com/profile/ramisa_tabassum",
    icon: Terminal,
    blurb: "Competitive programming rounds and contest archive.",
  },
    {

    platform: "Beecrowd",

    handle: "@RamisaTabassum",

    href: "https://judge.beecrowd.com/en/profile/800539",

    icon: Terminal,

    blurb: "Competitive programming rounds and contest archive.",

  },
  {
    platform: "GitHub",
    handle: "@rt-ahona",
    href: "https://github.com/rt-ahona",
    icon: GitBranch,
    blurb: "Open-source repositories, project code, and commit history.",
  },
];
