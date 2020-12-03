import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const modal = ( props ) => {

    return (
        <>
          <Button variant="primary" >
            Launch demo modal
          </Button>
    
          <Modal show={props.handleShow()} onHide={props.handleClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose()}>
                Close
              </Button>
              <Button variant="primary" onClick={props.handleClose()}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
    
export default modal;
