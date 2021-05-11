import React, { Fragment, useState } from "react";
import thumbnailPictures from "./thumbnailPictures";
import fullPictures from "./fullPictures";
import arrowBtn from "../../res/images/svg/nextBtnVector.svg";

const Gallery = () => {
  const [picSelect, setPicSelect] = useState(0);

  const [modalStyle, setModalStyle] = useState({ display: "none" });

  const openModal = selectedPic => {
    setPicSelect(selectedPic);

    if (modalStyle.display === "none") {
      setModalStyle({ display: "block" });
    } else {
      setModalStyle({ display: "none" });
    }
  };

  const openFullPics = () => {
    if (picSelect === 0) {
      return fullPictures[0];
    } else {
      return fullPictures[picSelect];
    }
  };

  const fullPicClick = e => {
    e.stopPropagation();

    var src = e.target.attributes.src.value;

    console.log(src);

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

  /*   const renderContent =
    fullPicLink !== null ? <Redirect to={fullPicLink} /> : <div>ASDSAD</div>;
 */
  return (
    <Fragment>
      {/* {renderContent} */}
      <div>
        {" "}
        <p className="galleryParagraph">Gallery</p>
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
        {/*         <div>
          <Link to="/full_1">
            <button>full size</button>
          </Link>
        </div> */}
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
