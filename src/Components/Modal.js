import React from "react";

const Modal = (props) => {
  return (
    <div onClick={props.clickHandler} className="modalContainer">
      <div className="modal">
        <img
          className="modalImg"
          src={props.mydata.urls.regular}
          alt={props.mydata.alt_description}
        />
        <a
          className="btn"
          id="download"
          href={props.mydata.links.download}
          target="blank"
          download
        >
          Download
        </a>
      </div>
    </div>
  );
};

export default Modal;
