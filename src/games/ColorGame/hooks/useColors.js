import { useState, useCallback } from "react";
import { getRandomColor } from "../utils/getRandomColor";

export function useColors() {
  const [colorValue, setColorValue] = useState();
  const [colorName, setColorName] = useState();
  const [match, setMatch] = useState(false);

  if (!colorValue) {
    const value = getRandomColor();
    const name = getRandomColor();
    setColorValue(value);
    setColorName(name);
    setMatch(value[0] === name[0]);
  }

  const update = useCallback(() => {
    const value = getRandomColor();
    const name = getRandomColor();
    setColorValue(value);
    setColorName(name);
    setMatch(value[0] === name[0]);
  }, [setColorValue, setColorName, setMatch]);

  return {
    colorValue,
    colorName,
    match,
    update
  };
}
