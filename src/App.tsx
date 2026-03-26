import React from 'react';
import { GameBoard } from './components/GameBoard';
import { ScoreBoard } from './components/ScoreBoard';
import { GameOver } from './components/GameOver';
import { useMemoryGame } from './hooks/useMemoryGame';

// Composant principal de l'application de jeu de mémoire
function App() {
  // Utilisation du hook personnalisé useMemoryGame qui gère toute la logique du jeu
  const {
    cards,        // État des cartes du jeu
    score,        // Score actuel du joueur
    moves,        // Nombre de coups joués
    seconds,      // Temps écoulé en secondes
    isGameComplete, // Indique si le jeu est terminé
    handleCardClick, // Fonction pour gérer le clic sur une carte
    initializeGame,  // Fonction pour démarrer une nouvelle partie
  } = useMemoryGame();

  return (
    // Container principal avec un fond dégradé violet/bleu
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Affichage du tableau de score avec les statistiques actuelles */}
        <ScoreBoard 
          score={score} 
          moves={moves} 
          seconds={seconds} 
          onNewGame={initializeGame}
        />
        {/* Plateau de jeu contenant les cartes */}
        <GameBoard cards={cards} onCardClick={handleCardClick} />
        {/* Affichage de l'écran de fin de partie si le jeu est terminé */}
        {isGameComplete && (
          <GameOver
            score={score}
            moves={moves}
            onRestart={initializeGame}
          />
        )}
      </div>
    </div>
  );
}

export default App;