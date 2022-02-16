import { Link } from "react-router-dom";
import styled from "styled-components";

import ColorsIcon from '@/img/colors.png';

const Cards = styled.div`
  display: flex;
`

const Card = styled(Link)`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: ${props => props.theme.space[2]}px;
  box-shadow: ${props => props.theme.shadow[0]};
  border-radius: ${props => props.theme.radius[1]}px;

  &:hover {
    box-shadow: ${props => props.theme.shadow[1]};
  }

  .icon {
    margin-bottom: ${props => props.theme.space[2]}px;
  }

  .title {
    margin-bottom: ${props => props.theme.space[2]}px;
    font-size: ${props => props.theme.fontSize.h2};
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }

  .description {
    color: ${props => props.theme.colors.text};
  }
`;

export default function Menu() {
  return <Cards>
    <Card to="colors">
      <div className="icon">
        <img width="150" height="150" src={ColorsIcon} alt="" />
      </div>
      <div className="title">Цвета</div>
      <div className="description">Определите, соответствует ли название цвета его значению</div>
    </Card>
  </Cards>
}
