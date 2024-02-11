import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import banner from './assets/banner.png'
import Banner from "./components/Banner"

const BgGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  padding: 0 1.5rem;
  box-sizing: border-box;
`

function App() {
  return (
    <BgGradient>
      <GlobalStyles/>
      <Header/>
      <SideBar/>
      <Banner url={banner} text="A galeria mais completa de fotos do espaço!"/>
    </BgGradient>
  )
}

export default App
