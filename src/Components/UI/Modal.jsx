import ReactDOM from 'react-dom';
import './Modal.css'



const Backdrop = ({onClose}) => {
  return <div className='backdrop' onClick={onClose}/>;
};

const ModalOverlay = ({children}) => {
  return (
    <div className='modal'>
      <div className='content'>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({children, onClose}) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop  onClose={onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;