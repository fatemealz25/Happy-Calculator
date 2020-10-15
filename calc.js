const resultEl = document.querySelector('#result')
const clearEl = document.querySelector('#clear')
const backEl = document.querySelector('#back')
const pointEl = document.querySelector('#point')
const plusEl = document.querySelector('#plus')
const minusEl = document.querySelector('#minus')
const multEl = document.querySelector('#mult')
const divideEl = document.querySelector('#divide')
const modEl = document.querySelector('#mod')
const equalEl = document.querySelector('#equal')
const sinEl = document.querySelector('#sin')
const cosEl = document.querySelector('#cos')
const tanEl = document.querySelector('#tan')
const cotEl = document.querySelector('#cot')
const logEl = document.querySelector('#log')
let operator
let number1
let number2


// ---- convert degree to radian ----
const toRadian = (degree)=>{
    return degree * ( Math.PI / 180)
}

// ---- convert tan to cot ----
const cot = (x)=>{
    return 1 / Math.tan(x)
}


// ---- add numbers to result element ----
for (let i = 0; i < 10; i++) {

    document.querySelector(`#num${i}`).addEventListener('click' , e =>{
        // console.log(e.target.value)
        let currentText = resultEl.innerText
        console.log(currentText)
        resultEl.innerHTML = currentText + e.target.value
    })
}

// ---- add point to result element ----
document.querySelector(`#point`).addEventListener('click' , e =>{

    currentText = resultEl.innerText
    if(!currentText.includes('.')){
        resultEl.innerHTML = currentText + e.target.value
    }
})



// ---- clear the result element completely ----
clearEl.addEventListener('click' , e =>{
    resultEl.innerHTML = ''
})


// ---- backspace the result element ----
backEl.addEventListener('click' , e =>{
    currentText = resultEl.innerText
    resultEl.innerHTML = currentText.slice(0 , currentText.length - 1)
})



// ---- set the operators and take the first number ----
plusEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'plus'
    resultEl.innerHTML = '<i class="fas fa-plus"></i>'
})
minusEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'minus'
    resultEl.innerHTML = '<i class="fas fa-minus"></i>'
})
multEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'mult'
    resultEl.innerHTML = '<i class="fas fa-times"></i>'
})
divideEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'divide'
    resultEl.innerHTML = '<i class="fas fa-divide"></i>'
})
modEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'mod'
    resultEl.innerHTML = '<i class="fas fa-percent"></i>'
})
logEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'log'
    resultEl.innerHTML = `log(${number1}`
})
sinEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    console.log(`number1 : ${number1}`)
    operator = 'sin'
    resultEl.innerHTML = `sin(${number1}`
    console.log(resultEl.innerHTML)
})
cosEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'cos'
    resultEl.innerHTML = `cos(${number1}`
})
tanEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'tan'
    resultEl.innerHTML = `tan(${number1}`
})
cotEl.addEventListener('click' , e=>{
    number1 = resultEl.innerText
    operator = 'cot'
    resultEl.innerHTML = `cot(${number1}`
})




// ---- equal operator functionality----
equalEl.addEventListener('click' , e=>{

    if(operator == 'plus'){

        number2 = resultEl.innerText
        result = parseFloat(number1) + parseFloat(number2)
        resultEl.innerHTML = result

    }else if(operator == 'minus'){

        number2 = resultEl.innerText
        result = parseFloat(number1) - parseFloat(number2)
        resultEl.innerHTML = result

    }else if(operator == 'mult'){

        number2 = resultEl.innerText
        result = parseFloat(number1) * parseFloat(number2)
        resultEl.innerHTML = result

    }else if(operator == 'divide'){

        number2 = resultEl.innerText
        result = parseFloat(number1) / parseFloat(number2)
        resultEl.innerHTML = result

    }else if(operator == 'mod'){

        number2 = resultEl.innerText
        result = parseFloat(number1) % parseFloat(number2)
        resultEl.innerHTML = result

    }else if(operator == 'sin'){

        if (!number1){
            currentText = resultEl.innerText
            number1 = currentText.slice(4)
        }
        radian = toRadian(parseFloat(number1))
        result = Math.sin(radian).toFixed(10)
        resultEl.innerHTML = result

    }else if(operator == 'cos'){

        if (!number1){
            currentText = resultEl.innerText
            number1 = currentText.slice(4)
        }
        radian = toRadian(parseFloat(number1))
        result = Math.cos(radian).toFixed(10)
        resultEl.innerHTML = result

    }else if(operator == 'tan'){

        if (!number1){
            currentText = resultEl.innerText
            number1 = currentText.slice(4)
        }
        radian = toRadian(parseFloat(number1))
        result = Math.tan(radian).toFixed(10)
        resultEl.innerHTML = result

    }else if(operator == 'cot'){

        if (!number1){
            currentText = resultEl.innerText
            number1 = currentText.slice(4)
        }
        radian = toRadian(parseFloat(number1))
        result = cot(radian).toFixed(10)
        resultEl.innerHTML = result

    }else if(operator == 'log'){

        if (!number1){
            currentText = resultEl.innerText
            number1 = currentText.slice(4)
        }

        result = Math.log10(number1).toFixed(10)
        resultEl.innerHTML = result

    }
    
})