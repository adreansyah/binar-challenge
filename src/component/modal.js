import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ModalDialog(props) {
    const { className } = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const closeBtn = (
        <button className="close" onClick={props.toggle} type="button">
            &times;
        </button>
    );

    return (
        <Modal isOpen={props.modal} toggle={props.toggle} className={className}>
            <ModalHeader toggle={props.toggle} close={closeBtn}>
                Modal title
            </ModalHeader>
            <ModalBody>
                {props.component}
            </ModalBody>
            {/* <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter> */}
        </Modal>
    );
}
