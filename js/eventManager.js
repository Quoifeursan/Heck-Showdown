// Gestionnaire d'événements
class EventManager {
  constructor() {
    this.buttons = {};
    this.initButtons();
  }

  // Initialiser les boutons
  initButtons() {
    // Boutons principaux
    this.buttons.playButton = document.getElementById('playButton');
    this.buttons.rulesButton = document.getElementById('rulesButton');
    this.buttons.rankingButton = document.getElementById('rankingButton');
    
    // Boutons de fermeture des modales
    this.buttons.closeRulesButton = document.getElementById('closeRulesButton');
    this.buttons.closeRankingButton = document.getElementById('closeRankingButton');
    
    // Boutons audio
    this.buttons.enableAudioButton = document.getElementById('enableAudioButton');
    this.buttons.closeAudioModalButton = document.getElementById('closeAudioModalButton');
  }

  // Initialiser tous les event listeners
  initEventListeners() {
    this.initMainButtonListeners();
    this.initModalButtonListeners();
    this.initAudioButtonListeners();
  }

  // Initialiser les event listeners des boutons principaux
  initMainButtonListeners() {
    if (this.buttons.playButton) {
      this.buttons.playButton.addEventListener('click', () => {
        navigationManager.startGame();
      });
    }
    
    if (this.buttons.rulesButton) {
      this.buttons.rulesButton.addEventListener('click', () => {
        modalManager.showRules();
      });
    }
    
    if (this.buttons.rankingButton) {
      this.buttons.rankingButton.addEventListener('click', () => {
        modalManager.showRanking();
      });
    }
  }

  // Initialiser les event listeners des boutons de modales
  initModalButtonListeners() {
    if (this.buttons.closeRulesButton) {
      this.buttons.closeRulesButton.addEventListener('click', () => {
        modalManager.closeRules();
      });
    }
    
    if (this.buttons.closeRankingButton) {
      this.buttons.closeRankingButton.addEventListener('click', () => {
        modalManager.closeRanking();
      });
    }
  }

  // Initialiser les event listeners des boutons audio
  initAudioButtonListeners() {
    if (this.buttons.enableAudioButton) {
      this.buttons.enableAudioButton.addEventListener('click', () => {
        audioManager.playClickSound();
        // Démarrer la musique appropriée selon la page
        if (window.location.pathname.includes('game.html')) {
          audioManager.startGameMusic();
        } else {
          audioManager.startBackgroundMusic();
        }
      });
    }
    
    if (this.buttons.closeAudioModalButton) {
      this.buttons.closeAudioModalButton.addEventListener('click', () => {
        audioManager.playClickSound();
        audioManager.hideAudioPermissionOverlay();
      });
    }
  }

}

// Instance globale du gestionnaire d'événements
const eventManager = new EventManager();
