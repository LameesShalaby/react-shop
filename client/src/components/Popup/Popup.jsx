import { useState } from 'react'; // Import useState
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import ShareButton from '../ShareButton/ShareButtons';
import { FaShareSquare } from "react-icons/fa";
import './popup.css'


function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Share this link via
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ShareButton/>
        {/* <p>Or copy link</p>
        <i class="url-icon uil uil-link"></i>
        <input type="text" readonly value="https://codepen.io/coding_dev_"/>
        <Button>Copy</Button> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Popup() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <p style={{cursor: 'pointer'}} onClick={() => setModalShow(true)}>
         <FaShareSquare/> <span style={{fontSize:'14px'}}>Share</span>
      </p>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Popup;
