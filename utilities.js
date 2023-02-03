const FOOTER_HEIGHT = 40;
const NUMBER = 3
const IMAGE_WIDTH = 40;
const IMAGE_HEIGHT = 40;

let width = window.innerWidth;
let height = window.innerHeight - FOOTER_HEIGHT;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

class Sprite {
  constructor(path, type) {
    this.path = path;
    this.x = Math.floor(Math.random() * (width - IMAGE_WIDTH));
    this.y = Math.floor(Math.random() * (height - FOOTER_HEIGHT - IMAGE_HEIGHT));
    this.image = new Image();
    this.image.src = path;
    this.delta_x = 1.5;
    this.delta_y = 1.5;
    this.type = type;
  }
  change_direction() {
    if (this.x >= width - IMAGE_WIDTH) this.delta_x *= -1;
    else if (this.x <= 0) this.delta_x *= -1;
    if (this.y >= height - IMAGE_HEIGHT) this.delta_y *= -1;
    else if (this.y <= 0) this.delta_y *= -1;
  }
  change_direction_collide()
  {
    this.delta_x *= -1;
    this.delta_y *= -1;
  }
  change_position() {
    this.x += this.delta_x;
    this.y += this.delta_y;
  }
  draw() {
    this.change_direction();
    this.change_position();
    ctx.drawImage(this.image, this.x, this.y);
  }
}
