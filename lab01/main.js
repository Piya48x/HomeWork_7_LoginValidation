// let h1 = document.getElementsByTagName('h1')

// console.log(h1)
// console.log(h1[0])

// h1[0].style.color = 'red'

// let p = document.getElementsByTagName('p')
// console.log(p)

// // p[0].innerText = 'Codecamp Academy 1'
// // p[1].innerText = 'Codecamp Academy 2'
// // p[2].innerText = 'Codecamp Academy 3'
// // p[3].innerText = 'Codecamp Academy 4'
// // for (let i=0; i<p.length; i++){
// //     p[i].innerText =`Codecamp Acdemy 0${i+1}`
// // }
// let i=1 
// for(let el of p){
//     el.innerText = `Codecamp Academy 0${i++}`
// }

// let ctn = document.getElementsByClassName('container')
// console.log(ctn[0])
// ctn[0].style.background = 'skyblue'

// let para1 = document.getElementById('para1')
// console.log(para1)

// let p3 = document.querySelector('.item03')
// console.log(p3)
// p3.innerText = 'Good day'

// let allp = document.querySelectorAll('.item')
// console.log(allp)

// allp.forEach( (el,i)=>{
//     i = i+1
//     el.innerText = `Codecamp Academy 0${i}`
// })

// let qpara1 = document.querySelector('#para1')
// console.log(qpara1)
// qpara1.style.color = 'blue'

// let qa_para1 = document.querySelectorAll('#para1')
// console.log(qa_para1[0])

// let item = document.querySelectorAll('.item')
// console.log(item)

// การ matched.

// let p = document.querySelectorAll('p')
// console.log(p)

// console.log(p[0].matches('#para1'))
// console.log(p[1].matches('#para1'))

//************ Closet */

// let item03 = document.querySelector('.item03')
// console.log(item03)

// let ctn = item03.closest('.container')
// console.log(ctn)

//***** contains */
// let container = document.querySelector('.container')
// let para1 = document.querySelector('#para1')

// console.log(container.contains(para1))
// console.log(document.body.contains(para1))
// console.log(para1.contains(container))

//** Nodetype */

// let ctn = document.querySelector('.container')
// console.log(ctn.childNodes)
// console.log(ctn.childNodes[0].nodeType)
// console.log(ctn.childNodes[1].nodeType)

//  **** contents

// let para1 = document.querySelector('#para1')
// para1.innerHTML = 'Codecamp<br><em>Academy</em>'
// para1.innerText = 'Codecamp<br><em>Academy</em>'
// para1.textContent = 'Codecamp<br><em>Academy</em>'
// console.log(para1.outerHTML)
// para1.outerHTML = '<img src="https://picsum.photos/300/200?random=1">'

//let para1 = document.querySelector('#para1')
//console.log(para1.attributes)
// console.log(typeof para1.attributes)
// console.log(Array.isArray(para1.attributes))
// console.log(para1.attributes[1].value)
// console.log(para1.hasAttribute('id'))
// console.log(para1.hasAttribute('idx'))
// console.log(para1.getAttribute('class'))
// para1.setAttribute('name', 'first-line')
// console.log(para1)
// para1.removeAttribute('name')
// console.log(para1)

// console.log(para1.dataset)
// console.log(para1.dataset.orderId)
// console.log(para1.dataset.title)

// ******* create
// const newDiv = document.createElement('div')
// console.log(newDiv)
// newDiv.setAttribute('class', 'wrapper')
// console.log(newDiv.outerHTML)

// const newItem = document.createElement('p')
// newItem.setAttribute('class', 'item item01')
// newItem.textContent = 'NEW ITEM'
// console.log(newItem.outerHTML)

// const ctn = document.querySelector('.container')
// ctn.after(newDiv)
// newDiv.append(newItem)
// // ctn.append(newItem)
// const newItem2 = newItem.cloneNode(true)
// newItem2.setAttribute('class', 'item item02')
// console.log(newItem2.outerHTML)
// newDiv.append(newItem)

// const newItem3 = newItem.cloneNode(true)
// // newItem3.setAttribute('class', 'item item03')
// newItem3.classList.add('item03')
// newItem3.classList.remove('item01')
// newDiv.append(newItem3)

// DRY Code = Don't Repeat Yourself
// please don't DRy :
// สร้าง HTML Element ตาม Code นี้ด้วย createElement..don't DRY : 
/**
 <p class="item item01">NEW ITEM 01</p>
 <p class="item item02">NEW ITEM 02</p>
 <p class="item item03">NEW ITEM 03</p>
 <p class="item item04">NEW ITEM 04</p>
 */

// const ctn = document.querySelector('.container')
// const newDiv = document.createElement('div')
// newDiv.setAttribute('class', 'wrapper')

// for (let i = 1; i <= 4; i++) {
//     const newItem = document.createElement("p");
//     newItem.setAttribute("class", `item item0${i}`);
//     newItem.textContent = `NEW ITEM 0${i}`;
//     newDiv.appendChild(newItem); // Append <p> to the <div>
// }

// // Append the newly created <div> to the container element
// ctn.appendChild(newDiv);
// ctn.before(newDiv)

// function makeElement(tag, atrName, atrValue, content){
//     let output = document.createElement(tag)
//     output.setAttribute(atrName, atrValue)
//     output.textContent = content
//     return output
// }

// let wrapper = makeElement('div', 'class', 'wrapper', '')
// console.log(wrapper)
// // console.log(wrapper)
// for(let i=1; i<=4; i++){
//     let newItem = makeElement('p', 'class', `item item0${i}`,`NEW ITEM0${i}`)
//     wrapper.append(newItem)
// }

// const ctn = document.querySelector('.container')
// ctn.after(wrapper)

// **** remove element

// const n3 = document.querySelector('.wrpper > .item03')
// n3.remove()

// const n2 = document.querySelectorAll('.item03')
// console.log(n2)
// n2.forEach( el=> el.remove())

// const ctn = document.querySelector('.container')
// ctn.onclick = function(){
//     ctn.classList.toggle('hilight')
// }

// *** style 
// const h1 = document.querySelector('h1')
// h1.style.borderTopStyle = 'Dashed'
// h1.style.color = 'red'

// setTimeout(()=>{
//     h1.style.removeProperty('border-top-style')
// },1500)

// console.log(getComputedStyle(h1).marginTop)
// console.log(getComputedStyle(h1).color)
// console.log(getComputedStyle(h1).borderTop)
// console.log(getComputedStyle(h1).width)
// console.log(getComputedStyle(h1).height)

// ****** Event



const h1 = document.querySelector('h1');

function h1Click() {
    h1.classList.toggle('highlight');
}

h1.addEventListener('mouseover', h1Click);
h1.addEventListener('click', h1Click);

function btnClick() {
    h1.removeEventListener('click', h1Click);
}

function btn2Click() {
    h1.addEventListener('click', h1Click);
}

const btn = document.createElement('button');
btn.innerText = 'remove h1 event';
btn.style.padding = '0.4rem';
btn.addEventListener('click', btnClick);
h1.after(btn);

const btn2 = btn.cloneNode(true);
btn2.innerText = 'add h1 event';
btn2.addEventListener('click', btn2Click);
btn.after(btn2);

