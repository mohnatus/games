import { useState } from "react";

export function useScores() {
  const [turn, setTurn] = useState(0);
  const [scores, setScores] = useState(0);

  return {
    turn,
    scores,
    nextTurn() {
      setTurn((state) => state + 1);
    },
    addScore() {
      setScores((state) => state + 1);
    },
    reset() {
      setTurn(0);
      setScores(0);
    }
  };
}
