/**
 * Interface représentant une carte dans le jeu de mémoire.
 * @interface Card
 * @property {number} id - Identifiant unique de la carte
 * @property {string} value - Valeur/contenu affiché sur la carte (peut être une image, un texte, etc.)
 * @property {boolean} isFlipped - Indique si la carte est retournée face visible (true) ou cachée (false)
 * @property {boolean} isMatched - Indique si la carte a déjà été associée à sa paire correspondante
 */
export interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}