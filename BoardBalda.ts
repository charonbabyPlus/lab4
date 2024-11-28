import { Board, BoardParam } from "./Board";


export class BoardBalda extends Board {
    constructor(
        str: string[] | string = "балда",
        init: boolean = true
    ) {
        // TODO
        // Если длина str==5, то дополняет ее 10 пробелами до и после
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класс
        if (str.length == 5){
            str = '__________' + str + '__________'

        }
        super(str, BoardBaldaParam.row, BoardBaldaParam.col)

        if (init) {
            BoardBalda.col = BoardBaldaParam.col
            BoardBalda.row = BoardBaldaParam.row
        }
    }
    clone(init: boolean = false): Board {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        const clonedBoard = new BoardBalda([...this.cells]);
        clonedBoard.cells = this.cells.slice();
        if (init) {
            BoardBalda.row = Board.row;
            BoardBalda.col = Board.col;
        }
        return clonedBoard;
        
    }
}

export const BoardBaldaParam: BoardParam = {
    row: 5,
    col: 5
}