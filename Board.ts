export type BoardParam = {
    row: number,
    col: number
}

// Абстрактный класс доски
export abstract class Board {
    cells: string[]

    static row: number
    static col: number

    constructor(
        str: string[] | string,
        row?: number,
        col?: number,
    ) {
        // TODO
        // При наличии row или col 
        //  инициализировать соответсвующие поля
        // Инициализировать массив cells
        if (row) {
            Board.row = row;
        }
        if (col) {
            Board.col = col;
        }

        this.cells = typeof str === 'string' ? str.split('') : str;
    }


    abstract clone(): Board

    isFill(): boolean {
        // TODO
        // Возвращет true если на доске нет пустых клеток
        // Реомендуется реализация без циклов,
        //  с использованием функций массивов
        return this.cells.every(cell => cell !== '_')
    }

    move(index: number, sym: string): boolean {
        // TODO
        // Если ячейка this.cell[index] занята - возвращает false
        // Записывает в ячейку cell и возвращает true
        if (this.cells[index] !== '_'){
            return false
        }
        this.cells[index] = sym
        return true
    }

    status(): string {
        // TODO
        // Если доска заполнена возвращает "Игра закончена"
        //   если игра не закончена, строку "Идет игра".
        if (this.isFill()){
            return "Игра закончена"
        }
        else {
            return "Идет игра"
        }
    }
}