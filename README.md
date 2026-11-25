<<<<<<< HEAD
# Notes-Application
=======
# AI Study Notes Generator

A React + Vite study dashboard that turns lecture notes into a summary, important questions, MCQs, and interactive flashcards.

## Run locally

```bash
npm install
copy .env.example .env
npm run dev
```

Add your Gemini key to `.env`:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

Without a key, the app uses a small demo response so the interface can be explored locally. For production, create the environment variable in your Vercel project settings and deploy the repository with the Vite preset.

## Included

- Gemini JSON generation via Axios
- LocalStorage history and theme preference
- Dark/light mode
- Copy individual sections or the complete kit
- PDF export
- Responsive layout with interactive flashcards
>>>>>>> bdcec71 (Add Notes Application project)
