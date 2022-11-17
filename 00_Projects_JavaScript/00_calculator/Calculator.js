const numbersButtons = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const result = document.querySelector('.equal')
const cancel = document.querySelector('.c')
const deleteAll = document.querySelector('.ac')

//Display
const previouslyValue = document.querySelector('.previouslyValue');
const currentValue = document.querySelector('.currentValue');

class Calculator {
    constructor(previouslyValue, currentValue) {
        this.previouslyValue = previouslyValue;
        this.currentValue = currentValue;
        this.clearAll()
    }

    clearAll() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    deleteLast() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    printNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    calculate() {
        let calculate;
        const prev = parseFloat(this.previousOperand)
        const curr = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(curr)) return;
        switch (this.operation) {
            case '+': calculate = prev + curr;
                break
            case '−': calculate = prev - curr;
                break
            case '×': calculate = prev * curr;
                break
            case '÷': calculate = prev / curr;
                break
            default: return
        }
        this.currentOperand = calculate;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplay(number) {
        const numberString = number.toString()
        if (numberString.length <= 18) {
            const intNumber = parseFloat(numberString.split('.')[0])
            const decNumber = numberString.split('.')[1]
            let intDisplay;
            if (isNaN(intNumber)) {
                intDisplay = ''
            } else {
                intDisplay = intNumber.toLocaleString('en')
            }
            if (decNumber != null) {
                return `${intDisplay}.${decNumber.substring(0, 5)}`
            } else {
                return intDisplay
            }
        }
        return 'This number it\'s too big'
    }
    
    updateDisplay() {
        this.currentValue.innerText = this.getDisplay(this.currentOperand)
        if (this.operation != null) {
            this.previouslyValue.innerText = `${this.getDisplay(this.previousOperand)} ${this.operation}`
        } else {
            this.previouslyValue.innerText = ''
        }
    }

}
const calculator = new Calculator(previouslyValue, currentValue);

numbersButtons.forEach(buttonNumber => {
    buttonNumber.addEventListener('click', () => {
        calculator.printNumber(buttonNumber.innerText)
        calculator.updateDisplay()
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        calculator.chooseOperation(operator.innerText)
        calculator.updateDisplay()
    })
})

result.addEventListener('click', () => {
    calculator.calculate()
    calculator.updateDisplay()
})

deleteAll.addEventListener('click', () => {
    calculator.clearAll()
    calculator.updateDisplay()
})

cancel.addEventListener('click', () => {
    calculator.deleteLast()
    calculator.updateDisplay()
})