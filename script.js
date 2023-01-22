const canvas = document.querySelector("#canvas");
const FOOTER_HEIGHT = 40;
let ctx = canvas.getContext("2d");

render();

window.addEventListener("resize", render);

function render() {
  let width = window.innerWidth;
  let height = window.innerHeight - FOOTER_HEIGHT;

  canvas.width = width;
  canvas.height = height;
  ctx.fillStyle = "green";
  ctx.fillRect(10, 10, width / 2, height / 2);
}