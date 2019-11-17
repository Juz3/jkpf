import React, { Fragment, useState } from "react";
import ImageV1 from "../../res/images/jkpf_thumbs_v1/v1t.jpg";
import ImageV2 from "../../res/images/jkpf_thumbs_v1/v2t.jpg";
import ImageV31 from "../../res/images/jkpf_thumbs_v1/v3-1t.jpg";
import ImageV32 from "../../res/images/jkpf_thumbs_v1/v3-2t.jpg";
import ImageV4 from "../../res/images/jkpf_thumbs_v1/v4t.jpg";
import ImageV5 from "../../res/images/jkpf_thumbs_v1/v5t.jpg";
import ImageV6 from "../../res/images/jkpf_thumbs_v1/v6t.jpg";
import ImageO1 from "../../res/images/jkpf_thumbs_v1/o1t.jpg";
import ImageO2 from "../../res/images/jkpf_thumbs_v1/o2t.jpg";
import ImageO3 from "../../res/images/jkpf_thumbs_v1/o3t.jpg";
import ImageO4 from "../../res/images/jkpf_thumbs_v1/o4t.jpg";
import ImageO5 from "../../res/images/jkpf_thumbs_v1/o5t.jpg";
import ImageO6 from "../../res/images/jkpf_thumbs_v1/o6t.jpg";

import pictures from "./pictures";

import arrowBtn from "../../res/images/svg/nextBtnVector.svg";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([null]);

  const [picSelect, setPicSelect] = useState(0);

  const [modalStyle, setModalStyle] = useState({ display: "none" });

  const openModal = selectedPic => {
    console.log("open modal");

    setPicSelect(selectedPic);

    if (modalStyle.display === "none") {
      setModalStyle({ display: "block" });
    } else {
      setModalStyle({ display: "none" });
    }
  };

  const openFullPics = () => {
    if (picSelect === 0) {
      return pictures[0];
    } else {
      return pictures[picSelect];
    }
  };

  const fullPicClick = e => {
    e.stopPropagation();
  };

  const changePic = (e, prevOrNext) => {
    e.stopPropagation();

    if (prevOrNext === false && picSelect > 0) {
      setPicSelect(picSelect - 1);
    } else if (prevOrNext === true && picSelect < 12) {
      setPicSelect(picSelect + 1);
    }
  };

  const rightPicWall = pictures.map((item, index) =>
    index <= 6 ? (
      <img
        className="pictureWall"
        src={item}
        id={index}
        alt=""
        onClick={() => openModal(index)}
      ></img>
    ) : null
  );

  const leftPicWall = pictures.map((item, index) =>
    index >= 6 ? (
      <img
        className="pictureWall"
        src={item}
        id={index}
        alt=""
        onClick={() => openModal(index)}
      ></img>
    ) : null
  );

  return (
    <Fragment>
      <div>
        {" "}
        <p className="galleryParagraph">Pictures of Finland</p>
      </div>
      <div className="pictureModal" style={modalStyle} onClick={openModal}>
        <div className="modalContent">
          <button className="closeBtn cursor" onClick={openModal}>
            Close
          </button>
          <button className="prevBtn" onClick={e => changePic(e, false)}>
            <img className="svgArrow" src={arrowBtn} alt=""></img>
          </button>
          <img
            className="fullImg"
            src={openFullPics()}
            alt=""
            onClick={e => fullPicClick(e)}
          ></img>
          <button className="nextBtn" onClick={e => changePic(e, true)}>
            <img className="svgArrow" src={arrowBtn} alt=""></img>
          </button>
        </div>
      </div>
      <div className="galleryContainer">
        <div> </div>
        <div className="row">
          <div className="column">{leftPicWall}</div>
          <div className="column">{rightPicWall}</div>
        </div>
        <div> </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
