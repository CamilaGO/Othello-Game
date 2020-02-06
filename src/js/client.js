
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

function Seleccionar(iFila, iColumna, celda){
    //console.log(iFila, iColumna, celda.valor);
    //console.log(GAME_STATE.board[iFila][iColumna])
    if (GAME_STATE.playerTurn == true){
        //console.log('Ahora es turno del player 2');
        celda.valor = 1;
        GAME_STATE.board[iFila][iColumna] = 1;
        //GAME_STATE.playerTurn = false;
    }else{
        //console.log('Ahora es turno del player 1');
        celda.valor = -1;
        GAME_STATE.board[iFila][iColumna] = -1;
        //GAME_STATE.playerTurn = true;
    }
    root.innerHTML = '';
    render(root, GAME_STATE);
    //console.log(GAME_STATE.board[iFila][iColumna])
    //console.log(iFila, iColumna, celda.valor);
};


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
    celda.style.opacity = 0.5;
    celda.style.margin = '3px';
    celda.onclick = () => Seleccionar(iFila, iColumna,celda);
    celda.style.float = 'left';
    celda.fila = iFila;
    celda.columna = iColumna;
    celda.valor = casilla;
    if(celda.valor === 1){
        celda.style.backgroundColor = '#ffffff';
        celda.style.opacity = 1;
        //console.log(celda.valor);
    }else if(celda.valor === -1){
        celda.style.backgroundColor = '#000000';
        celda.style.opacity = 1;
        //console.log(celda.valor);
    }

    return celda;
};

