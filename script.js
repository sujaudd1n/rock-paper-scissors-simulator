const SPRITES = [];
for (let i = 0; i < NUMBER; ++i) {
  SPRITES.push(new Sprite("rock.svg", "ROCK"));
  SPRITES.push(new Sprite("paper.svg", "PAPER"));
  SPRITES.push(new Sprite("scissor.svg", "SCISSOR"));
}
render();
window.addEventListener("resize", render);

setInterval(detect_collision, 10);

function change_sprite(a, b) {
  if (a.type !== b.type) {
    if (a.type == "ROCK" && b.type == "PAPER") {
      a.type = "PAPER";
      a.image.src = b.image.src;
    } else if (a.type == "ROCK" && b.type == "SCISSOR") {
      b.type = "ROCK";
      b.image.src = a.image.src;
    } else if (a.type == "PAPER" && b.type == "ROCK") {
      b.type = "PAPER";
      b.image.src = a.image.src;
    } else if (a.type == "PAPER" && b.type == "SCISSOR") {
      a.type = "SCISSOR";
      a.image.src = b.image.src;
    } else if (a.type == "SCISSOR" && b.type == "ROCK") {
      a.type = "ROCK";
      a.image.src = b.image.src;
    } else {
      b.type = "SCISSOR";
      b.image.src = a.image.src;
    }

    a.change_direction_on_collide();
    b.change_direction_on_collide();

    a.change_position();
    b.change_position();
  }
}

function detect_collision() {
  for (let i = 0; i < SPRITES.length; ++i) {
    for (let j = 0; j < SPRITES.length; ++j) {
      if (i !== j) {
        if (
          Math.abs(SPRITES[i].x - SPRITES[j].x) < IMAGE_WIDTH &&
          Math.abs(SPRITES[i].y - SPRITES[j].y) < IMAGE_HEIGHT
        )
          change_sprite(SPRITES[i], SPRITES[j]);
      }
    }
  }
}

function draw_all() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < SPRITES.length; ++i) SPRITES[i].draw();
  window.requestAnimationFrame(draw_all);
}

function render() {
  width = window.innerWidth;
  height = window.innerHeight - FOOTER_HEIGHT;

  canvas.width = width;
  canvas.height = height;

  window.requestAnimationFrame(draw_all);
}
