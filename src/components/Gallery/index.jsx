import styled from "styled-components"
import Tags from "./Tags"
import Hottests from "./Hottests"
import Feed from "./Feed"

const GalleryContainer = styled.div`
`

const MainGallery = styled.div`
  display: flex;
  gap: 2rem;
`

const Gallery = ({photos = [], onSelected, tagSelected, onSelectingTag, toggleFavorite}) => {
  return (
    <GalleryContainer>
      <Tags tagSelected={tagSelected} onSelectingTag={onSelectingTag}/>
      <MainGallery>
        <Feed toggleFavorite={toggleFavorite} photos={photos} onSelected={onSelected}/>
        <Hottests/>
      </MainGallery>
    </GalleryContainer>
  )
}

export default Gallery