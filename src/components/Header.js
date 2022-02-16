import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Container from '@/components/Container';

const StyledHeader = styled.header`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryContrast};
  height: ${(props) => props.theme.headerHeight}px;
  display: flex;
  align-items: center;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin-right: ${(props) => props.theme.space[2]}px;
  }
`;

const StyledLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  padding: ${(props) => props.theme.space[0]}px;

  &.active {
    border-bottom: 1px solid currentColor;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Navigation>
          <ul>
            <li>
              <StyledLink to='/'>Главная</StyledLink>
            </li>
            <li>
              <StyledLink to='colors'>Цвета</StyledLink>
            </li>
          </ul>
        </Navigation>
      </Container>
    </StyledHeader>
  );
}
