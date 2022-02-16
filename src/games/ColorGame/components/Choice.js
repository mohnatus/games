import styled from 'styled-components';
import Button from '@/components/Button';

const Container = styled.div`
  display: flex;
  margin: -${props => props.theme.space[2]}px;
`;

const StyledButton = styled(Button)`
  margin: ${props => props.theme.space[2]}px;
  flex-grow: 1;
`

export default function Choice({ handleChoice }) {
  return (
    <Container>
      <StyledButton onClick={() => handleChoice(false)}>← Не верно</StyledButton>
      <StyledButton onClick={() => handleChoice(true)}>Верно →</StyledButton>
    </Container>
  );
}
