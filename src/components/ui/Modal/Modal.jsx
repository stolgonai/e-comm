import './Modal.css'

function Modal({ onClose, children, btnText }) {
  return (
    <div>
      <div className="modal-bg" onClick={onClose}></div>
      <div className="modal">
        <div className="line"></div>
        {children}
        <div className="footerBtn">
            <button className="btn footerModalBtn"> {btnText} </button>
        </div>
      </div>

      
    </div>
  )
}

export default Modal;