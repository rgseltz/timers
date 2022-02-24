function countDown(num) {
    console.log(num);
    let timer = setInterval(
        function () {
            num--;
            if (num <= 0) {
                clearInterval(timer);
                return console.log("Done!");
            }
            else {
                return console.log(num);
            }
        },1000
    )
}


function randomGame() {
    let randomNum;
    let gameCount = 0;
    let startGame = setInterval(
        function () {
            randomNum = Math.random();
            gameCount++;
            console.log(randomNum);
            if (randomNum > .75) {
                clearInterval(startGame);
                console.log (`I randomly picked ${gameCount} times`);
            }     
        }, 1000
    );
}