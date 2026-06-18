# Article Summarizer

An AI-powered Article Summarizer built using **HTML**, **CSS**, and **JavaScript**. The application allows users to paste lengthy articles and instantly generate concise summaries, bullet points, key facts, and sentiment analysis using Google's Gemini API.

---

## Overview

The Article Summarizer is designed to help users quickly understand long articles without reading the entire content.

Users can paste any article into the text area and choose the summary length (Short or Detailed). The application then uses the Gemini API to generate:

* A brief TLDR summary
* Important bullet points
* Key facts from the article
* Overall sentiment analysis

The application also displays the word count of the article and allows users to copy the generated summary easily.

---

## Features

* Paste articles of any length
* Real-time word count
* Choose summary length:

  * Short
  * Detailed
* AI-generated TLDR summary
* Important bullet points extraction
* Key facts generation
* Sentiment analysis
* Copy summary to clipboard
* Responsive and easy-to-use interface

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Google Gemini API
* Fetch API

---

## AI Integration

The application uses **Google Gemini API** to analyze the article and generate:

* Concise summaries
* Important bullet points
* Key facts
* Sentiment analysis

The AI response is processed and displayed in a structured format for better readability.

---

## Project Structure

```text
Article-Summarizer/

├── index.html
├── style.css
├── script.js
├── .gitignore
├── .env.example
└── README.md
```

---

## Setup Instructions

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Open `script.js`.

4. Replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with your own Gemini API key.

5. Open `index.html` in your browser.

---

## Note

For security reasons, the actual Gemini API key is **not included** in this repository.

The `.env.example` file is provided as a sample configuration file.

---

## Future Improvements

* Upload articles as PDF or TXT files
* Save summary history
* Export summaries as PDF
* Dark mode support
* Multi-language summarization
* Voice input and speech output
