import React from 'react';
import { Clock } from 'lucide-react'; 

// Importe l'icône d'horloge de la bibliothèque lucide-react

// Interface définissant les propriétés du composant Timer
interface TimerProps {
  seconds: number; // Nombre total de secondes à afficher
}

export function Timer({ seconds }: TimerProps) {
  // Calcul des minutes en divisant les secondes par 60
  const minutes = Math.floor(seconds / 60);
  // Calcul des secondes restantes avec l'opérateur modulo
  const remainingSeconds = seconds % 60;
  
  return (
    // Conteneur principal avec effet de flou et fond semi-transparent
    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 flex items-center gap-3">
      {/* Icône d'horloge en blanc */}
      <Clock className="text-white w-6 h-6" />
      {/* Affichage du temps au format MM:SS */}
      <span className="text-white text-xl font-mono">
        {/* Ajoute un zéro devant si nécessaire pour les minutes */}
        {String(minutes).padStart(2, '0')}:
        {/* Ajoute un zéro devant si nécessaire pour les secondes */}
        {String(remainingSeconds).padStart(2, '0')}
      </span>
    </div>
  );
}