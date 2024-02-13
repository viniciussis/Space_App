import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import banner from './assets/banner.png'
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import photos from "./fotos.json"
import { useEffect, useState } from "react"
import Modal from "./components/Modal"

const BgGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
`

const MainContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 1.5rem;
`

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
  box-sizing: border-box;
  overflow: hidden;
`

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [tagSelected, setTagSelected] = useState({"id": 0,"titulo": "Todos"});
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    function searchingByText(){
      if (searchText){
        let lowerCaseText = searchText.toLowerCase();
        setGalleryPhotos(photos.filter(photo => photo.titulo.toLowerCase().includes(lowerCaseText)))
      }
    }
    searchingByText();
  }, [searchText])

  useEffect(() => {
    function searchingByTag() {
      if (tagSelected.id === 0) {
        setGalleryPhotos(photos)
      } else {
        setGalleryPhotos(photos.filter(photo => photo.tagId === tagSelected.id))
      }
    }
    searchingByTag();
  }, [tagSelected])

  const toggleFavorite = (photoFavorite) => {
    setGalleryPhotos(prevPhotos => 
      prevPhotos.map(photo => ({
        ...photo,
        favorite: photo.id === photoFavorite.id ? !photoFavorite.favorite : photo.favorite
      }))
    )
    if (photoFavorite.id === modalPhoto.id) {
      setModalPhoto({
        ...modalPhoto,
        favorite: !modalPhoto.favorite
      })
    }
  };

  return (
    <BgGradient>
      <GlobalStyles/>
      <AppContainer>
        <Header onSearching={setSearchText}/>
        <MainContainer>
          <SideBar/>
          <GalleryContent>
            <Banner url={banner} text="A galeria mais completa de fotos do espaço!"/>      
            <Gallery
              tagSelected={tagSelected}
              onSelectingTag={tag => setTagSelected(tag)}
              onSelected={photo => setModalPhoto(photo)} 
              toggleFavorite={toggleFavorite}
              photos={galleryPhotos}
            />
          </GalleryContent>
        </MainContainer>
        <Modal 
          toggleFavorite={toggleFavorite}
          photo={modalPhoto}
          onClosing={() => setModalPhoto(null)}
        />
        <Footer/>
      </AppContainer>
    </BgGradient>
  )
}

export default App
