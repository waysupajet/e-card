// Google Apps Script - Cat Care Game
// เกมดูแลแมวน่ารัก

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Cat Care Game - เกมดูแลแมวน่ารัก')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Game state management
function getInitialGameState() {
  return {
    boyName: 'Tommy',
    cats: [
      { id: 1, name: 'Whiskers', happiness: 50, hunger: 30, color: '#FF6B6B' },
      { id: 2, name: 'Mittens', happiness: 40, hunger: 40, color: '#4ECDC4' },
      { id: 3, name: 'Shadow', happiness: 60, hunger: 20, color: '#45B7D1' }
    ],
    coins: 100,
    level: 1,
    items: {
      food: 10,
      toys: 5,
      treats: 3
    }
  };
}

function saveGameState(gameState) {
  try {
    const properties = PropertiesService.getUserProperties();
    properties.setProperty('catGameState', JSON.stringify(gameState));
    return { success: true };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function loadGameState() {
  try {
    const properties = PropertiesService.getUserProperties();
    const savedState = properties.getProperty('catGameState');
    
    if (savedState) {
      return JSON.parse(savedState);
    } else {
      return getInitialGameState();
    }
  } catch (error) {
    return getInitialGameState();
  }
}

function feedCat(catId) {
  try {
    const gameState = loadGameState();
    const cat = gameState.cats.find(c => c.id === catId);
    
    if (cat && gameState.items.food > 0) {
      cat.hunger = Math.max(0, cat.hunger - 20);
      cat.happiness = Math.min(100, cat.happiness + 10);
      gameState.items.food--;
      gameState.coins += 5;
      
      saveGameState(gameState);
      return { success: true, gameState: gameState };
    }
    
    return { success: false, message: 'Not enough food!' };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function playCat(catId) {
  try {
    const gameState = loadGameState();
    const cat = gameState.cats.find(c => c.id === catId);
    
    if (cat && gameState.items.toys > 0) {
      cat.happiness = Math.min(100, cat.happiness + 15);
      cat.hunger = Math.min(100, cat.hunger + 5);
      gameState.items.toys--;
      gameState.coins += 8;
      
      saveGameState(gameState);
      return { success: true, gameState: gameState };
    }
    
    return { success: false, message: 'No toys available!' };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function giveTreat(catId) {
  try {
    const gameState = loadGameState();
    const cat = gameState.cats.find(c => c.id === catId);
    
    if (cat && gameState.items.treats > 0) {
      cat.happiness = Math.min(100, cat.happiness + 25);
      cat.hunger = Math.max(0, cat.hunger - 10);
      gameState.items.treats--;
      gameState.coins += 10;
      
      saveGameState(gameState);
      return { success: true, gameState: gameState };
    }
    
    return { success: false, message: 'No treats available!' };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function buyItem(itemType) {
  try {
    const gameState = loadGameState();
    const prices = { food: 5, toys: 10, treats: 15 };
    
    if (gameState.coins >= prices[itemType]) {
      gameState.coins -= prices[itemType];
      gameState.items[itemType]++;
      
      saveGameState(gameState);
      return { success: true, gameState: gameState };
    }
    
    return { success: false, message: 'Not enough coins!' };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

function resetGame() {
  try {
    const properties = PropertiesService.getUserProperties();
    properties.deleteProperty('catGameState');
    return { success: true, gameState: getInitialGameState() };
  } catch (error) {
    return { success: false, error: error.toString() };
  }
}

// Auto-update cats every hour (cats get hungrier over time)
function updateCats() {
  try {
    const gameState = loadGameState();
    
    gameState.cats.forEach(cat => {
      cat.hunger = Math.min(100, cat.hunger + 5);
      cat.happiness = Math.max(0, cat.happiness - 2);
    });
    
    saveGameState(gameState);
  } catch (error) {
    console.error('Error updating cats:', error);
  }
}