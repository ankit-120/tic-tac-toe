let boxes = document.querySelectorAll('.boxes');
console.log(boxes);

const p1 = document.getElementById('p1');
const tie = document.getElementById('tie');
const p2 = document.getElementById('p2');
const p1div = document.getElementById('p1div');
const p2div = document.getElementById('p2div');
const afterResult = document.getElementById('afterResult');
const gameLayout = document.getElementById('gameLayout');


let choise = 'X';
p2div.style.opacity = '20%';
for(let box of boxes){
    box.addEventListener('click',()=>{
        if(!checkResult()){
            if(choise == 'X'){
                p2div.style.opacity = '100%';
                p1div.style.opacity = '20%';
                if(box.innerHTML == ''){
                    let audio = new Audio('audio/click.mp3');
                    audio.play();
                    box.innerHTML = 'X';
                    choise = 'O';
                }
                if(checkResult()){
                    let audio = new Audio('audio/gameOver.mp3');
                    audio.play();
                    p1div.style.opacity = '100%';
                    p2div.style.opacity = '20%';
                    p1.innerText = 'X wins';
                    afterResult.style.display = 'block';
                    gameLayout.style.display = 'none';
                }
            }
            else{
                p1div.style.opacity = '100%';
                p2div.style.opacity = '20%';
                if(box.innerHTML == ''){
                    let audio = new Audio('audio/click.mp3');
                    audio.play();
                    box.innerHTML = 'O';
                    choise = 'X';
                }
                if(checkResult()){
                    let audio = new Audio('audio/gameOver.mp3');
                    audio.play();
                    p2div.style.opacity = '100%';
                    p1div.style.opacity = '20%';
                    p2.innerText = 'O wins';
                    afterResult.style.display = 'block';
                    gameLayout.style.display = 'none';
                }
            }
        }
    });
}

// fn to check the result 
const checkResult = () => {
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let item of winCondition){
        if ((boxes[item[0]].innerHTML == boxes[item[1]].innerHTML) && (boxes[item[1]].innerHTML == boxes[item[2]].innerHTML) && boxes[item[0]].innerHTML != "") {
            return true;
        }
    }
    return false;
}

console.log(checkResult());

// Reset button
const resetBtn = document.getElementById('resetBtn');
resetBtn.onclick = () =>{
    p1div.style.opacity = '100%';
    p2div.style.opacity = '20%';
    p1.innerText = '';
    p2.innerText = '';
    afterResult.style.display = 'none';
    gameLayout.style.display = 'block';

    boxes.forEach((box) => {
        box.innerHTML = '';
    })
}

const intro = document.getElementById('intro');
const mainDiv = document.getElementById('mainDiv');
const startBtn = document.getElementById('startBtn');
startBtn.addEventListener('click',()=>{
    intro.style.display = 'none';
    mainDiv.style.display = 'block';
});

