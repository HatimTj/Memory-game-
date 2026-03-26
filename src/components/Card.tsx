import React from 'react';
import { CardProps } from '../types/card';

/**
 * Composant Card - Représente une carte de jeu de mémoire
 * @param card - Objet contenant les propriétés de la carte (id, value, isMatched, isFlipped)
 * @param onClick - Fonction appelée lors du clic sur la carte
 */
export function Card({ card, onClick }: CardProps) {
  return (
    // Conteneur principal - Bouton cliquable représentant la carte
    <button
      onClick={() => onClick(card.id)}
      className={`
        /* Styles de base */
        w-full aspect-square rounded-xl
        
        /* Animation de transition */
        transform transition-all duration-500
        
        /* Effet d'agrandissement au survol */
        hover:scale-105
        
        /* Apparence conditionnelle de la carte */
        ${card.isMatched || card.isFlipped 
          ? 'bg-white shadow-lg rotate-y-180' // Carte retournée ou appariée
          : 'bg-gradient-to-br from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-xl'} // Carte face cachée
        
        /* Animation pulse pour les paires trouvées */
        ${card.isMatched ? 'animate-pulse' : ''}
      `}
      // Désactive l'interaction quand la carte est retournée ou appariée
      disabled={card.isMatched || card.isFlipped}
    >
      {/* Zone d'affichage de la valeur de la carte */}
      <span className={`
        /* Style du contenu */
        text-5xl
        
        /* Animation de la valeur */
        transition-all duration-500
        
        /* Visibilité conditionnelle de la valeur */
        ${card.isMatched || card.isFlipped ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
      `}>
        {card.value}
      </span>
    </button>
  );
}