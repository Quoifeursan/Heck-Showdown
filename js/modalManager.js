// Gestionnaire de modales
class ModalManager {
  constructor() {
    this.modals = {};
    this.initModals();
  }

  // Initialiser les modales
  initModals() {
    // Récupérer toutes les modales (rules et ranking)
    const modalElements = document.querySelectorAll('.rules-modal, .ranking-modal');
    modalElements.forEach(modal => {
      this.modals[modal.id] = modal;
    });
  }

  // Afficher une modale
  showModal(modalId) {
    audioManager.playClickSound();
    const modal = this.modals[modalId];
    if (modal) {
      modal.showModal();
    }
  }

  // Fermer une modale
  closeModal(modalId) {
    audioManager.playClickSound();
    const modal = this.modals[modalId];
    if (modal) {
      modal.close();
      // Retirer le focus du bouton pour éviter la fermeture par Espace
      if (document.activeElement) {
        document.activeElement.blur();
      }
    }
  }

  // Fermer toutes les modales
  closeAllModals() {
    Object.values(this.modals).forEach(modal => {
      modal.close();
    });
  }

  // Afficher les règles
  showRules() {
    this.showModal('rules');
  }

  // Afficher l'histoire
  showRanking() {
    this.showModal('ranking');
  }

  // Fermer les règles
  closeRules() {
    this.closeModal('rules');
  }

  // Fermer l'histoire
  closeRanking() {
    this.closeModal('ranking');
  }
}

// Instance globale du gestionnaire de modales
const modalManager = new ModalManager();