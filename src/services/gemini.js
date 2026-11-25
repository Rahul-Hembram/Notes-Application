import axios from 'axios'

const endpoint =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent'
const fallbackResult = {
  summary: 'Photosynthesis is the process by which green plants use sunlight to convert carbon dioxide and water into glucose and oxygen. Chlorophyll captures light energy in chloroplasts, where light-dependent reactions produce ATP and NADPH. The Calvin cycle then uses that energy to build glucose.',
  questions: [
    'What role does chlorophyll play in photosynthesis?',
    'How do the light-dependent reactions support the Calvin cycle?',
    'Where in the chloroplast does each stage of photosynthesis occur?',
    'What are the reactants and products of photosynthesis?',
    'Why is photosynthesis essential to most ecosystems?',
  ],
  mcqs: [
    { question: 'What is the primary pigment involved in photosynthesis?', options: ['Carotene', 'Chlorophyll', 'Melanin', 'Keratin'], answer: 'Chlorophyll' },
    { question: 'Where do light-dependent reactions take place?', options: ['Nucleus', 'Stroma', 'Thylakoid membranes', 'Cytoplasm'], answer: 'Thylakoid membranes' },
    { question: 'Which gas is released during photosynthesis?', options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Hydrogen'], answer: 'Oxygen' },
    { question: 'What does the Calvin cycle produce?', options: ['Glucose', 'Oxygen only', 'Water', 'Chlorophyll'], answer: 'Glucose' },
    { question: 'What energy source powers photosynthesis?', options: ['Sound', 'Wind', 'Sunlight', 'Heat from soil'], answer: 'Sunlight' },
  ],
  flashcards: [
    { question: 'What is photosynthesis?', answer: 'The conversion of light energy into chemical energy stored as glucose.' },
    { question: 'What is chlorophyll?', answer: 'The green pigment that absorbs light energy in plant cells.' },
    { question: 'What are the products of photosynthesis?', answer: 'Glucose and oxygen.' },
    { question: 'What is the Calvin cycle?', answer: 'The light-independent stage that uses ATP and NADPH to build sugars.' },
    { question: 'Where does photosynthesis happen?', answer: 'Inside chloroplasts, primarily in plant leaves.' },
  ],
}

function parseResponse(text) {
  const cleaned = text.replace(/```json|```/g, '').trim()
  const start = cleaned.indexOf('{')
  const end = cleaned.lastIndexOf('}')
  return JSON.parse(cleaned.slice(start, end + 1))
}

export async function generateStudyKit(notes) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  if (!apiKey) {
    await new Promise((resolve) => setTimeout(resolve, 900))
    return fallbackResult
  }

  const prompt = `Analyze the following study notes and generate a useful study kit. Return ONLY valid JSON with this exact shape: {"summary":"string","questions":["string"],"mcqs":[{"question":"string","options":["string","string","string","string"],"answer":"string"}],"flashcards":[{"question":"string","answer":"string"}]}. Include exactly five questions, five MCQs with four options each, and five flashcards. Keep the summary concise and accurate. Do not use markdown.\n\nStudy notes:\n${notes}`
  const response = await axios.post(`${endpoint}?key=${apiKey}`, {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { temperature: 0.35, responseMimeType: 'application/json' },
  })
  const text = response.data?.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error('Gemini returned an empty response.')
  return parseResponse(text)
}

export const demoResult = fallbackResult
