import styled from "styled-components";

const Title = styled.h2`
  color: #7B78E5;
  font-weight: 500;
  font-size: 2rem;
  text-align: ${props => props.$align ? props.$align : "left"};
`

export default Title