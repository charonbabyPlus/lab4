import { Board, BoardParam } from "./Board";

export class BoardTic extends Board {

    constructor(
        str: string[] | string = ["_________"],
        init: boolean = true        
    ) {
        // TODO
        // Если длина str!=9, то используется строка по умолчанию
        // Вызывает родительский конструктор,
        //  если init, то дополнительно инициализируются
        //  статические поля класса
        if (str.length !== 9){
            str = "_________"
        }
            super(str)
        if (init) {
            BoardTic.row = BoardTicParam.row
            BoardTic.col = BoardTicParam.col
        }
    }

    clone(init: boolean=false): Board {
        // TODO
        // Функция должна вернуть копию объекта
        // Если init, то дополнительно инициализируются
        //  статические поля класса
        const newBoard = new BoardTic([...this.cells], false);
        if (init) {
            BoardTic.row = BoardTicParam.row
            BoardTic.col = BoardTicParam.col
        }
        return newBoard
    }

    private getLineChar(line: number[]): string[] {
        return [this.cells[line[0]], this.cells[line[1]], this.cells[line[2]]];
    }

    private static winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    checkWin() {
        // TODO
        // Если имеется комбинация из трех одинаковых символов "X" или "0" 
        //  в линию - возвращает этот символ
        // Иначе возвращает символ "_"
        for (const line of BoardTic.winPos){
            const[a, b, c] = this.getLineChar(line)
            if (a === b && b === c && a !== '_'){
                return a
            }
        }
        return "_"
    }

    override status(): string {
        // TODO
        // возвращает либо строку с результатом игры, либо, 
        //   если игра не закончена, вызывает status родителя.
        if (this.checkWin() === 'X'){
            return 'Победил X'
        }
        else if (this.checkWin() === '0'){
            return 'Победил 0'
        }
        else {
            return super.status()
        }
    }

}

export const BoardTicParam: BoardParam = {
    row: 3,
    col: 3
}