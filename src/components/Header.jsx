import React from "react";
import Modal from "react-modal";


function Header(){

    let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }
    return(
        <header>
            <h2>Snack Spot</h2>
            <button onClick={openModal}>My Cart</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="customStyles"
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Checkout</h2>
        <div>Youre Cart</div>
        <form>
          <button>Checkout</button>
          <button>Empty cart</button>
          <button onClick={closeModal}>close</button>

        </form>
      </Modal>
        </header>
    )
}


export default Header;