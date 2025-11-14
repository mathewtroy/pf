import { ICONS } from "./icons";

export interface ProjectItem {
  key: string; // translation key
  title: string;
  desc: string;
  icons: string[];
  techLabels?: string[];
  github?: string;
  website?: string;
}

export const PROJECTS: ProjectItem[] = [
  
  {
    key: "voicer",
    title: "VOICER AI ASSISTANT",
    desc: "Real-time AI voice assistant using TypeScript, FastAPI, Deepgram STT, Groq LLM, and gTTS.",
    icons: [ICONS.ts, ICONS.vite, ICONS.fastapi, ICONS.python, ICONS.ai],
    techLabels: ["TypeScript","Vite" ,"FastAPI","Python","AI models"],
    github: "https://github.com/mathewtroy/voicer",
    website: "https://voicer-ai.vercel.app/",
  },
  {
    key: "candly",
    title: "CANDLY SOCIAL APP",
    desc: "Social app with posts, likes, search and admin tools.",
    icons: [ICONS.react, ICONS.js, ICONS.firebase, ICONS.cloudinary],
    techLabels: ["React", "JavaScript", "Firebase", "Cloudinary"],
    github: "https://github.com/mathewtroy/candle",
    website: "https://candly-krossi.web.app",
  },
  {
    key: "todo",
    title: "TODO-LIST APP",
    desc: "Task manager with real-time Firestore sync and user auth.",
    icons: [ICONS.react, ICONS.firebase, ICONS.git, ICONS.eslint, ICONS.tailwind],
    techLabels: ["React", "Firebase", "GitHub Actions", "ESLint", "Tailwind"],
    github: "https://github.com/mathewtroy/todo-list",
    website: "https://todo-krossi.web.app",
  },
  {
    key: "whiteboard",
    title: "REACT WHITEBOARD",
    desc: "Interactive drawing app with undo/redo, colors and brush size control.",
    icons: [ICONS.react, ICONS.js, ICONS.html, ICONS.css],
    techLabels: ["React", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/mathewtroy/whiteboard",
    website: "https://mathewtroy.github.io/whiteboard/",
  },
  {
    key: "vuln",
    title: "VULNERABILITY DETECTOR",
    desc: "Automated PHP vulnerability scanner + demo vulnerable web app.",
    icons: [ICONS.python, ICONS.php, ICONS.html, ICONS.css, ICONS.mysql],
    techLabels: ["Python", "PHP", "HTML", "CSS", "MySQL"],
    github: "https://github.com/mathewtroy/box",
  },
  {
    key: "finance",
    title: "FINANCE MOBILE APP",
    desc: "Personal finance manager built in Kotlin using Jetpack Compose.",
    icons: [ICONS.kotlin, ICONS.jetpack, ICONS.gradle],
    techLabels: ["Kotlin", "Jetpack Compose", "Gradle"],
    github: "https://github.com/mathewtroy/geld-app",
  },
  {
    key: "travel",
    title: "TRAVEL PACKAGES WEBSITE",
    desc: "Full-stack travel booking app with secure auth and booking requests.",
    icons: [ICONS.php, ICONS.js, ICONS.html, ICONS.css, ICONS.mysql],
    techLabels: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    github: "https://github.com/mathewtroy/zwa",
  },
  {
    key: "eshop",
    title: "ESHOP TESTING",
    desc: "Automated Selenium tests for e-commerce workflows.",
    icons: [ICONS.java, ICONS.selenium],
    techLabels: ["Java", "Selenium"],
    github: "https://github.com/mathewtroy/ts1-pro",
  },
  {
  key: "dsva",
  title: "DISTRIBUTED SYSTEM — BULLY ALGORITHM",
  desc: "Distributed system implementing leader election using Bully Algorithm with Java RMI, REST API, and automated Bash scripts.",
  icons: [ICONS.java, ICONS.linux, ICONS.bash],
  techLabels: ["Java", "Linux", "Bash"],
  github: "https://github.com/mathewtroy/dsva",
},
{
  key: "visa",
  title: "VISA / RESIDENCE PERMIT GUIDE",
  desc: "Single-page website explaining the student visa extension process with responsive timeline and SVG icons.",
  icons: [ICONS.html, ICONS.css],
  techLabels: ["HTML", "CSS"],
  github: "https://github.com/mathewtroy/visa",
  website: "https://mathewtroy.github.io/visa/",
},

];
