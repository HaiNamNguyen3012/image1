let request = new XMLHttpRequest();
let data;
let url = new Array();

request.open("GET", "https://picsum.photos/v2/list", true);

// Hàm call api và hiển thị ảnh lên trang html
request.onload = function () {
  data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach((element) => {
      const app = document.querySelector("#section");
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const image = document.createElement("IMG");

      image.setAttribute("src", element.download_url);
      console.log(typeof element.download_url);
      url.push(element.download_url);
      image.setAttribute("class", "image");
      image.setAttribute("width", "100%");
      image.setAttribute("height", "100%");
      app.appendChild(card);
      card.appendChild(image);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `It's not working`;
    app.appendChild(errorMessage);
  }
};
request.send();
console.log(data);
// Hàm làm xám bức ảnh
function grayScale() {
  for (let i = 0; i < url.length; i++){
    if (url[i].indexOf("?gray") === -1) {
      url[i] += "?gray";
    }
    else {
      url[i] = url[i].substring(0, url[i].length-4);
    }
  }
  return url;
}
//Hàm làm mờ ảnh

function blur(url) {
  for (let i = 0; i < url.length; i++) {
    if (url[i].indexOf("?blur") === -1) {
      url[i] += "?blur";
    } else {
      url[i] = url[i].substring(0, url[i].length - 4);
    }
  }
  return url;
}
