import { useCallback, useState } from 'react';
import { useColors } from './hooks/useColors';
import { useScores } from '@/Game/hooks/useScores';
import { useKeyboardBinding } from '@/Game/hooks/useKeyboardBinding';
import Complexity from '@/Game/components/Complexity';
import Scores from '@/Game/components/Scores';
import View from './components/View';
import Choice from './components/Choice';
import styled from 'styled-components';

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.space[3]}px;
`;

const Buttons = styled.div`
  margin-top: ${props => props.theme.space[3]}px;
`

export default function ColorGame() {
  const [level, setLevel] = useState(1);
  const { turn, scores, nextTurn, addScore, reset } = useScores();
  const { colorValue, colorName, match, update } = useColors();

  const changeLevel = useCallback(
    (value) => {
      setLevel(value);
      reset();
    },
    [setLevel, reset]
  );

  const handleChoice = useCallback(
    (value) => {
      if ((match && value) || (!match && !value)) {
        addScore();
      }
      update();
      nextTurn();
    },
    [update, addScore, nextTurn, match]
  );

  useKeyboardBinding(['ArrowRight', 'ArrowLeft'], (key) => {
    if (key === 'ArrowRight') {
      handleChoice(true);
    } else if (key === 'ArrowLeft') {
      handleChoice(false);
    }
  });

  return (
    <div>
      <Panel>
        <Scores scores={scores} total={turn} />
        <Complexity
          levels={[
            { id: 1, name: 'Попроще' },
            { id: 2, name: 'Посложнее' }
          ]}
          level={level}
          setLevel={changeLevel}
        />
      </Panel>

      <View level={level} colorValue={colorValue} colorName={colorName} />

      <Buttons>
        <Choice handleChoice={handleChoice} />
      </Buttons>
    </div>
  );
}
