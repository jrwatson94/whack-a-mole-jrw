let globalScore = 0;
const scoreDisplay = document.querySelector('.score')
scoreDisplay.innerText = `Score: ${globalScore}`
const banner = document.querySelector('.banner')
const scoreSpan = document.querySelector('.score-span')


let timeRemaining = 60
let timeDisplay = document.querySelector('.timer')

const countDown = (gameFunction) => {
    const timer = setInterval(()=> {
        if (timeRemaining > 0){
            timeRemaining--
            timeDisplay.innerText= `Time Remaining: ${timeRemaining}`
        }else{
            clearInterval(gameFunction)
            clearInterval(timer)
            endGame()
        }
    }, 1000)
}

const playGame = () => {
    const moles = document.querySelectorAll('.mole-img')
    let count = 1
    moles.forEach((mole) => {
        mole.setAttribute('id', count)
        count ++
    })
    
    const molesAppear = setInterval(() => {
        moles.forEach((mole) => {
            mole.style.visibility = 'hidden'
        })
        let randomMole = moles[Math.floor(Math.random() * 9)]
        randomMole.style.visibility = 'visible'
    }, (Math.random() + .15)*900)

    countDown(molesAppear)
}

const endGame = () => {
    timeRemaining = 60;
    const moles = document.querySelectorAll('.mole-img')
    scoreSpan.innerText = `${globalScore} points.`
    banner.innerText = `Game Over! You Scored `
    
    globalScore = 0;
    scoreDisplay.innerText = `Score: ${globalScore}`
    moles.forEach((mole) => {
        mole.style.visibility = 'hidden'
    })
}

const renderBoard = () => {
    const gameBoard = document.querySelector('.game-board')
    for (let i = 0; i < 3; i++) {
        const row = document.createElement('div')
        row.className = "row"
        for (let i = 0; i < 3; i++) {
            const column = document.createElement('div')
            column.className="col-4"
            const mole = document.createElement('div')
            const moleImg = document.createElement('img')
            moleImg.src = './assets/mole.png'
            moleImg.className="mole-img"
            mole.className="mole"
            mole.style.visibility = 'hidden'
            mole.append(moleImg)
            column.append(mole)
            row.appendChild(column)
        }
        gameBoard.appendChild(row)
    }
}

const addStartButtonListener = () => {
    const startButton = document.querySelector('.start')
    startButton.addEventListener('click', () => {
        banner.innerText=''
        scoreSpan.innerText=''
        playGame()
    })
}

const addMoleListener = () => {
    const moles = document.querySelectorAll('.mole-img')
    moles.forEach((mole) => {
        mole.addEventListener('click', () =>{
            if(mole.style.visibility === "visible"){
                globalScore++
                scoreDisplay.innerText = `Score: ${globalScore}`
            }
        })
    })
}

const init = () => {
   renderBoard();
   addStartButtonListener();
   addMoleListener(); 
}

init()