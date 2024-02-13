import styled from "styled-components"
import Picture from "../Gallery/Picture"
import ButtonIcon from "../ButtonIcon"
import { useEffect } from "react"

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 5;
`

const StyledDialog = styled.dialog`
  background-color: transparent;
  width: 40rem;
  padding: 0;
  border: 0;
  display: flex;
  form {
    button {
      position: absolute;
      top: 15px;
      right: 75px;
      background-color: transparent;
      border-style: none;
      cursor: pointer;
    }
  }
`

const Modal = ({photo, onClosing, toggleFavorite}) => {
  useEffect(() => {
    if (photo) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [photo]);
  return (
    <>
    {photo && 
      <Overlay>
        <StyledDialog open={!!photo} onClose={onClosing}>
          <Picture photo={photo} toggleFavorite={toggleFavorite} extended/>
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