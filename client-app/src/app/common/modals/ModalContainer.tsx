import { observer } from 'mobx-react-lite';
import React from 'react';
import { Modal, Transition } from 'semantic-ui-react';
import { useStore } from '../../stores/store';

interface Props {
    animation : string;
    duration : string;
}

export default observer(function ModalContainer({animation, duration} : Props){
    const {modalStore} = useStore();

    return (
        <Transition visible={modalStore.modal.open} animation={animation} duration={duration}>
        <Modal open={modalStore.modal.open} onClose={modalStore.closeModal} size='mini'>
            <Modal.Content>
                {modalStore.modal.body}
            </Modal.Content>
        </Modal>
        </Transition>
    )
})