import Modal from 'react-modal';

function newTransactionModal({isOpen, onRequestClose}) {
  return (
    <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}>
          <h2>Cadastrar transação</h2>
      </Modal>
  )
}

export default newTransactionModal