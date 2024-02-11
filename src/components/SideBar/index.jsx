import styled from "styled-components"
import MenuItens from "./MenuItens"

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
const SideBar = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <MenuItens 
            active 
            activeIcon="./icones/home-ativo.png" 
            inactiveIcon="./icones/home-inativo.png" 
          >
            Início
          </MenuItens>
          <MenuItens 
            activeIcon="./icones/mais-vistas-ativo.png" 
            inactiveIcon="./icones/mais-vistas-inativo.png" 
          >
            Mais vistos
          </MenuItens>
          <MenuItens 
            activeIcon="./icones/mais-curtidas-ativo.png" 
            inactiveIcon="./icones/mais-curtidas-inativo.png" 
          >
            Mais curtidos
          </MenuItens>
          <MenuItens 
            activeIcon="./icones/novas-ativo.png" 
            inactiveIcon="./icones/novas-inativo.png" 
          >
            Novos
          </MenuItens>
          <MenuItens 
            activeIcon="./icones/surpreenda-me-ativo.png" 
            inactiveIcon="./icones/surpreenda-me-inativo.png" 
          >
            Surpreenda-me
          </MenuItens>
        </StyledList>
      </nav>
    </aside>
  )
}

export default SideBar