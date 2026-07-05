# Satyaki Mukherjee - Personal Portfolio

A sleek, modern, and highly interactive personal portfolio website designed to showcase projects, skills, and highlights. Built with a focus on desktop-first precision, fluid animations, and a modern design language.

## 🚀 Features

- **Dynamic Interactive Board**: Fully-featured work gallery showcasing individual web applications with tech spec drawers and clean project summaries.
- **Visual Mechanics**: Implements subtle, high-performance visual effects, custom CSS animations, and smooth transitions.
- **Rhythmic Technical Arsenal Layout**: An interactive, categorizable breakdown of skills and competencies.
- **Integrated Contact Hub**: Responsive client-side contact panel for easy collaboration and connection.
- **Fully Responsive Layouts**: Fully adaptive across desktop, tablet, and mobile screens.

## 🛠️ Built With

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Custom CSS + Transitions

---

## 💻 Local Setup & Development

To run this project locally, follow these simple steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/satyaki03-web/portfolio.git
cd portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Your sensitive files (like `.env`) are **fully ignored** by Git via the `.gitignore` rule:
- Duplicate the `.env.example` file and rename it to `.env`:
  ```bash
  cp .env.example .env
  ```
- Configure any required local values inside `.env` without worrying about pushing them to public GitHub repositories!

### 4. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified in your console) to view it in your browser.

---

## 🔒 Git Security and Ignored Files

The project is pre-configured with a secure `.gitignore` file that prevents the following items from being committed to GitHub:
- `node_modules/` (Internal dependency packages)
- `.env*` (All environment files and secrets)
- `dist/` and `build/` (Compiled production code)
- Operating system files (such as `.DS_Store`) and log outputs
