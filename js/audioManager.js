// Gestionnaire audio amélioré
class AudioManager {
  constructor() {
    this.clickSound = document.getElementById('clickSound');
    this.backgroundSound = document.getElementById('backgroundSound');
    this.gameSound = document.getElementById('gameSound');
    this.spellSound = document.getElementById('spellSound');
    this.attackSound = document.getElementById('attackSound');
    this.brutSound = document.getElementById('brutSound');
    this.isAudioEnabled = true;
    this.volume = 0.1;
    this.backgroundVolume = 0.1;
    this.gameVolume = 0.1;
    
    // Initialiser l'audio
    this.initAudio();
  }

  initAudio() {
    if (this.clickSound) {
      this.clickSound.volume = this.volume;
      
      // Gestion des erreurs audio
      this.clickSound.addEventListener('error', (e) => {
        console.warn('Erreur lors du chargement du son de clic:', e);
      });
      
      // Réinitialiser l'audio après la lecture
      this.clickSound.addEventListener('ended', () => {
        this.clickSound.currentTime = 0;
      });
    }

    if (this.spellSound) {
      this.spellSound.volume = this.volume;
      
      // Gestion des erreurs audio
      this.spellSound.addEventListener('error', (e) => {
        console.warn('Erreur lors du chargement du son de clic:', e);
      });
      
      // Réinitialiser l'audio après la lecture
      this.spellSound.addEventListener('ended', () => {
        this.spellSound.currentTime = 0;
      });
    }

    if (this.attackSound) {
      this.attackSound.volume = this.volume;
      
      // Gestion des erreurs audio
      this.attackSound.addEventListener('error', (e) => {
        console.warn('Erreur lors du chargement du son de clic:', e);
      });
      
      // Réinitialiser l'audio après la lecture
      this.attackSound.addEventListener('ended', () => {
        this.attackSound.currentTime = 0;
      });
    }

    if (this.brutSound) {
      this.brutSound.volume = this.volume;
      
      // Gestion des erreurs audio
      this.brutSound.addEventListener('error', (e) => {
        console.warn('Erreur lors du chargement du son de clic:', e);
      });
      
      // Réinitialiser l'audio après la lecture
      this.brutSound.addEventListener('ended', () => {
        this.brutSound.currentTime = 0;
      });
    }

    if (this.backgroundSound) {
      this.backgroundSound.volume = this.backgroundVolume;
      
      // Gestion des erreurs audio pour le son de fond
      this.backgroundSound.addEventListener('error', (e) => {
        console.warn('Erreur lors du chargement du son de fond:', e);
      });
    }

    if (this.gameSound) {
      this.gameSound.volume = this.gameVolume;
      
      // Gestion des erreurs audio pour le son du jeu
      this.gameSound.addEventListener('error', (e) => {
        console.warn('Erreur lors du chargement du son du jeu:', e);
      });
    }
  }

