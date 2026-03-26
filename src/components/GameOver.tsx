import React from 'react';
import { Trophy, RotateCcw } from 'lucide-react';
//Cette ligne importe deux icônes de la bibliothèque Lucide React

interface GameOverProps {
  score: number;
  moves: number;
  onRestart: () => void;
}

/**
 * Composant qui affiche l'écran de fin de partie avec le score et les mouvements.
 * 
 * @component
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {number} props.score - Le score final du joueur
 * @param {number} props.moves - Le nombre total de coups joués
 * @param {() => void} props.onRestart - Fonction de callback appelée pour redémarrer le jeu
 * 
 * @returns {JSX.Element} Un modal centré qui affiche :
 * - Une icône de trophée
 * - Un message de félicitations
 * - Le score final
 * - Le nombre de coups joués
 * - Un bouton pour recommencer la partie
 * 
 * @example
 * <GameOver 
 *   score={1000}
 *   moves={25}
 *   onRestart={() => startNewGame()}
 * />
 */
export function GameOver({ score, moves, onRestart }: GameOverProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl p-8 text-center transform animate-fadeIn shadow-2xl">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-purple-600 mb-6">
          Félicitations ! 🎉
        </h2>
        <div className="mb-6 space-y-2">
          <p className="text-xl text-gray-700">Score final : {score}</p>
          <p className="text-xl text-gray-700">Nombre de coups : {moves}</p>
        </div>
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-purple-600 to-blue-500 
            text-white px-8 py-3 rounded-xl
            hover:from-purple-700 hover:to-blue-600
            transform transition-all duration-200
            hover:scale-105 flex items-center gap-2 mx-auto"
        >
          <RotateCcw className="w-5 h-5" />
          Rejouer
        </button>
      </div>
    </div>
  );
}