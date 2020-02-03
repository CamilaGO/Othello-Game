
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
    size = 100,
}) => {
    const celda = document.createElement('div');
    celda.style.width = `${size}px`;
    celda.style.height = `${size}px`;
    celda.style.borderRadius = `${size / 2}px`;
    celda.style.backgroundColor = color;
    return celda;
};

const render = (mount, state) => {
    const myBoard = document.createElement('div');
    myBoard.style.backgroundColor = 'green';
    myBoard.style.width = '550px';
    myBoard.style.padding = '25px';

    mount.appendChild(myBoard);
    //mount.appendChild(boton);
};
const GAME_STATE = {
    player1Turn: true,
    player2Turn: false,
    board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
};
const root = document.getElementById('root');
render(root, GAME_STATE);

