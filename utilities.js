const states = ["ready", "playing", "end"];

const NUMBER = 7;
const FOOTER_HEIGHT = 40;
const IMAGE_WIDTH = 40;
const IMAGE_HEIGHT = 40;
let MAX_SPEED = 1.5;

let width = window.innerWidth;
let height = window.innerHeight - FOOTER_HEIGHT;

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

class Sprite {
    constructor(path, type) {
        this.type = type;
        this.x = this.get_x_position();
        this.y = this.get_y_position();
        this.delta_x = this.get_motion();
        this.delta_y = this.get_motion();
        this.image = new Image();
        this.image.src = path;
    }
    get_x_position() {
        return Math.floor(Math.random() * (width - IMAGE_WIDTH));
    }
    get_y_position() {
        return Math.floor(
            Math.random() * (height - FOOTER_HEIGHT - IMAGE_HEIGHT)
        );
    }
    get_motion() {
        return (
            (Math.random() * (MAX_SPEED - 1) + 1) *
            [1, -1][Math.floor(Math.random() * 2)]
        );
    }
    update_and_draw() {
        this.change_direction();
        this.change_position();
        ctx.drawImage(this.image, this.x, this.y);
    }
    change_direction() {
        if (this.x + this.delta_x > width - IMAGE_WIDTH) {
            this.delta_x *= -1;
        } else if (this.x + this.delta_x < 0) {
            this.delta_x *= -1;
        }
        if (this.y + this.delta_y > height - IMAGE_HEIGHT - FOOTER_HEIGHT) {
            this.delta_y *= -1;
        } else if (this.y + this.delta_y < 0) {
            this.delta_y *= -1;
        }
    }
    change_position(factor = 1) {
        this.x += this.delta_x * factor;
        this.y += this.delta_y * factor;
    }
    change_direction_and_motion() {
        this.change_direction();
        this.delta_x = this.get_motion();
        this.delta_y = this.get_motion();
    }
}
