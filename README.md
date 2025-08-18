# Integer Operations Game

This is an interactive Next.js app for practicing integer addition and subtraction using a visual number line and a character named Stacy. The app is designed for educational purposes and features sound, background images, and dynamic questions.
Visit the deployed version here: https://integer-operations.vercel.app/
## Features

- **Interactive Number Line:** Click on the number line to move Stacy to the answer.
- **Dynamic Questions:** Generate random addition and subtraction questions.
- **Visual Feedback:** Stacy's icon changes based on correct or incorrect answers.
- **Sound Effects:** Background music plays when the page loads.
- **Responsive Design:** Styled with Tailwind CSS and custom backgrounds.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Next.js](https://nextjs.org/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/integer_operations_game.git
   cd integer_operations_game
   ```

2. **Install dependencies:**
   ```bash
   npx next install
   # or
   yarn install
   ```

3. **Add assets:**
   - Place your character images (`questioning.png`, `right_answer.png`, `wrong_answer.png`) and background image (`background1.png`) in the `public` folder.
   - Place your sound file (`bgm_9am.mp3`) in the `public` folder.

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
  app/
    page.tsx         # Main app logic and UI
    layout.tsx       # Global layout and fonts
  public/
    charIcon images  # Character images
    background1.png  # Background image
    bgm_9am.mp3      # Sound file
```

## Deployment

This app is ready to deploy on [Vercel](https://vercel.com/).  

## Customization

- **Questions:** Modify the logic in `generateQuestion()` in `page.tsx`.
- **Character Images:** Update the image files in the `public` folder.
- **Sound:** Replace `bgm_9am.mp3` with your own audio file.

## License

MIT

## Credits

- Character and background images: © Nintendo / Animal Crossing (for educational demo only)
- Sound: Replace with your own or use royalty
