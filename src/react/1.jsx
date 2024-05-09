import { useState, useEffect, useRef } from 'react';
import '../react/modal.css';

const ModalWindow = ({ open, disableGlobalScroll, children, onClose }) => {
  const [showModal, setShowModal] = useState(open);
  const modalRef = useRef();

  useEffect(() => {
    setShowModal(open);
    if (disableGlobalScroll && open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open, disableGlobalScroll]);

  const handleCloseModal = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModal);
    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, []);

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div ref={modalRef} className="modal-content">
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;