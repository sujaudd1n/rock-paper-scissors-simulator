function detect_win() {
    let data = [0, 0, 0];
    for (let item of SPRITES) {
        if (item.type === "ROCK") data[0] = 1;
        else if (item.type === "PAPER") data[1] = 1;
        else data[2] = 1;
    }
    if (data[0] + data[1] + data[2] <= 2) {
        let c1, c2;
        if (data[0] === 0) {
            c1 = "PAPER";
            c2 = "SCISSOR";
        }

        if (data[1] === 0) {
            c1 = "ROCK";
            c2 = "SCISSOR";
        }
        if (data[2] === 0) {
            c1 = "ROCK";
            c2 = "PAPER";
        }
        let winner;
        console.log(c1, c2);

        if (c1 === "ROCK") {
            if (c2 === "PAPER") winner = c2;
            else winner = c1;
        } else if (c1 === "PAPER") {
            if (c2 === "ROCK") winner = c1;
            else winner = c2;
        } else if (c2 === "ROCK") {
            winner = c2;
        } else winner = c1;

        if (winner) {
            reset();
            console.log(winner);
            show_winner(winner);
            return true;
        }
    }
    return false;
}

function show_winner(winner) {
    const elem = document.createElement("div");
    elem.textContent = winner + " has won";
    elem.classList.add("winnder-card");
    document.body.append(elem);
}

let dwid;

function detect_collision() {
    for (let i = 0; i < SPRITES.length; ++i) {
        for (let j = 0; j < SPRITES.length; ++j) {
            if (SPRITES[i].type !== SPRITES[j].type) {
                if (
                    Math.abs(SPRITES[i].x - SPRITES[j].x) < IMAGE_WIDTH &&
                    Math.abs(SPRITES[i].y - SPRITES[j].y) < IMAGE_HEIGHT
                ) {
                    change_sprite(SPRITES[i], SPRITES[j]);
                    SPRITES[i].change_direction_and_motion();
                    SPRITES[j].change_direction_and_motion();
                    SPRITES[i].change_position(2);
                    SPRITES[j].change_position(2);
                    detect_win();
                }
            }
        }
    }
}

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
    }
}

function draw_all() {
    ctx.clearRect(0, 0, width, height);
    detect_collision();
    for (let i = 0; i < SPRITES.length; ++i) SPRITES[i].update_and_draw();
    if (!detect_win()) window.requestAnimationFrame(draw_all);
}

function render() {
    width = window.innerWidth;
    height = window.innerHeight - FOOTER_HEIGHT;
    canvas.width = width;
    canvas.height = height;
}

function reset() {}

const SPRITES = [];

for (let i = 0; i < NUMBER; ++i) {
    SPRITES.push(new Sprite("rock.svg", "ROCK"));
    SPRITES.push(new Sprite("paper.svg", "PAPER"));
    SPRITES.push(new Sprite("scissor.svg", "SCISSOR"));
}

render();
let raid = window.requestAnimationFrame(draw_all);

window.addEventListener("resize", render);
// let dcid = setInterval(detect_collision, 10);
