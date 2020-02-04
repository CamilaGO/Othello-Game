
/*const renderLuz = ({
    color,
    size = 200,
    isTurnedOn = false,
}) => {
    const luz = document.createElement('div');
    luz.style.width = `${size}px`;
    luz.style.height = `${size}px`;
    luz.style.borderRadius = `${size / 2}px`;
    luz.style.backgroundColor = color;
    luz.style.opacity = isTurnedOn ? 1.0 : 0.25;
    return luz;
}


const render = (mount, state) => {
    const { turnedOnIndex } = state;

    const semaforo = document.createElement('div');
    semaforo.style.backgroundColor = 'black';
    semaforo.style.width = '200px';
    semaforo.style.padding = '25px';
    [
        'red',
        'yellow',
        'green'
    ].map(
        (color, index) => renderLuz({
            color,
            isTurnedOn: index === turnedOnIndex,
        }),
    ).forEach(
        luz => semaforo.appendChild(luz),
    );

    const boton = document.createElement('button');
    boton.style.width = '250px';
    boton.style.fontSize = '20px';
    boton.innerText = 'Siguiente';

    boton.onclick = () => {
        state.turnedOnIndex = (state.turnedOnIndex + 1) % 3;
        root.innerHTML = '';
        render(root, state);
    };

    mount.appendChild(semaforo);
    mount.appendChild(boton);
};


const APP_STATE = {
    turnedOnIndex: 1,
};

const root = document.getElementById('root');

render(root, APP_STATE);*/



/*state.board.map(
    (fila, iFila) => (
        fila.map(celda, iColumna) => (
            renderCelda(iFila, iColumna, state[iFila][iColumna])
        )
    )
)*/
const renderCelda = ({
    iFila, 
    iColumna, 
    casilla,
    size = 50,
}) => {
    const celda = document.createElement('div');
    celda.style.width = `${size}px`;
    celda.style.height = `${size}px`;
    celda.style.borderRadius = `${size / 3}px`;
    celda.style.backgroundColor = '#b4b5b1';
    celda.style.margin = '3px';
    celda.style.float = 'left';
    celda.fila = iFila;
    celda.columna = iColumna;
    celda.dominio = casilla
    if(celda.dominio == -1){
        celda.style.backgroundColor = '#ffffff';
        console.log(celda.dominio);
    }else if(celda.dominio == 1){
        celda.style.backgroundColor = '#000000';
        console.log(celda.dominio);
    }

    return celda;
};

const render = (mount, state) => {
    const {playerTurn, board} = state;
    const myBoard = document.createElement('div');
    myBoard.style.backgroundColor = 'green';
    myBoard.style.width = '450px';
    myBoard.style.height = '450px';
    myBoard.style.padding = '25px';

    state.board.map((fila, iFila) => fila.map((casilla, iColumna) => renderCelda({iFila, iColumna, casilla})).forEach(celda => myBoard.appendChild(celda)));

    mount.appendChild(myBoard);
    //mount.appendChild(boton);
};
const GAME_STATE = {
    playerTurn: false,
    // Turno 0 (false) para player 1 y Turno 1(true) para player 2
    //En el tablero 0 representa vacio, -1 blanco y 1 negro
    board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
};
const root = document.getElementById('root');
render(root, GAME_STATE);

