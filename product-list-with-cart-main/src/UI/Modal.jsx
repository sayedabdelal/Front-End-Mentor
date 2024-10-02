import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    
    // Show the modal when the component mounts
    if (modal) {
      modal.showModal();
    }

    // Cleanup when the component unmounts
    return () => {
      if (modal) {
        modal.close();
      }
    };
  }, []);

  // Close the modal if the user clicks outside the modal content
  const handleClickOutside = (event) => {
    if (dialog.current && dialog.current === event.target) {
      onClose();
    }
  };

  return createPortal(
    <dialog className="modal" ref={dialog} onClick={handleClickOutside}>
      <div className="modalContent">
        {children}
       
      </div>
    </dialog>,
    document.getElementById('modal') // Ensure this element exists in your HTML
  );
}
