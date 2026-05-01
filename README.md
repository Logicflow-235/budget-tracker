
# Budget Tracker

A lightweight, client-side expense tracking app built with vanilla JavaScript. No frameworks, no dependencies — just clean HTML, CSS and JS with localStorage for persistence.

## Features

- Add expenses with a name, category, and amount
- Real-time spending breakdown by category with animated bar indicators
- Running grand total updated on every entry
- Data persists across sessions via localStorage
- Delete and edit existing expenses
- Zero backend — runs entirely in the browser

## Tech Stack

- HTML5
- CSS3 (custom properties, grid, flexbox, keyframe animations)
- Vanilla JavaScript (CRUD, localStorage, DOM manipulation)

## Getting Started

Clone the repo and open `budget-tracker.html` in your browser — no build step, no installs.

```bash
git clone https://github.com/yourusername/budget-tracker.git
cd budget-tracker
open budget-tracker.html
```

Or host it on any static hosting platform — GitHub Pages, Netlify, Vercel.

## How It Works

Expenses are stored as an array of objects in localStorage:

```json
[
  { "name": "Lunch", "category": "food", "amount": "450" },
  { "name": "Uber", "category": "transport", "amount": "300" }
]
```

On every add, edit, or delete the UI re-renders from the source of truth in localStorage — no stale state.

Category bar widths are calculated as a percentage of the grand total:

```js
barFood.style.width = (foodTotal / grandTotal) * 100 + "%";
```

## Project Structure

```
budget-tracker/
├── budget-tracker.html   # markup and layout
├── style.css             # theming, grid, animations
├── script.js             # CRUD logic, localStorage, DOM updates
└── README.md
```

## License

MIT
