import styled from "styled-components"


const StyledFooter = styled.footer`
  background-color: #04244F;
  position: relative;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  width: 100%;
  color: white;
  padding: 1rem 0;
  z-index: 2;

  p {
    margin-right: 1.5rem;
  }
`

const StyleMedia = styled.div`
  display: flex;
  gap: 1rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      <StyleMedia>
      </StyleMedia>
      <p className='footer__para'>&copy;Copyright | Project for web portfolio created by Vinícius Silva Santos | 2023</p>
    </StyledFooter>
  )
}

export default Footer