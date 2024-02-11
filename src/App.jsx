import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import banner from './assets/banner.png'
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import photos from "./fotos.json"
import { useState } from "react"
import Modal from "./components/Modal"

const BgGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;
`

const MainContainer = styled.div`
  display: flex;
  gap: 2rem;
`

const GalleryContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1rem;
`

const App = () => {
  const [galleryPhotos, setGalleryPhotos] = useState(photos);
  return (
    <BgGradient>
      <GlobalStyles/>
      <AppContainer>
        <Header/>
        <MainContainer>
          <SideBar/>
          <GalleryContent>
            <Banner url={banner} text="A galeria mais completa de fotos do espaço!"/>      
            <Gallery photos={galleryPhotos}/>  
          </GalleryContent>
        </MainContainer>
        <Modal></Modal>
        <Footer/>
      </AppContainer>
    </BgGradient>
  )
}

export default App
