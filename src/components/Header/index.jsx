import styled from "styled-components"
import SearchBar from "../SearchBar"

const StyledHeader = styled.header`
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 12rem;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <img src="/imagens/logo.png" alt="space app logo" />
      <SearchBar/>
    </StyledHeader>
  )
}

export default Header