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

import ImageO1Full from "../../res/images/jkpf_thumbs_v1/o1.jpg";

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([null]);

  const [modalStyle, setModalStyle] = useState({ display: "none" });

  useEffect(() => {
    fillArray();
  }, []);

  const fillArray = () => {
    const arraySize = 44;
    var numArray = [];
    for (var i = 1; i <= arraySize; i++) {
      numArray.push(i);
    }
    console.log(numArray);
    setGalleryItems(numArray);
  };

  const openModal = () => {
    console.log("open modal");

    if (modalStyle.display === "none") {
      setModalStyle({ display: "block" });
      console.log("adsasd");
    } else {
      console.log(modalStyle);
      setModalStyle({ display: "none" });
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
      <div className="pictureModal" style={modalStyle}>
        <img
          className="fullImg"
          src={ImageO1Full}
          alt=""
          style={{ width: "50%" }}
        ></img>
      </div>
      <div className="galleryContainer">
        <div> </div>
        <div className="row">
          <div className="column">
            <img src={ImageV1} alt=""></img>
            <img src={ImageV2} alt=""></img>
            <img src={ImageV31} alt=""></img>
            <img src={ImageV32} alt=""></img>
            <img src={ImageV4} alt=""></img>
            <img src={ImageV5} alt=""></img>
            <img src={ImageV6} alt=""></img>
          </div>
          <div className="column">
            <img src={ImageO1} alt="" onClick={openModal}></img>
            <img src={ImageO2} alt=""></img>
            <img src={ImageO3} alt=""></img>
            <img src={ImageO4} alt=""></img>
            <img src={ImageO5} alt=""></img>
            <img src={ImageO6} alt=""></img>
          </div>
        </div>
        <div> </div>
      </div>
    </Fragment>
  );
};

export default Gallery;
