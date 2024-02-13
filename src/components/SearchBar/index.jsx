import styled from "styled-components"
import search from "/icones/search.png"
import ButtonIcon from "../ButtonIcon";

const StyledSearch = styled.div`
  position: relative;
  display: inline-block;
`

const StyledInput = styled.input`
  width: 25rem;
  color: white;
  height: 1.8rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid #A482EB;
  border-radius: 0.5rem;
  background: transparent;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  caret-color: #A482EB;

  &:focus{
    outline: 1px solid #A482EB;
  }

  &::placeholder{
    color: #b8b8b8;
  }
`

const IconSearch = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 2rem;
  height: 2rem;
`;

const SearchBar = ({onSearching}) => {
  return (
    <StyledSearch>
      <StyledInput onBlur={(event) => onSearching(event.target.value)} placeholder="O que você procura?"/>
      <ButtonIcon>
        <IconSearch src={search} alt="search icon"/>
      </ButtonIcon>
    </StyledSearch>
  )
}

export default SearchBar