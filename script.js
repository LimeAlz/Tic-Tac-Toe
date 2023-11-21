function Tile() {
        this.value = '';
        this.setValue = function (value) {
                this.value = value;
        };
        this.getValue = function () {
                return this.value;
        }
}

function Gameboard() {

        let updateCounter = 0;


        const board = new Array(9)
        // const board = [zero,one,two,three,four,five,six,seven,eight];
        for (let i = 0; i < board.length; i++) {
                board[i] = new Tile;
        }

        const updateValue = function (value, pos) {
                board.at(pos).setValue(value)
                updateCounter = updateCounter + 1;
        };

        const getBoardValue = () => board.map((x) => x.getValue());

        const checker = function () {

                let gameWin = false;
                let gameLose =  false;
                if (updateCounter >= 3) {
                        if (board[0].getValue() === true && board[1].getValue() === true && board[2].getValue() === true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else if (board[3].getValue() == true && board[4].getValue() == true && board[5].getValue() == true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else if (board[6].getValue() == true && board[7].getValue() == true && board[8].getValue() == true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else if (board[0].getValue() == true && board[3].getValue() == true && board[6].getValue() == true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else if (board[1].getValue() == true && board[4].getValue() == true && board[7].getValue() == true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else if (board[2].getValue() == true && board[5].getValue() == true && board[8].getValue() == true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else if (board[0].getValue() == true && board[4].getValue() == true && board[8].getValue() == true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else if (board[2].getValue() == true && board[4].getValue() == true && board[6].getValue() == true) {
                                gameWin = true;
                                return gameWin;
                        }
                        else {
                                return gameWin;
                        }
                }
        }
        return { updateValue, getBoardValue, checker };
}



const testBoard = Gameboard();

const result = testBoard.checker();
console.log(testBoard.getBoardValue())
console.log(testBoard.checker());

const board0 = document.querySelector('#plate-0')
const board1 = document.querySelector('#plate-1')
const board2 = document.querySelector('#plate-2')
const board3 = document.querySelector('#plate-3')
const board4 = document.querySelector('#plate-4')
const board5 = document.querySelector('#plate-5')
const board6 = document.querySelector('#plate-6')
const board7 = document.querySelector('#plate-7')
const board8 = document.querySelector('#plate-8')

board0.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 0);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board0.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

board1.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 1);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board1.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

board2.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 2);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board2.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})
board3.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 3);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board3.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

board4.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 4);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board4.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

board5.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 5);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board5.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

board6.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 6);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board6.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

board7.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value,7 );
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board7.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

board8.addEventListener('click', function () {
        const value = document.querySelector('#avatar').value === 'true'?true:false;
        testBoard.updateValue(value, 8);
        const bgImage = value === true? "url(assets/circle.png)" : "url(assets/cross.png)";
        board8.style.backgroundImage = bgImage;
        console.log(testBoard.getBoardValue())
})

