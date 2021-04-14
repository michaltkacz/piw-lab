import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';

const NoticeModal = ({ notice, displayModal, closeModal }) => {
  return (
    <Modal
      show={displayModal}
      onHide={(e) => {
        closeModal(e);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>{notice.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Succes! You sent a message to the author of the notice - {notice.name}{' '}
        {notice.surname}!
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          onClick={(e) => {
            closeModal(e);
          }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoticeModal;
