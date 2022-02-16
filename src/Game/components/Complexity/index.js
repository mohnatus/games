import styled from 'styled-components';
import Level from './Level';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Label = styled.span`
  margin-right: ${(props) => props.theme.space[2]}px;
`;

const StyledLevel = styled(Level)`
  margin-right: ${(props) => props.theme.space[2]}px;
  display: block;
`;

export default function Complexity({ levels, level, setLevel }) {
  return (
    <Container>
      <Label className='label'>Уровень сложности:</Label>

      {levels.map(({ id, name }) => (
        <StyledLevel
          key={id}
          id={id}
          name={name}
          setLevel={setLevel}
          checked={level === id}
        >
          {name}
        </StyledLevel>
      ))}
    </Container>
  );
}
