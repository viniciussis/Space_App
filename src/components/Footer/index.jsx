import styled from "styled-components"


const StyledFooter = styled.footer`
  background-color: #04244F;
  position: relative;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  color: white;
  padding: 1rem 2.5rem;
  z-index: 2;
`

const StyleMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    display: flex;
  }
`



const Footer = () => {
  return (
    <StyledFooter>
      <StyleMedia>
        <a href="https://www.linkedin.com/in/viniciussis/" target="_blank" rel="noopener noreferrer">
          <img src="/imagens/sociais/linkedin.svg" alt="linkedin link" />
        </a>
        <a href="https://github.com/viniciussis" target="_blank" rel="noopener noreferrer">
          <img src="/imagens/sociais/github.svg" alt="github link" />
        </a>
        <a href="https://www.instagram.com/_devinicius" target="_blank" rel="noopener noreferrer">
          <img src="/imagens/sociais/instagram.svg" alt="instagram link" />
        </a>
        <a href="https://twitter.com/_devinicius" target="_blank" rel="noopener noreferrer">
          <img src="/imagens/sociais/twitter.svg" alt="twitter link" />
        </a>
      </StyleMedia>
      <p className='footer__para'>&copy;Copyright | Project created by Vinícius Silva Santos & Alura | 2024</p>
    </StyledFooter>
  )
}

export default Footer