const render = (mount, state) => {

    /* Decoracion*/
    const header = document.createElement('div');
    header.style.backgroundColor='grey';
    header.style.minWidth = '330px';
    header.style.height = '110px';
    header.style.display = 'flex';
    header.style.flexDirection = 'column'
    header.style.justifyContent = 'center';
    header.style.alignItems = 'center';
    header.style.overflow = 'auto';
    header.style.margin = '0px';
    const titulo = document.createElement('t1');
    const titulo_text = document.createTextNode('OTHELLO GAME')
    titulo.appendChild(titulo_text)
    titulo.style.backgroundColor = 'grey'
    titulo.style.color = 'black'
    titulo.style.fontSize = '30px';
    header.appendChild(titulo);
    /* Felx de la derecha*/
    const infog =document.createElement('div');
    infog.style.backgroundColor = 'black';
    infog.style.display = 'flex';
    infog.style.flexDirection = 'column';
    infog.style.justifyContent = 'center';
    infog.style.borderRadius = '50px';
    infog.style.overflow = 'auto';
    infog.style.height = '400px';
    infog.style.minWidth = '10px';
    infog.style.marginTop = '40px';
    infog.style.padding = '10px';

    /* Las intrucciones*/
    const info =document.createElement('div');
    info.style.backgroundColor = 'black';
    info.style.height = '450px'
    info.style.width = '400px';
    info.style.marginTop = '40px';
    info.style.padding = '10px';
    infog.appendChild(info);
    const inst1 = document.createElement('h1');
    const inst_1 = document.createTextNode('1. Empieza a jugar el player 01, quien tendrá fichas blancas.\n')
    inst1.appendChild(inst_1)
    inst1.style.backgroundColor = 'black'
    inst1.style.color = 'white';
    inst1.style.fontSize = '18px';
    inst1.style.margin = '10px';
    inst1.style.marginTop = '3px';
    info.appendChild(inst1);
    const inst2 = document.createElement('h1');
    const inst_2 = document.createTextNode('2. Luego de colocar tu ficha (UNA), gira las fichas correspondientes de tu oponente.\n')
    inst2.appendChild(inst_2)
    inst2.style.backgroundColor = 'black'
    inst2.style.color = 'white';
    inst2.style.fontSize = '18px';
    inst2.style.margin = '10px';
    info.appendChild(inst2);
    const inst3 = document.createElement('h1');
    const inst_3 = document.createTextNode('3. Presiona el boton "Listo" para que el siguiente jugador realice su movida\n')
    inst3.appendChild(inst_3)
    inst3.style.backgroundColor = 'black'
    inst3.style.color = 'white';
    inst3.style.fontSize = '18px';
    inst3.style.margin = '10px';
    info.appendChild(inst3);
    /* EL body */
    const body = document.createElement('div');
    body.style.backgroundColor = 'grey'
    body.style.minWidth = '330px';
    body.style.height = '650px';
    body.style.display = 'flex';
    body.style.flexDirection = 'columns';
    body.style.justifyContent = 'center';
    /* Termina la decoracion*/
    //Se crea el tablero
    const {playerTurn, board} = state;
    const myBoard = document.createElement('div');
    myBoard.style.backgroundColor = 'green';
    myBoard.style.overflow = 'auto';
    myBoard.style.borderRadius = '50px';
    myBoard.style.width = '450px';
    myBoard.style.height = '450px';
    myBoard.style.padding = '25px';
    myBoard.style.marginTop = '0px';
    myBoard.style.margin = '25px';
    //Se dibuja el tablero
    state.board.map(
        (fila, iFila) => fila.map(
            (casilla, iColumna) => renderCelda({iFila, iColumna,casilla})
        ).forEach(celda => myBoard.appendChild(celda))
    );

    //Convierte en array 2D en 1D para contar cuantas fichas de cada jugador hay
    const flat = [];
    state.board.forEach((fila) => fila.forEach((casilla) => flat.push(casilla)));
    //se cuentan las fichas de cada jugador
    const vacias = flat.filter(valor => valor === 0);
    const fichas1 = flat.filter(valor => valor === 1);
    const fichas2 = flat.filter(valor => valor === -1);
    //cuando el tablero se llena, se evalua quien es el ganador
    if (vacias.length < 1){
        alert('Fin del juego')
        if (fichas1.length > fichas2.length){
            alert('El jugador 1 es el ganador!\nRefresca la pagina para jugar de nuevo');
        } else if (fichas1.length === fichas2.length){
            alert ('Empate\nRefresca la pagina para jugar de nuevo');
        }else if (fichas1.length < fichas2.length){
            alert('El jugador 2 es el ganador!\nRefresca la pagina para jugar de nuevo');
        };
    };
    /*Los contadores en pantalla*/
    const infoJugada =document.createElement('div');
    infoJugada.style.backgroundColor = 'black';
    infoJugada.style.height = '200px';
    infoJugada.style.minWidth = '10px';
    infoJugada.style.marginTop = '50px';
    infoJugada.style.padding = '10px';
    infog.appendChild(infoJugada);
    const cont1 = document.createElement('h1');
    const contador_1 = document.createTextNode('Fichas blancas:  ' + (fichas1.length));
    cont1.appendChild(contador_1)
    cont1.style.backgroundColor = 'black'
    cont1.style.color = 'white';
    cont1.style.fontSize = '18px';
    cont1.style.margin = '10px';
    infoJugada.appendChild(cont1);
    const cont2 = document.createElement('h1');
    const contador_2 = document.createTextNode('Fichas negras:  ' + (fichas2.length))
    cont2.appendChild(contador_2)
    cont2.style.backgroundColor = 'black'
    cont2.style.color = 'white';
    cont2.style.fontSize = '18px';
    cont2.style.margin = '10px';
    infoJugada.appendChild(cont2);

    /*BOton de siguiente turno */
    const boton = document.createElement('button');
    boton.style.width = '200px';
    boton.style.fontSize = '20px';
    boton.style.margin = '10px';
    boton.innerText = 'Listo!';
    boton.style.borderRadius = '20px';

    boton.onclick = () => {
        if (GAME_STATE.playerTurn == true){
            alert('Ahora es turno del player 2');
            GAME_STATE.playerTurn = false;
        }else{
            alert('Ahora es turno del player 1');
            GAME_STATE.playerTurn = true;
        }
        root.innerHTML = '';
        render(root, state);
    };

    mount.appendChild(header);
    mount.appendChild(body);
    body.appendChild(myBoard);
    body.appendChild(infog);
    info.appendChild(boton);
};
const GAME_STATE = {
    playerTurn: true,
    // Turno true para player 1 y Turno false para player 2
    //En el tablero 0 representa vacio, 1 blanco (player 1) y -1 negro (player 2)
    board: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, -1, 0, 0, 0],
        [0, 0, 0, -1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
};

const root = document.getElementById('root');
render(root, GAME_STATE);

