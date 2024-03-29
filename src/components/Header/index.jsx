import styled from "styled-components"
import SearchBar from "../SearchBar"

const StyledHeader = styled.header`
  padding: 3rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 12rem;
  }
`

const Header = ({onSearching}) => {
  return (
    <StyledHeader>
      <img src="/imagens/logo.png" alt="space app logo" />
      <SearchBar onSearching={onSearching} />
    </StyledHeader>
  )
}

export default Header