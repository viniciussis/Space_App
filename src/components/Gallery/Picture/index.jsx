import styled from "styled-components"
import ButtonIcon from "../../ButtonIcon"

const Figure = styled.figure`
  min-width: ${props => props.$extended ? "90%" : "24rem"};
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #001634;
  overflow: hidden;
  border-radius: 1rem;
  margin: 0;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
        font-family: 'GandhiSansBold';
    }
    h4 {
        flex-grow: 1;
    }
    h3, h4 {
        margin: 0;
        font-size: 16px;
    }
  }
`

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    padding: 0 0.5rem;
  }
`

const IconsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Picture = ({extended = false, photo, onModalZoom, toggleFavorite}) => {
  const iconFavorite = photo.favorite ? "/icones/favorito-ativo.png" : "/icones/favorito.png"
  return (
    <Figure $extended={extended}>
      <img src={photo.path} alt="" />
      <figcaption>
        <h3>{photo.titulo}</h3>
          <StyledFooter>
            <h4>{photo.fonte}</h4>
            <IconsContainer>
              <ButtonIcon onClick={() => toggleFavorite(photo)}>
                <img src={iconFavorite} alt="favorite icon" />
              </ButtonIcon>
              {!extended && <ButtonIcon 
                aria-hidden={extended} 
                onClick={() => onModalZoom(photo)}
              >
                <img src="/icones/expandir.png" alt="expand icon" />
              </ButtonIcon>}
            </IconsContainer>
          </StyledFooter>
      </figcaption>
    </Figure>
  )
}

export default Picture