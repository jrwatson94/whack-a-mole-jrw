let globalScore = 0;
const scoreDisplay = document.querySelector('.score')
scoreDisplay.innerText = `Score: ${globalScore}`

const playGame = () => {
    const moles = document.querySelectorAll('.mole-img')
    let count = 1
    moles.forEach((mole) => {
        mole.setAttribute('id', count)
        count ++
    })
    
    setInterval(() => {
        moles.forEach((mole) => {
            mole.style.visibility = 'hidden'
        })
        let randomMole = moles[Math.floor(Math.random() * 9)]
        randomMole.style.visibility = 'visible'
    }, (Math.random() + .2)*900)
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