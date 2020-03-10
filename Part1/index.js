console.log('hello, world')

let board = []

function play(clickedId){
    const playerSpan = document.getElementById('player')
    const clickedElement = document.getElementById(clickedId)
    
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedId] = 'X'
    }else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedId] = 'O'
    }
    console.log(board)

    let topLeft = board[0];
    let topCenter = board[1];
    let topRight = board[2];
    let middleLeft = board[3];
    let middleCenter = board[4];
    let middleRight = board[5];
    let bottomLeft = board[6];
    let bottomCenter = board[7];
    let bottomRight = board[8];
    
    if(topRight !== undefined && topRight === topCenter && topRight === topLeft){
        alert(`${topRight} is the winner`);
        return 
    }else if(middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
        alert(`${middleRight} is the winner`);
        return
    }else if(bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft){
        alert(`${bottomRight} is the winner`);
        return  
    }else if(topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
        alert(`${topLeft} is the winner`)
        return      
    }else if(topCenter !== undefined && topCenter === middleCenter && topCenter=== bottomCenter){
        alert(`${topCenter} is the winner`)
        return
    }else if(topRight != undefined && topRight === middleRight && bottomRight === middleRight){
        alert(`${topRight} is the winner`)
        return
    }else if(topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
        alert(`${topLeft} is the winner`)
        return
    }else if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`${topRight} is the winner`)
        return        
    }

    let boardFull = true;
    for(let i = 0; i <= 8; i++){
        if(board[i] === undefined){
            boardFull = false
        }
    }
        if(boardFull === true) {
            alert(`Cat's game, there is no winner`)
        }

    

}