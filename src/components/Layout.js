import { Outlet } from 'react-router-dom';
import Container from '@/components/Container';
import Header from '@/components/Header';
import styled from 'styled-components';

const Main = styled.main`
  padding-top: ${props => props.theme.space[3]}px;
  padding-bottom: ${props => props.theme.space[3]}px;
`

export default function Layout() {
  return (
    <div>
      <Header />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </div>
  );
}
