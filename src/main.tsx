// Importation des dépendances nécessaires
import { StrictMode } from 'react'; // Import du mode strict de React
import { createRoot } from 'react-dom/client'; // Import de la méthode de rendu React 18
import App from './App.tsx'; // Import du composant principal de l'application
import './index.css'; // Import des styles globaux

// Création et rendu de l'application React
createRoot(document.getElementById('root')!).render(
  // StrictMode active des vérifications supplémentaires pour le développement
  <StrictMode>
    {/* Rendu du composant principal App */}
    <App />
  </StrictMode>
);
