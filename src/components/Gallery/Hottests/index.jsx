import styled from "styled-components"
import Title from "../../Title"
import photos from '../../../fotos.json'

const HottestsContainer = styled.section`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;

  button {
    border: 2px solid #A482EB;
    background-color: transparent;
    width: 100%;
    border-radius: 1rem;
    color: white;
    font-size: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    padding: 1rem 0;
  }
`

const HottestPictures = styled.img`
  border-radius: 1rem;
  margin-bottom: 1rem;
`

const Hottests = () => {
  return (
    <HottestsContainer>
      <Title $align="center" >Populares</Title>
      {photos.map(photo  => 
        <HottestPictures
          key={photo.id}
          src={photo.path}
          alt={photo.titulo}
        />  
      )}
      <button>Ver mais</button>
    </HottestsContainer>
  )
}

export default Hottests