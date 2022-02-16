import styled from 'styled-components';

const Container = styled.div`
  padding: ${(props) => props.theme.space[2]};
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.h1};

  font-weight: bold;

  .total {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export default function Scores({ scores, total }) {
  return (
    <Container>
      <span className='scores'>{scores}</span> /{' '}
      <span className='total'>{total}</span>
    </Container>
  );
}
