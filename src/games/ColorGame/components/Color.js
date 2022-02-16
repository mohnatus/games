import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: ${(props) => props.color};
  border-radius: 10px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  font-size: 30px;
  font-weight: bold;
`;

export default function Color({ text, color }) {
  return <Card color={color}>{text}</Card>;
}
