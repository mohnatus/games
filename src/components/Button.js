import styled from "styled-components"

const StyledButton = styled.button`
  padding: 0 ${props => props.theme.button.padding}px ;
  height: ${props => props.theme.button.height}px;
  border-radius: ${props => props.theme.button.radius}px;
  font-family: inherit;
  font-size: ${props => props.theme.button.fontSize};
  font-weight: ${props => props.theme.button.fontWeight};
  cursor: pointer;

  background: transparent;
  color: ${props => props.theme.colors.primary};
  border: 1px solid currentColor;

  ${props => props.primary && `
    color: ${props.theme.colors.primaryContrast};
    background: ${props.theme.colors.primary};
    border-color: ${props.theme.colors.primary};
  `}
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}
