export interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface CardProps {
  card: Card;
  onClick: (id: number) => void;
}