import styled from "styled-components"

const Figure = styled.figure`
  max-width: ${props => props.$extended ? "90%" : "460px"};
  box-shadow: 0.5rem 0.5rem 1rem #000c1d;
  display: flex;
  flex-direction: column;
  background-color: #001634;
  overflow: hidden;
  border-radius: 1rem;
  margin: 0;

  figcaption{
    color: white;
    padding: 1rem;
    h3, h4 {
      margin: 0.5rem;
    }

    h4 {
      font-weight: 500;
    }
  }
`

const Picture = ({extended=false, photo}) => {
  return (
    <Figure $extended={extended}>
      <img src={photo.path} alt="" />
      <figcaption>
        <h3>{photo.titulo}</h3>
        <h4>{photo.fonte}</h4>
      </figcaption>
    </Figure>
  )
}

export default Picture