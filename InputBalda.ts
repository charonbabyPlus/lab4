import { Input } from "./Input";

export class InputBalda extends Input {
    override get html(): string  {
        return "<input id='inputBalda'></input>"
    }

    get sym(): string {
        // TODO
        //  возвращает символ из поля ввода        
        const inputElement = <HTMLInputElement>document.getElementById('inputBalda');
        const inputValue = inputElement ? inputElement.value.trim() : '';
        if (inputValue.length > 0) {
            const firstChar = inputValue[0].toLowerCase();
            if (firstChar >= 'а' && firstChar <= 'я' || firstChar >= 'А' && firstChar <= 'Я')
                return firstChar;
            if (firstChar >= 'a' && firstChar <= 'z' || firstChar >= 'A' && firstChar <= 'Z')
                return firstChar;
        }
    
        return '_';
    }
    move(): void {
        // TODO
        //  очищает поле ввода
        const inputElement = <HTMLInputElement>document.getElementById('inputBalda');
        inputElement.value = '';
        }
    }

