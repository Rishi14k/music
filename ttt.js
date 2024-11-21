let turn = "X";
let mAudio = new Audio("freefire.mp3")
let isgameover = false;

function change() {
    return turn === "X" ? "0" : "X";
}

function checkWin() {
    let boxtext = document.getElementsByClassName("gtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.show').innerText = boxtext[e[0]].innerText + " Won"

            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".gtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            mAudio.play();
            turn = change();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("show")[0].innerText = "Turn For " + turn
            }
        }
    })
})
let btn = document.getElementById("btn")
btn.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.gtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("show")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})
