function createBubble() {
    let bpanel = document.querySelector(".bpanel")
    let string = "";
    for (let i = 0; i < 120; i++) {
        let num = Math.floor(Math.random() * 10);
        string += ` <div id=bubble${i} class="ball">${num}</div>`
    }

    bpanel.innerHTML = string;
}

let timer = 60;
function runTimer() {

    let val = document.querySelector(".timer");

    let setVal = setInterval(function () {
        if (timer > 0) {
            timer--;
            val.innerHTML = timer;
        }
        else {
            clearInterval(setVal);
            let over = document.querySelector(".bpanel");
            over.innerHTML = ` <div class="over"><h1>Game Over</h1></div>`
        }

    }, 1000)


}


let hitVal = 0;
function hit() {
    hitVal = Math.floor(Math.random() * 10);
    let hitElem = document.querySelector(".hit");
    hitElem.innerHTML = hitVal;
}

let scoreVal = 0;
function increaseScore() {
    let score = document.querySelector(".scoreval");
    scoreVal += 10;
    score.innerHTML = scoreVal;
}

function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * (255));
    let val2 = Math.ceil(0 + Math.random() * (255));
    let val3 = Math.ceil(0 + Math.random() * (255));
    for (let i = 0; i < 120; i++) {
        let ball = document.querySelector(`#bubble${i}`);
        ball.style.backgroundColor = `rgb(${val1} , ${val2} , ${val3})`
        // use interpolation quotes not single quotes 
    }
}

function play() {
    let bubble = document.querySelector(".bpanel");
    bubble.addEventListener("click", function (dets) {

        let point = Number(dets.target.innerHTML);
        if (point == hitVal) {
            increaseScore();
            createBubble();
            hit();
            getRandomColor();
        }
    })
}

createBubble();
runTimer();
hit()
play();
