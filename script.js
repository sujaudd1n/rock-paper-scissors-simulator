const canvas = document.querySelector("#canvas");
const FOOTER_HEIGHT = 40;
const NUMBER = 5;
const IMAGE_WIDTH = 40;
const IMAGE_HEIGHT = IMAGE_WIDTH;

let width = window.innerWidth;
let height = window.innerHeight - FOOTER_HEIGHT;
let ctx = canvas.getContext("2d");

window.addEventListener("resize", render);

function draw_image(path, x, y) {
  const img = new Image();
  img.addEventListener("load", () => {
    ctx.drawImage(img, x, y);
  });
  img.src = path;
}

function render() {
  width = window.innerWidth;
  height = window.innerHeight - FOOTER_HEIGHT;

  canvas.width = width;
  canvas.height = height;

  for (let i = 0; i < NUMBER; ++i) {
    let x = Math.random() * width - IMAGE_WIDTH;
    let y = Math.random() * height - IMAGE_HEIGHT;
    x < 0 ? x = 0 : 1;
    y < 0 ? y = 0 : 1;
    draw_image("rock.svg", x, y);
    x = Math.random() * width - IMAGE_WIDTH;
    y = Math.random() * height - IMAGE_HEIGHT;
    x < 0 ? x = 0 : 1;
    y < 0 ? y = 0 : 1;
    draw_image("paper.svg", x, y);
    x = Math.random() * width - IMAGE_WIDTH;
    y = Math.random() * height - IMAGE_HEIGHT;
    x < 0 ? x = 0 : 1;
    y < 0 ? y = 0 : 1;
    draw_image("sissor.svg", x, y);
  }
}

render();
