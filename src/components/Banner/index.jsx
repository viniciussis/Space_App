import styled from "styled-components"

const StyledBanner = styled.figure`
  border-radius: 1rem;
  background-image: ${props => `url(${props.$url})`};
  flex-grow: 1;
  display: flex;
  align-items: center;
  min-height: 20rem;
  margin: 0;
  max-width: 100%;
  background-size: cover;
`

const StyledTitle = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  max-width: 300px;
  padding: 0 64px;
`

const Banner = ({text , url}) => {
  return (
    <StyledBanner $url={url}>
      <StyledTitle>
        {text} 
      </StyledTitle>
    </StyledBanner>
  )
}

export default Banner