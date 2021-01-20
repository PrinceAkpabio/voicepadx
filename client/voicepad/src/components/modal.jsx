import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

import UpdateNote from "./UpdateNote";

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  const modalBkRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: display ? 1 : 0,
    transform: display ? `translateY(0%)` : `translateY(-100%)`,
  });

  useImperativeHandle(ref, () => {
    return {
      openModall: () => openModal(),
      closeModall: () => closeModal(),
    };
  });

  const openModal = () => {
    setDisplay(true);
  };

  const closeModal = () => {
    setDisplay(false);
  };

  const closeModalBk = (e) => {
    if (modalBkRef.current === e.target) {
      setDisplay(false);
    }
  };
  // console.log(props.title);

  return (
    <>
      {display
        ? ReactDOM.createPortal(
            <div
              ref={modalBkRef}
              className="modal"
              id="modal"
              onClick={closeModalBk}
            >
              <animated.div style={animation} className="animated">
                <div className="note">
                  <UpdateNote
                    closeModal={closeModal}
                    Id={props.id}
                    Title={props.title}
                  />
                </div>
              </animated.div>
            </div>,
            document.getElementById("modal-root")
          )
        : null}
    </>
  );
});

export default Modal;
