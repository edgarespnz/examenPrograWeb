let board;
arregloTurnos = [
    "X",
    "O",

    "X",
    "O",

    "X",
    "O",

    "X",
    "O",

    "X"
]

fila0 = []
fila1 = []
fila2 = []

const crearBoard = (numFilas,numColumnas)=>{
    let filas = [];
    for(i = 0; i<numFilas;i++){
        let casillas = []
        /*
        for(j = 0; j<numColumnas;j++){
            
        }*/
        filas.push(casillas)
    }
    return filas

}

function setValue(board, fila, columna,valor){
    board[fila][columna] = valor
    
}

    const getValue = (board,fila,columna) =>{
        return board[fila][columna]
    }

const renderizarBoard = (board) =>{
    for(let i = 0 ; i<board.length ; i++){
        const casillas = board[i]
        for(let j = 0; j< casillas.length ; j++){
            const obtenerCasilla = document.getElementById(i + "x" + j)
            if(casillas[j]){
                obtenerCasilla.innerHTML = casillas[j]
            }
            else{
                obtenerCasilla.innerHTML = ""
            }
        }
    }
}


const casillaOnClick = (fila,columna) =>{
    valor1 = arregloTurnos.pop()
    const casilla = document.getElementById(fila + "x" + columna)
    setValue(board,fila,columna,valor1)
    casilla.disabled = true;
    renderizarBoard(board)

    //si pertenece a la primera fila
    if(fila == 0 && columna == 0){
        fila0.push(valor1)
    }
    if(fila == 0 && columna == 1){
        fila0.push(valor1)
    }
    if(fila == 0 && columna == 2){
        fila0.push(valor1)
    }

    //si pertenece a la segunda fila
    if(fila == 1 && columna == 0){
        fila1.push(valor1)
    }
    if(fila == 1 && columna == 1){
        fila1.push(valor1)
    }
    if(fila == 2 && columna == 2){
        fila1.push(valor1)
    }

    //si pertenece a la tercera fila

    if(fila == 2 && columna == 0){
        fila2.push(valor1)
    }
    if(fila == 2 && columna == 1){
        fila2.push(valor1)
    }
    if(fila == 2 && columna == 2){
        fila2.push(valor1)
    }
    
    console.log("fila 1: "+fila0)
    console.log("fila 2: "+fila1)
    console.log("fila 3: "+fila2)

    setTimeout(recorrerMatriz(),200)
    
}

const recorrerMatriz = () =>{
    //fila 0
    if(fila0[0] == fila0[1] && fila0[1]== fila0[2] && fila0.length !=0){
        alert("ganaste")
        deshabilitarBotones(board)
    }

    //fila1
    if(fila1[0] == fila1[1] && fila1[1]== fila1[2] && fila1.length !=0){
        alert("ganaste")
        deshabilitarBotones(board)
    }

    //fila2

    if(fila2[0] == fila2[1] && fila2[1]== fila2[2] && fila2.length !=0){
        alert("ganaste")
        deshabilitarBotones(board)
    }

    

    
}

const deshabilitarBotones = (board) =>{
    for(i in board){
        casilla = i
        casilla.disabled = true
    }
}


const main = () =>{
    alert("El Juego empieza, primer jugador marca con X")
    board = crearBoard(3,3)
    renderizarBoard(board)
    
}

main()
