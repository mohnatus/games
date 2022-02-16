import styled from 'styled-components';

const StyledContainer = styled.div`
  padding-left: ${(props) => props.theme.containerSpace}px;
  padding-right: ${(props) => props.theme.containerSpace}px;
  width: 100%;
  max-width: ${props => props.theme.contentWidth}px;
  margin: 0 auto;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
