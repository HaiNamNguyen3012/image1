let request = new XMLHttpRequest();

request.open("GET", "https://picsum.photos/v2/list", true);

// Hàm call api và hiển thị ảnh lên trang html
request.onload = function () {
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach((element) => {
      const app = document.querySelector("#section");
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const image = document.createElement("IMG");
      image.setAttribute("src", element.download_url);
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

// Hàm làm xám bức ảnh
function grayScale() {
  let image = document.createElement("IMG");
  for (var pixel of image.values()) {
    let avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  //display new image
  let canvas = document.querySelectorAll(".card");
  image.drawTo(canvas);
}

//Hàm làm mờ ảnh
function blur() {}
