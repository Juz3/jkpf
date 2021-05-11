import React, { Fragment, useState } from "react";
import thumbnailPictures from "./thumbnailPictures";
import fullPictures from "./fullPictures";
import getFileSize from "./getFileSize";
import arrowBtn from "../../res/images/svg/nextBtnVector.svg";

// debug prints on or off
const debug = false;

const Gallery = () => {
  const [picSelect, setPicSelect] = useState(0);
  const [modalStyle, setModalStyle] = useState({ display: "none" });

  const openModal = (selectedPic) => {
    setPicSelect(selectedPic);

    if (modalStyle.display === "none") {
      setModalStyle({ display: "block" });
    } else {
      setModalStyle({ display: "none" });
    }
  };

  const openFullPics = () => {
    if (!debug) {
      if (picSelect === 0) {
        return fullPictures[0];
      } else {
        return fullPictures[picSelect];
      }
    } else {
      if (picSelect === 0) {
        getFileSize(fullPictures, 0);
        return fullPictures[0];
      } else {
        getFileSize(fullPictures, picSelect);
        return fullPictures[picSelect];
      }
    }
  };

  const fullPicClick = (e) => {
    e.stopPropagation();

    var src = e.target.attributes.src.value;

    if (debug) console.log(src);

    changePic(e, true);
  };

  const changePic = (e, prevOrNext) => {
    e.stopPropagation();

    if (prevOrNext === false && picSelect > 0) {
      setPicSelect(picSelect - 1);
    } else if (prevOrNext === false && picSelect === 0) {
      setPicSelect(12);
    } else if (prevOrNext === true && picSelect < 12) {
      setPicSelect(picSelect + 1);
    } else if (prevOrNext === true && picSelect === 12) {
      setPicSelect(0);
    }
  };

  const rightPicWall = thumbnailPictures.map((item, index) =>
    index < 6 ? (
      <img
        className="pictureWall"
        src={item}
        id={index}
        key={"thumbRight" + index}
        alt=""
        onClick={() => openModal(index)}
      ></img>
    ) : null
  );

  const leftPicWall = thumbnailPictures.map((item, index) =>
    index >= 6 ? (
      <img
        className="pictureWall"
        src={item}
        id={index}
        key={"thumbLeft" + index}
        alt=""
        onClick={() => openModal(index)}
      ></img>
    ) : null
  );

  return (
    <Fragment>
      <div>
        {" "}
        <p className="galleryParagraph">Gallery</p>
      </div>
      <div className="pictureModal" style={modalStyle} onClick={openModal}>
        <div className="modalContent">
          <button className="closeBtn cursor" onClick={openModal}>
            Close
          </button>
          <button className="prevBtn" onClick={(e) => changePic(e, false)}>
            <img className="svgArrow" src={arrowBtn} alt=""></img>
          </button>
          <img
            className="fullImg"
            src={openFullPics()}
            alt=""
            onClick={(e) => fullPicClick(e)}
          ></img>
          <button className="nextBtn" onClick={(e) => changePic(e, true)}>
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
