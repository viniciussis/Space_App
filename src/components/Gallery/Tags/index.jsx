import styled from "styled-components"
import tags from "./tags.json"

const StyledPara = styled.p`
  color: white;
  display: inline-flex;
  font-size: 1.25rem;
  gap: 0.75rem;
  align-items: center;
`

const StyledTag = styled.button`
  border: 2px solid ${props => props.$selected ? '#A482EB' : "transparent"};
  background-color: #d9d9d932;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  padding: 0.35rem 0.75rem;
  color: white;
  transition: 0.5s;
  cursor: pointer;
`

const Tags = ({tagSelected, onSelectingTag}) => {
  return (
    <StyledPara>Busque por tags: 
      {tags.map(tag => 
        <StyledTag 
          $selected={tagSelected.id === tag.id} 
          onClick={() => onSelectingTag(tag)} 
          key={tag.id} 
        >
          {tag.titulo}
        </StyledTag>
      )}
    </StyledPara>
  )
}

export default Tags