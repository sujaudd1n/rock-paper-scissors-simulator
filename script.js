const ROCK = [];
const PAPER = [];
const SCISSOR = [];
for (let i = 0; i < NUMBER; ++i) {
  ROCK.push(new Sprite("rock.svg"));
  PAPER.push(new Sprite("paper.svg"));
  SCISSOR.push(new Sprite("scissor.svg"));
}

function draw_all() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < NUMBER; ++i) {
    ROCK[i].draw();
    PAPER[i].draw();
    SCISSOR[i].draw();
  }

  window.requestAnimationFrame(draw_all);
}

function render() {
  width = window.innerWidth;
  height = window.innerHeight - FOOTER_HEIGHT;

  canvas.width = width;
  canvas.height = height;

  window.requestAnimationFrame(draw_all);
}

render();
window.addEventListener("resize", render);
