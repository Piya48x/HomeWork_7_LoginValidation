const root = document.querySelector("#root");
const Add = document.querySelector(".btn-add");
const sumInfo = document.querySelector('.show-sum')

let tolal = 0

function Counter() {
  let countNum = 0;

  function makeElemnt(tag, attr_n, att_v, content) {
    let output = document.createElement(tag);
    output.setAttribute(attr_n, att_v);
    output.textContent = content;
    return output;
  }

  // render
  function updateCounter(n) {
    if (countNum + n < 0) {
      return;
    }
    countNum += n;
    tolal += n
    number.textContent = countNum;
    sumInfo.textContent = `Sum = ${tolal}`
  }

  const delCounter = (e) => {
    //root.removeChild(counter);
    // console.log(e.target.closest(".counter"));
    updateCounter(-countNum)
    e.target.closest(".counter").remove();
  };

  const counter = makeElemnt("div", "class", "counter", "");
  const btnInc = makeElemnt("button", "class", "btn-inc", "+");
  const number = makeElemnt("h3", "class", "number", "0");
  const btnDec = makeElemnt("button", "class", "btn-dec   ", "-");
  const btnClr = makeElemnt("button", "class", "btn-clr", "0");
  const btnDel = makeElemnt("button", "class", "btn-del", "X");

  btnInc.addEventListener("click", () => updateCounter(1));
  btnDec.addEventListener("click", () => updateCounter(-1));
  btnClr.addEventListener("click", () => updateCounter(-countNum));
  btnDel.addEventListener("click", delCounter);

  counter.append(btnInc, number, btnDec, btnClr, btnDel);
  // counter.append(btnInc);
  // counter.append(number);
  // counter.append(btnDec);
  // counter.append(btnClr);

  return counter;
}

const hdlAddCounter = () => {
  root.append(Counter());
};

Add.addEventListener("click", hdlAddCounter);

// root.append(Counter());

// function MyDiv(content){
//     return `<div>${content}</div>`
// }

// console.log(MyDiv('TEST Div'))
