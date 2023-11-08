function Gameboard(){
    let gameboard = [0,0,0,0,0,0,0,0,0];

    const getgameboard = () => gameboard;
    const update = (x,y) => gameboard[y] = x;

    return {getgameboard,update};
}

const test = Gameboard();
test.update(3,4);

console.log(test.getgameboard());