import styled from 'styled-components';
import { getRandomColor } from '../utils/getRandomColor';
import Color from './Color';

const Container = styled.div`
  .description {
    margin-bottom: ${props => props.theme.space[3]}px;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: center;
  margin: -${props => props.theme.space[1]}px;
`;
const Card = styled.div`
  flex-shrink: 0;
  padding: ${props => props.theme.space[1]}px;

  .label {
    margin-bottom: ${props => props.theme.space[1]}px;
    font-size: ${props => props.theme.fontSize.label};
    color: ${props => props.theme.colors.service};
  }
`;

function ViewLevel1({ colorValue, colorName }) {
  return (
    <Container>
      <div className="description">Совпадают ли название и значение цвета?</div>

      <Cards>
        <Card>
          <Color text={colorName[1]} color={colorValue[0]} />
        </Card>
      </Cards>
    </Container>
  );
}

function ViewLevel2({ colorValue, colorName }) {
  const randomColor = getRandomColor();

  return (
    <Container>
       <div className="description">Совпадают ли название и значение цвета?</div>

      <Cards>
        <Card>
          <div className="label">Значение:</div>
          <Color text={colorName[1]} color={randomColor[0]} />
        </Card>
        <Card>
          <div className="label">Цвет:</div>
          <Color text={randomColor[1]} color={colorValue[0]} />
        </Card>
      </Cards>
    </Container>
  );
}

export default function View({ colorValue, colorName, level}) {
  return (
    <div>
      {level > 1 ? (
        <ViewLevel2 colorValue={colorValue} colorName={colorName} />
      ) : (
        <ViewLevel1 colorValue={colorValue} colorName={colorName} />
      )}
    </div>
  )
}
