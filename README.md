
# 🌐 Personal Portfolio Website — Aleksandr Kross  

**Author:** Aleksandr Kross  
📧 [krossale@fel.cvut.cz](mailto:krossale@fel.cvut.cz)  
**GitHub:** [https://github.com/mathewtroy/pf](https://github.com/mathewtroy/pf)  
**Live Website:** [https://krossale.vercel.app](https://krossale.vercel.app)  

---

## 📖 Overview  

This **portfolio website** showcases my projects, technical skills, and professional experience.  
Built with **Next.js (React 19)** and **TypeScript**, it supports **Dark / Light themes**, and **multi-language (EN / RU)** mode — dynamically switching content and SEO meta tags.  

---

## 🎯 Key Features  

- 🌓 **Dark / Light mode** with smooth transitions  
- 🌍 **Multi-language (EN / RU)** support via React Context  
- ⚙️ **Dynamic SEO meta tags** that update based on selected language  
- 💼 **Responsive portfolio sections** (Main, Projects, Contacts)  
- 🔗 Project cards with GitHub and live links  
- 📱 Optimized for mobile, tablet, and desktop  
- 🚀 **Deployed on Vercel**

---

## ⚙️ Technologies  

| **Category** | **Stack / Tools** |
|---------------|-------------------|
| **Framework** | Next.js 16 (React 19) |
| **Language** | TypeScript |
| **Styling** | Custom CSS, variables.css, responsive media queries |
| **Icons** | Font Awesome |
| **Deployment** | Vercel |
| **Version Control** | Git, GitHub |

---

## 🧩 Project Structure  
**public/** — static assets (icons, images) <br>
**src/components/** — reusable UI components <br>
**src/components/profile/** — MainBox, ProjectsBox, ContactsBox <br>
**src/context/** — LanguageContext (EN/RU) <br>
**src/data/** — translations, projects, constants <br>
**src/pages/** — Next.js pages (_app, _document, index) <br>
**src/styles/** — main.css, media.css, variables.css, darkmode.css <br>
**package.json** — project dependencies <br>
**tsconfig.json** — TypeScript config <br>
**next.config.ts** — Next.js settings <br>
**eslint.config.mjs** — ESLint rules <br>
**README.md** — project documentation <br>


## 🚀 How to Run the Project
**Clone the repository:** <br>
`git clone https://github.com/mathewtroy/pf.git` <br>
`cd pf`

**Install dependencies:** <br>
`npm install`


**Run the development server:** <br>
`npm run dev`

Then open: http://localhost:3000


## ☁️ Deployment (Vercel)
**App will be available at** https://krossale.vercel.app


## 🌍 SEO Configuration
Dynamic <Head> tags in pages/index.tsx include:
- title and meta description for both languages
- OpenGraph (og:) and Twitter card support
- Dynamic favicon (/pf-icon.svg)
- pf-preview.png (1183×776) used as preview image for Telegram, LinkedIn.

  
## 🧠 Project Purpose
This project demonstrates modern Next.js + TypeScript development,
with focus on clean architecture, responsive design, and SEO-friendly multilingual support.


© 2025 Aleksandr Kross
