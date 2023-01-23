const FOOTER_HEIGHT = 40;
const NUMBER = 5;
const IMAGE_WIDTH = 40;
const IMAGE_HEIGHT = IMAGE_WIDTH;

let width = window.innerWidth;
let height = window.innerHeight - FOOTER_HEIGHT;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

class Sprite {
  constructor(path) {
    this.path = path;
    this.x = Math.floor(Math.random() * width - IMAGE_WIDTH);
    this.y = Math.floor(Math.random() * height - FOOTER_HEIGHT - IMAGE_HEIGHT);
    this.image = new Image();
    this.image.src = path;
    this.delta_x = 1.5;
    this.delta_y = 1.5;
  }
  draw() {
    if (this.x >= width - IMAGE_WIDTH)
        this.delta_x *= -1;
    else if (this.x <= 0)
        this.delta_x *= -1;
    if (this.y >= height - IMAGE_HEIGHT)
        this.delta_y *= -1;
    else if (this.y <= 0)
        this.delta_y *= -1;

    this.x += this.delta_x;
    this.y += this.delta_y;
    ctx.drawImage(this.image, this.x, this.y);
  }
}
