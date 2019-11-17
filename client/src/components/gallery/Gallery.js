import React, { Fragment, useState, useEffect } from "react";
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

/* import ImageO1Full from "../../res/images/watermarked/o1w.jpg";
import ImageO2Full from "../../res/images/watermarked/o2w.jpg";
import ImageO3Full from "../../res/images/watermarked/o3w.jpg";
import ImageO4Full from "../../res/images/watermarked/o4w.jpg";
import ImageO5Full from "../../res/images/watermarked/o5w.jpg";
import ImageO6Full from "../../res/images/watermarked/o6w.jpg";
import ImageV1Full from "../../res/images/watermarked/v1w.jpg";
import ImageV2Full from "../../res/images/watermarked/v2w.jpg";
import ImageV31Full from "../../res/images/watermarked/v3-1w.jpg";
import ImageV32Full from "../../res/images/watermarked/v3-2w.jpg";
import ImageV4Full from "../../res/images/watermarked/v4w.jpg";
import ImageV5Full from "../../res/images/watermarked/v5w.jpg";
import ImageV6Full from "../../res/images/watermarked/v6w.jpg"; */

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([null]);

  const [picSelect, setPicSelect] = useState(0);

  const [modalStyle, setModalStyle] = useState({ display: "none" });

  /* useEffect(() => {
    fillArray();
  }, []); */

  const fillArray = () => {
    const arraySize = 44;
    var numArray = [];
    for (var i = 1; i <= arraySize; i++) {
      numArray.push(i);
    }
    console.log(numArray);
    setGalleryItems(numArray);
  };

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

    if (prevOrNext === false) {
      setPicSelect(picSelect - 1);
    } else {
      setPicSelect(picSelect + 1);
    }
  };

  const data = galleryItems.map((item, index) => (
    <div className="imageGrid" key={index}>
      {item}
    </div>
  ));

  return (
    <Fragment>
      <div>
        {" "}
        <p className="galleryParagraph">Pictures from Finland</p>
      </div>
      <div className="pictureModal" style={modalStyle} onClick={openModal}>
        <div className="modalContent">
          <button className="closeBtn cursor" onClick={openModal}>
            Close
          </button>
          <button className="prevBtn" onClick={e => changePic(e, false)}>
            Prev
          </button>
          <img
            className="fullImg"
            src={openFullPics()}
            alt=""
            style={{ width: "50%" }}
            onClick={e => fullPicClick(e)}
          ></img>
          <button className="nextBtn" onClick={e => changePic(e, true)}>
            Next
          </button>
        </div>
      </div>
      <div className="galleryContainer">
        <div> </div>
        <div className="row">
          <div className="column">
            <img
              className="pictureWall"
              src={ImageV1}
              alt=""
              onClick={() => openModal(6)}
            ></img>
            <img
              className="pictureWall"
              src={ImageV2}
              alt=""
              onClick={() => openModal(7)}
            ></img>
            <img
              className="pictureWall"
              src={ImageV31}
              alt=""
              onClick={() => openModal(8)}
            ></img>
            <img
              className="pictureWall"
              src={ImageV32}
              alt=""
              onClick={() => openModal(9)}
            ></img>
            <img
              className="pictureWall"
              src={ImageV4}
              alt=""
              onClick={() => openModal(10)}
            ></img>
            <img
              className="pictureWall"
              src={ImageV5}
              alt=""
              onClick={() => openModal(11)}
            ></img>
            <img
              className="pictureWall"
              src={ImageV6}
              alt=""
              onClick={() => openModal(12)}
            ></img>
          </div>
          <div className="column">
            <img
              className="pictureWall"
              src={ImageO1}
              alt=""
              onClick={() => openModal(0)}
            ></img>
            <img
              className="pictureWall"
              src={ImageO2}
              alt=""
              onClick={() => openModal(1)}
            ></img>
            <img
              className="pictureWall"
              src={ImageO3}
              alt=""
              onClick={() => openModal(2)}
            ></img>
            <img
              className="pictureWall"
              src={ImageO4}
              alt=""
              onClick={() => openModal(3)}
            ></img>
            <img
              className="pictureWall"
              src={ImageO5}
              alt=""
              onClick={() => openModal(4)}
            ></img>
            <img
              className="pictureWall"
              src={ImageO6}
              alt=""
              onClick={() => openModal(5)}
            ></img>
          </div>
        </div>
        <div> </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
