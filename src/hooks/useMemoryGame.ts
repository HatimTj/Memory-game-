import { useState, useEffect } from 'react';
import type { Card } from '../types/card';
//useState : hook est utilisé pour créer et gérer des états dans le jeu.  
//useEffect : Ce hook est exécuté une fois lorsque le composant est monté pour initialiser le jeu 
// Définition des paires de cartes utilisées dans le jeu
const CARD_PAIRS = ['🌟', '🌙', '🌍', '🌈', '🦋', '🌺', '🍀', '🎨'];

/**
 * Hook personnalisé `useMemoryGame`
 * Gère l'état et la logique du jeu de mémoire
 */
export function useMemoryGame() {
  // Déclaration des états du jeu
  const [cards, setCards] = useState<Card[]>([]); // Liste des cartes du jeu
  const [flippedCards, setFlippedCards] = useState<number[]>([]); // Cartes actuellement retournées
  const [score, setScore] = useState(0); // Score du joueur
  const [moves, setMoves] = useState(0); // Nombre de coups joués
  const [seconds, setSeconds] = useState(0); // Temps écoulé en secondes
  const [isPlaying, setIsPlaying] = useState(false); // Indique si la partie est en cours

  /**
   * useEffect qui s'exécute une seule fois au montage du composant
   * Initialise le jeu en appelant `initializeGame`
   */
  useEffect(() => {
    initializeGame();
  }, []);

  /**
   * useEffect qui met à jour le compteur de temps
   * Démarre un intervalle qui incrémente `seconds` chaque seconde si `isPlaying` est vrai
   * Nettoie l'intervalle lorsqu'on quitte la partie
   */
  useEffect(() => {
    let timer: number; // Déclaration d'une variable pour stocker l'ID de l'intervalle

    if (isPlaying) { // Vérifie si le jeu est en cours
      timer = window.setInterval(() => { 
        setSeconds(s => s + 1); // Incrémente le compteur de secondes toutes les 1000 ms (1 seconde)
      }, 1000);
    }
    return () => clearInterval(timer); // Nettoie l'intervalle lorsque `isPlaying` devient `false` ou que le composant est démonté
}, [isPlaying]); // Ce useEffect s'exécute à chaque changement de `isPlaying`


  /**
   * Fonction pour initialiser une nouvelle partie
   * Mélange les cartes et réinitialise tous les états du jeu
   */
  const initializeGame = () => {
    const initialCards: Card[] = [...CARD_PAIRS, ...CARD_PAIRS] // Création des paires
      .map((value, index) => ({
        id: index, // Identifiant unique de la carte
        value, // Valeur de la carte (emoji)
        isFlipped: false, // Indique si la carte est retournée
        isMatched: false // Indique si la carte a été appariée
      }))
      .sort(() => Math.random() - 0.5); // Mélange aléatoire des cartes

    // Réinitialisation des états du jeu
    setCards(initialCards);
    setFlippedCards([]);
    setScore(0);
    setMoves(0);
    setSeconds(0);
    setIsPlaying(true);
  };

  /**
   * Fonction qui gère le clic sur une carte
   * Vérifie si la carte peut être retournée, puis met à jour l'état du jeu
   */
  const handleCardClick = (clickedCardId: number) => {
    const clickedCard = cards.find(card => card.id === clickedCardId);

    // Vérifie si la carte est déjà appariée ou retournée
    if (!clickedCard || clickedCard.isMatched || flippedCards.includes(clickedCardId)) {
      return;
    }

    // Met à jour l'état des cartes pour retourner la carte sélectionnée
    setCards(prevCards => 
      prevCards.map(card => 
        card.id === clickedCardId
          ? { ...card, isFlipped: true }
          : card
      )
    );

    // Ajoute la carte retournée à la liste `flippedCards`
    const newFlippedCards = [...flippedCards, clickedCardId];
    setFlippedCards(newFlippedCards);

    // Si deux cartes sont retournées, vérifie si elles forment une paire
    if (newFlippedCards.length === 2) {
      setMoves(prev => prev + 1); // Incrémente le nombre de coups

      const [firstCardId, secondCardId] = newFlippedCards;
      const firstCard = cards.find(card => card.id === firstCardId);
      const secondCard = cards.find(card => card.id === secondCardId);

      // Si les cartes correspondent, elles restent appariées et le score augmente
      if (firstCard?.value === secondCard?.value) {
        setCards(cards.map(card => 
          card.id === firstCardId || card.id === secondCardId
            ? { ...card, isMatched: true }
            : card
        ));
        setScore(prev => prev + 10);
        setFlippedCards([]); // Réinitialise la sélection
      } else {
        // Si elles ne correspondent pas, les retourner après un délai de 1 seconde
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.id === firstCardId || card.id === secondCardId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]); // Réinitialise la sélection
        }, 1000);
      }
    }
  };

  /**
   * Vérifie si toutes les cartes sont appariées, indiquant que le jeu est terminé
   */
  const isGameComplete = cards.length > 0 && cards.every(card => card.isMatched);

  /**
   * useEffect qui met fin au jeu lorsque toutes les cartes sont appariées
   */
  useEffect(() => {
    if (isGameComplete) {
      setIsPlaying(false);
    }
  }, [isGameComplete]);

  /**
   * Retourne les états et les fonctions nécessaires pour gérer le jeu
   */
  return {
    cards,
    score,
    moves,
    seconds,
    isGameComplete,
    handleCardClick,
    initializeGame,
  };
}
