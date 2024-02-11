import styled from "styled-components"
import GlobalStyles from "../components/GlobalStyles"

const BgGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

function App() {
  return (
    <BgGradient>
      <GlobalStyles/>
    </BgGradient>
  )
}

export default App
