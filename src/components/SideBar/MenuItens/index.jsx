import styled from "styled-components"

const StyleLink = styled.li`
  text-decoration: none;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  color: ${props => props.$active ? '#7B78E5' : '#D9D9D9'};
  font-weight: ${ props => props.$active ? '700' : '400'};
  display: flex;
  align-items: center;
  gap: 1rem;
`

const MenuItens = ({children, active=false, activeIcon, inactiveIcon}) => {
  return (
    <StyleLink $active={active}>
      <img src={active ? activeIcon : inactiveIcon} alt="link icon" />
      {children}
    </StyleLink>
  )
}

export default MenuItens