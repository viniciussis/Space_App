import styled from "styled-components"
import Picture from "../Gallery/Picture"
import ButtonIcon from "../ButtonIcon"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledDialog = styled.dialog`
  background-color: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  form {
    button {
      position: relative;
      background-color: transparent;
      border-style: none;
      cursor: pointer;
    }
  }
`

const Modal = ({photo, onClosing}) => {
  return (
    <>
    {photo && 
      <Overlay>
        <StyledDialog open={!!photo} onClose={onClosing}>
          <Picture photo={photo} extended/>
          <form method="dialog">
            <ButtonIcon formMethod="dialog">
              <img src="/icones/fechar.png" alt="close icon"/>
            </ButtonIcon>
          </form>
        </StyledDialog>
      </Overlay>
    }
    </>
  )
}

export default Modal