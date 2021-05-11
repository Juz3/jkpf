/*
 *  Prints file size of the picture.
 */
const getSize = (pics, id) => {
  var xhr = new XMLHttpRequest();
  xhr.open("HEAD", pics[id], true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(
          `Size of pic ${id}: ${
            parseInt(xhr.getResponseHeader("Content-Length")) / 1000
          }KB `
        );
      } else {
        console.log("ERROR @xhr", xhr);
      }
    }
  };
  xhr.send(null);
};

export default getSize;
