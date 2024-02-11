import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Picture from "./Picture"

const GalleryContainer = styled.div`
`

const MainGallery = styled.div`
  display: flex;
  gap: 2rem;
`

const Feed = styled.section`
  flex-grow: 1;

`

const Hottests = styled.section`
  min-width: 15rem;
`

const Pictures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`

const Gallery = ({photos = []}) => {
  return (
    <GalleryContainer>
      <Tags />
      <MainGallery>
        <Feed>
          <Title>Navegue pela galeria</Title>
          <Pictures>
            {photos.map(photo => 
              <Picture photo={photo} key={photo.id}/>
            )}
          </Pictures>
        </Feed>
        <Hottests>
          <Title $align="center" >Populares</Title>
        </Hottests>
      </MainGallery>
    </GalleryContainer>
  )
}

export default Gallery