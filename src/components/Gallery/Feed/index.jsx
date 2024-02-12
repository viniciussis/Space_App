import styled from "styled-components"
import Title from "../../Title"
import Picture from "../Picture"

const FeedContainer = styled.section`
  flex-grow: 1;
`

const StyledPictures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
`

const Feed = ({photos = [], onSelected}) => {
  return (
    <FeedContainer>
      <Title>Navegue pela galeria</Title>
      <StyledPictures>
      {photos.map(photo => 
        <Picture 
          photo={photo} 
          key={photo.id}
          onModalZoom={onSelected}
        />
      )}
    </StyledPictures>
    </FeedContainer>
  )
}

export default Feed