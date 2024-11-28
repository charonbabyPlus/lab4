import { BoardParam } from "./Board"
import { GameVC } from "./GameVC"
import { Input } from "./Input"
import { State } from "./State"

// Класс
export class Game {
    // Шаги игры
    steps: State[]
    // Номер текущей игры
    current: number
    // Параметры доски (размеры)
    boardParam: BoardParam
    // интерфейс для пользовательского ввода
    input: Input

    constructor(
        steps: State[] | State,
        input: Input,
        boardParam: BoardParam,
        current: number = 0
    ) {
        if (Array.isArray(steps))
            this.steps = steps
        else
            this.steps = [steps]
        this.current = current
        this.boardParam = boardParam
        this.input = input
        
    }

    get state(): State {
        // TODO
        // Сеттер должен возвращать текущее состояние игры
        return this.steps[this.current]
    }

    clone(): Game {
        // TODO
        // Функция должна вернуть копию объекта
        const newGame = new Game([...this.steps],this.input, this.boardParam, this.current)
        return newGame
    }

    move(index: number): boolean {
        // TODO        
        // Определяет, какой символ ходит, и пытается сделать ход 
        //  с помощью board.move.
        // Если ход можно сделать, то добавляет  новыу позицию в steps, 
        //  обновляет current и возвращает true, иначе возвращает false
        // Нужно учесть, что если вызывалась функция toStep, то 
        //  current можно указывать не на последний элемент steps
    const sym = this.input.sym
    const board = this.state.board.clone()

    if (board.move(index, sym)) {
        this.steps = this.steps.slice(0, this.current + 1)
        this.steps.push(new State(board, sym))
        this.current++
        this.input.move()
        GameVC.draw()
        return true
    }
    return false
    }

    toStep(step: number) {
         // TODO
        // Проверяет, что в steps есть элемент с индексом step,
        //  если нет то возвращает false
        // Делает current равным step и обновляет свойство cell в board
        if (step < 0 || step >= this.steps.length){
            return false
        }
        this.current = step
        GameVC.draw()
        return true  
    }
}