  playClickSound() {
    if (!this.isAudioEnabled || !this.clickSound) return;
    
    try {
      // Réinitialiser l'audio au début pour permettre la lecture multiple
      this.clickSound.currentTime = 0;
      
      // Jouer le son avec gestion de promesse
      const playPromise = this.clickSound.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Erreur lors de la lecture du son:', error);
          // Désactiver l'audio en cas d'erreur persistante
          if (error.name === 'NotAllowedError') {
            this.isAudioEnabled = false;
          }
        });
      }
    } catch (error) {
      console.warn('Erreur lors de la lecture du son:', error);
    }
  }

  playSpeelSound() {
    if (!this.isAudioEnabled || !this.spellSound) return;
    
    try {
      // Réinitialiser l'audio au début pour permettre la lecture multiple
      this.spellSound.currentTime = 0;
      
      // Jouer le son avec gestion de promesse
      const playPromise = this.spellSound.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Erreur lors de la lecture du son:', error);
          // Désactiver l'audio en cas d'erreur persistante
          if (error.name === 'NotAllowedError') {
            this.isAudioEnabled = false;
          }
        });
      }
    } catch (error) {
      console.warn('Erreur lors de la lecture du son:', error);
    }
  }

  playAttackSound() {
    if (!this.isAudioEnabled || !this.attackSound) return;
    
    try {
      // Réinitialiser l'audio au début pour permettre la lecture multiple
      this.attackSound.currentTime = 0;
      
      // Jouer le son avec gestion de promesse
      const playPromise = this.attackSound.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Erreur lors de la lecture du son:', error);
          // Désactiver l'audio en cas d'erreur persistante
          if (error.name === 'NotAllowedError') {
            this.isAudioEnabled = false;
          }
        });
      }
    } catch (error) {
      console.warn('Erreur lors de la lecture du son:', error);
    }
  }

  playBrutSound() {
    if (!this.isAudioEnabled || !this.brutSound) return;
    
    try {
      // Réinitialiser l'audio au début pour permettre la lecture multiple
      this.brutSound.currentTime = 0;
      
      // Jouer le son avec gestion de promesse
      const playPromise = this.brutSound.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Erreur lors de la lecture du son:', error);
          // Désactiver l'audio en cas d'erreur persistante
          if (error.name === 'NotAllowedError') {
            this.isAudioEnabled = false;
          }
        });
      }
    } catch (error) {
      console.warn('Erreur lors de la lecture du son:', error);
    }
  }

  startBackgroundMusic() {
    if (!this.isAudioEnabled || !this.backgroundSound) return;
    
    try {
      // Démuter l'audio et essayer de jouer
      this.backgroundSound.muted = false;
      const playPromise = this.backgroundSound.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Succès - masquer l'overlay
          this.hideAudioPermissionOverlay();
        }).catch(error => {
          // Échec - afficher l'overlay d'autorisation
          if (error.name === 'NotAllowedError') {
            this.showAudioPermissionOverlay();
          }
        });
      }
    } catch (error) {
      // En cas d'erreur, afficher l'overlay
      this.showAudioPermissionOverlay();
    }
  }

  startGameMusic() {
    if (!this.isAudioEnabled || !this.gameSound) return;
    
    try {
      // Démuter l'audio et essayer de jouer
      this.gameSound.muted = false;
      const playPromise = this.gameSound.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Succès - masquer l'overlay
          this.hideAudioPermissionOverlay();
        }).catch(error => {
          // Échec - afficher l'overlay d'autorisation
          if (error.name === 'NotAllowedError') {
            this.showAudioPermissionOverlay();
          }
        });
      }
    } catch (error) {
      // En cas d'erreur, afficher l'overlay
      this.showAudioPermissionOverlay();
    }
  }

  showAudioPermissionOverlay() {
    const dialog = document.getElementById('audioPermissionOverlay');
    if (dialog && dialog.tagName === 'DIALOG') {
      dialog.showModal();
    }
  }

  hideAudioPermissionOverlay() {
    const dialog = document.getElementById('audioPermissionOverlay');
    if (dialog && dialog.tagName === 'DIALOG') {
      dialog.close();
    }
  }

  // Faire un fondu du volume de la musique de fond
  fadeOutBackgroundMusic(duration = 3000) {
    if (!this.backgroundSound || !this.isAudioEnabled) return;
    
    const startVolume = this.backgroundSound.volume;
    const targetVolume = 0;
    const steps = 60; // 60 étapes pour un fondu fluide
    const stepDuration = duration / steps;
    const volumeStep = startVolume / steps;
    
    let currentStep = 0;
    
    const fadeInterval = setInterval(() => {
      currentStep++;
      
      if (currentStep >= steps) {
        // Fin du fondu
        this.backgroundSound.volume = targetVolume;
        clearInterval(fadeInterval);
      } else {
        // Réduire le volume progressivement
        this.backgroundSound.volume = Math.max(0, startVolume - (volumeStep * currentStep));
      }
    }, stepDuration);
  }

  // Faire un fondu du volume de la musique du jeu
  fadeOutGameMusic(duration = 3000) {
    if (!this.gameSound || !this.isAudioEnabled) return;
    
    const startVolume = this.gameSound.volume;
    const targetVolume = 0;
    const steps = 60; // 60 étapes pour un fondu fluide
    const stepDuration = duration / steps;
    const volumeStep = startVolume / steps;
    
    let currentStep = 0;
    
    const fadeInterval = setInterval(() => {
      currentStep++;
      
      if (currentStep >= steps) {
        // Fin du fondu
        this.gameSound.volume = targetVolume;
        clearInterval(fadeInterval);
      } else {
        // Réduire le volume progressivement
        this.gameSound.volume = Math.max(0, startVolume - (volumeStep * currentStep));
      }
    }, stepDuration);
  }

  // Restaurer le volume de la musique de fond
  restoreBackgroundMusicVolume() {
    if (!this.backgroundSound || !this.isAudioEnabled) return;
    
    this.backgroundSound.volume = this.backgroundVolume;
  }

  // Restaurer le volume de la musique du jeu
  restoreGameMusicVolume() {
    if (!this.gameSound || !this.isAudioEnabled) return;
    
    this.gameSound.volume = this.gameVolume;
  }
}

// Instance globale du gestionnaire audio
const audioManager = new AudioManager();