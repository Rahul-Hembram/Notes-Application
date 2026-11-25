
# 📚 AI Study Notes Generator

An AI-powered study assistant built with **React, Vite, and Google Gemini API** that transforms lecture notes into structured learning materials. Generate summaries, important questions, MCQs, and interactive flashcards to make studying smarter and more efficient.

<p align="center">
  <a href="https://notes-application-psi.vercel.app/">
    <strong>🚀 Live Demo</strong>
  </a>
</p>

## ✨ Features

- **AI-Powered Summaries:** Convert lengthy lecture notes into concise summaries.
- **Important Questions:** Generate relevant questions from your study material.
- **MCQ Generation:** Create multiple-choice questions for self-assessment.
- **Interactive Flashcards:** Practice and revise concepts using flashcards.
- **Study History:** Save and revisit previously generated study materials.
- **Dark & Light Mode:** Switch between themes for a comfortable experience.
- **PDF Export:** Export generated study materials as PDF files.
- **Copy to Clipboard:** Copy individual sections or the complete study kit.
- **Responsive Interface:** User-friendly interface across different devices.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js |
| Build Tool | Vite |
| Styling | Tailwind CSS |
| AI Integration | Google Gemini API |
| HTTP Client | Axios |
| Icons | Lucide React |
| Storage | Browser LocalStorage |
| Deployment | Vercel |

## 📸 Screenshots

### Application Preview

![AI Study Notes Generator Screenshot 1](./Screenshot%202026-11-25%20091544.png)

![AI Study Notes Generator Screenshot 2](./Screenshot%202026-11-25%20091554.png)

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Rahul-Hembram/Notes-Application.git
```

### 2. Navigate to the project directory

```bash
cd Notes-Application
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Add your Google Gemini API key to enable AI-powered generation.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `VITE_GEMINI_API_KEY` | Google Gemini API key |

**Note:** Never commit your actual API key or `.env` file to GitHub. Configure environment variables separately in Vercel.

## 🌐 Live Deployment

**Live Application:** [AI Study Notes Generator](https://notes-application-psi.vercel.app/)

## 📂 Project Structure

```text
Notes-Application/
│
├── src/
│   ├── components/
│   │   ├── FlashcardCard.jsx
│   │   ├── HistoryPanel.jsx
│   │   ├── MCQCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── NoteInput.jsx
│   │   ├── QuestionsCard.jsx
│   │   ├── SummaryCard.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── services/
│   │   └── gemini.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🎯 Project Objective

The goal of this project is to simplify the learning process by using Generative AI to transform unstructured study notes into organized, interactive, and easy-to-revise learning resources.

## 👨‍💻 Author

**Rahul Hembram**

- GitHub: [@Rahul-Hembram](https://github.com/Rahul-Hembram)
- Repository: [Notes-Application](https://github.com/Rahul-Hembram/Notes-Application)
- Live Demo: [AI Study Notes Generator](https://notes-application-psi.vercel.app/)

---

⭐ If you find this project useful, consider giving the repository a star!
