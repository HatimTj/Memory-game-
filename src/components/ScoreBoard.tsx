import React from 'react';
import { Timer } from './Timer';
import { Trophy, Move, RotateCcw } from 'lucide-react';

//utilisé pour afficher le temps écoulé dans le jeu 

interface ScoreBoardProps {
  score: number;
  moves: number;
  seconds: number;
  onNewGame: () => void;
}

export function ScoreBoard({ score, moves, seconds, onNewGame }: ScoreBoardProps) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
        Jeu de Mémoire
      </h1>
      {/* Section du tableau de score avec 3 indicateurs alignés horizontalement */}
      <div className="flex justify-center items-center gap-6 mb-4">
        {/* Affichage du score avec une icône de trophée */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
          <Trophy className="text-yellow-300 w-6 h-6" />
          <p className="text-white text-xl">
        Score: {score}
          </p>
        </div>
        {/* Affichage du nombre de coups joués avec une icône de mouvement */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3">
          <Move className="text-white w-6 h-6" />
          <p className="text-white text-xl">
        Coups: {moves}
          </p>
        </div>
        {/* Composant Timer qui affiche le temps écoulé */}
        <Timer seconds={seconds} />
      </div>
      <button
        onClick={onNewGame}
        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 
          text-white px-6 py-2 rounded-xl
          transform transition-all duration-200
          hover:scale-105 flex items-center gap-2 mx-auto"
      >
        <RotateCcw className="w-5 h-5" />
        Nouvelle Partie
      </button>
    </div>
  );
}