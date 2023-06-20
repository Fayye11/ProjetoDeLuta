let Log = new log(document.querySelector('.log'))





let char = new knight('Cauã batalhadeiro');
let monster = new littleMonster();

const start = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    Log
)
start.start();
