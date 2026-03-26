import React from 'react';
import { Card } from './Card';
import type { Card as CardType } from '../types/card';


//GameBoard affiche une grille de cartes jouables sur le plateau de jeu. 

interface GameBoardProps {
  cards: CardType[];
  onCardClick: (id: number) => void;
}

/**
 * Un composant qui affiche une grille de cartes jouables.
 * 
 * @component
 * @param {Object} props - Les propriétés du composant
 * @param {Card[]} props.cards - Tableau des cartes à afficher dans la grille
 * @param {(card: Card) => void} props.onCardClick - Fonction de rappel appelée lors du clic sur une carte
 * @returns {JSX.Element} Une grille responsive de cartes avec un effet de flou en arrière-plan
 */
export function GameBoard({ cards, onCardClick }: GameBoardProps) {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8 p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
      {cards.map(card => (
        <Card key={card.id} card={card} onClick={onCardClick} />
      ))}
    </div>
  );
}