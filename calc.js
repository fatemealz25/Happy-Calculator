resultEl = document.querySelector('#result')
clearEl = document.querySelector('#clear')
backEl = document.querySelector('#back')
pointEl = document.querySelector('#point')




// ---- add numbers to result element ----
for (let i = 0; i < 10; i++) {

    document.querySelector(`#num${i}`).addEventListener('click' , e =>{
        // console.log(e.target.value)
        let currentText = resultEl.innerText
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


