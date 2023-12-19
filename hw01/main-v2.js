const root = document.querySelector('#root')
// <!-- <div class="counter">
// <button class="btn btn-inc">+</button>
// <h3 class="number">0</h3>
// <button class="btn btn-dec">-</button>
// <button class="btn btn-clr">C</button>
// </div> -->

// const counter = document.createElement('div')
// counter.setAttribute('class', 'counter')

// const button = document.createElement('button')
// button.setAttribute('class', 'btn btn-inc')
// button.textContent = '+'

// const button = document.createElement('h3')
// button.setAttribute('class', 'btn btn bedgd')
// button.textContent = '0'

// counter.append(btn)
let countNum = 0

function makeElemnt(tag, attr_n, att_v, content){
    let output = document.createElement(tag)
    output.setAttribute(attr_n, att_v)
    output.textContent = content
    return output
} 

function updateCounter(n){
    if(countNum + n < 0){
        return
    }
    countNum += n
    number.textContent = countNum
}


const counter = makeElemnt('div', 'class', 'counter', '')
const btnInc = makeElemnt('button', 'class', 'btn-inc', '+')
const number = makeElemnt('h3', 'class', 'number', '0')
const btnDec = makeElemnt('button', 'class', 'btn-dec   ', '-')
const btnClr = makeElemnt('button', 'class', 'btn-clr', '0')

btnInc.addEventListener('click', ()=> updateCounter(1))
btnDec.addEventListener('click', ()=> updateCounter(-1))
btnClr.addEventListener('click', ()=> updateCounter(-countNum))

counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)

root.append(counter)
