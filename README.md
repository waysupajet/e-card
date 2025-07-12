# 🐱 Cat Care Game - เกมดูแลแมวน่ารัก

A cute cat care game built with Google Apps Script where a boy named Tommy takes care of adorable cats!

## 🎮 Game Features

- **3 Cute Cats**: Each with unique personalities and colors
  - 🐱 Whiskers (Red)
  - 🐱 Mittens (Teal)
  - 🐱 Shadow (Blue)

- **Care Activities**:
  - 🍖 Feed cats to reduce hunger
  - 🧸 Play with cats to increase happiness
  - 🍪 Give treats for extra happiness and hunger reduction

- **Shop System**: Buy items with coins earned from caring for cats
- **Progress Tracking**: Happiness and hunger levels for each cat
- **Auto-save**: Game state is automatically saved

## 📋 Setup Instructions

### 1. Create a New Google Apps Script Project
1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Give your project a name (e.g., "Cat Care Game")

### 2. Add the Code Files

#### Code.gs (Server-side code)
1. Replace the default `Code.gs` content with the code from `Code.gs` in this project
2. This handles game logic, data storage, and server functions

#### index.html (Client-side interface)
1. Create a new HTML file by clicking "+" → "HTML file"
2. Name it `index`
3. Replace the content with the code from `index.html` in this project

### 3. Deploy as Web App
1. Click "Deploy" → "New deployment"
2. Choose "Web app" as the type
3. Set the following options:
   - **Description**: Cat Care Game
   - **Execute as**: Me
   - **Who has access**: Anyone (or "Anyone with Google account" for more security)
4. Click "Deploy"
5. Copy the web app URL provided

### 4. Test the Game
1. Open the web app URL in your browser
2. The game should load with Tommy and his three cats
3. Try feeding, playing, and giving treats to the cats
4. Buy items from the shop when you run out

## 🎯 How to Play

1. **Take Care of Cats**: Each cat has happiness and hunger levels
2. **Feed Cats**: Use food to reduce hunger (+5 coins)
3. **Play with Cats**: Use toys to increase happiness (+8 coins)
4. **Give Treats**: Use treats for maximum happiness boost (+10 coins)
5. **Shop**: Buy more items when you run out
6. **Earn Coins**: Taking care of cats gives you coins to buy more items

## 🔧 Game Mechanics

- **Happiness**: 0-100% (higher is better)
- **Hunger**: 0-100% (lower is better)
- **Coins**: Earned by caring for cats
- **Items**: Food (5 coins), Toys (10 coins), Treats (15 coins)

## 🎨 Features

- **Responsive Design**: Works on mobile and desktop
- **Cute Emojis**: Cat faces, food, toys, and treats
- **Smooth Animations**: Hover effects and transitions
- **Auto-save**: Game progress is saved automatically
- **Real-time Updates**: Cats' stats update as you interact

## 🛠️ Technical Details

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Google Apps Script (JavaScript)
- **Storage**: Google Apps Script Properties Service
- **Deployment**: Google Apps Script Web App

## 🌟 Tips for Players

1. Keep cats happy and fed for maximum coin rewards
2. Buy treats for the best happiness boost
3. Use the shop strategically to maintain supplies
4. Check back regularly - cats get hungrier over time!

## 🔄 Updates and Customization

You can customize the game by:
- Adding more cats in the `getInitialGameState()` function
- Changing cat names and colors
- Adjusting coin rewards and item prices
- Adding new items or activities

## 🚀 Enjoy the Game!

Have fun taking care of Tommy's adorable cats! 🐱💕

---

*Created with love for cat enthusiasts everywhere!*