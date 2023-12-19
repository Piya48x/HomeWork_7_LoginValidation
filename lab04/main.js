
const loginForm = document.querySelector('.login-form');
const inp_username = document.querySelector('#username');
const inp_password = document.querySelector('#password');

const validateInput = (inputObj) => {
  for (const key in inputObj) {
    if (inputObj[key].trim() === '' || (key === 'username' && inputObj[key].length <= 3) || (key === 'password' && inputObj[key].length <= 4)) {
      return false;
    }
  }
  return true;
};

const dhlLoing = (e) => {
  e.preventDefault();

  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  console.log(inputObj); // เพิ่มบรรทัดนี้

  if (validateInput(inputObj)) {
    window.location.href = 'https://www.example.com';
  } else {
    alert('Not according to the conditions')
    for (let el of loginForm.elements) {
      el.style.borderColor = 'red';
      
    }
  }
};

loginForm.addEventListener('submit', dhlLoing);

// const loginForm = document.querySelector('.login-form')
// const inp_username = document.querySelector('#username')
// const inp_password = document.querySelector('#password')

// // โจทย์ : ให้สร้าง code เพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form ดังนี้
// // 1. ทุก input ต้องไม่ใส่ค่าว่าง
// // 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
// // 3. password ความยาวต้องมากกว่า 4 ตัวอักษร

// // ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// // ถ้า validate ผ่านให้ไปที่ https://www.example.com

// const validateInput=(inputObj)=>{
    
// }

// const dhlLoing = e =>{
//     e.preventDefault()
//     console.log(loginForm.elements)
//     let allInput = loginForm.elements
//     let inputObj = {}
//     for(let el of loginForm.elements){
//         inputObj[el.id] = el.value
//     }
//     console.log(inputObj)
//     // console.log(allInput['username'].id)
//     // console.log(allInput['username'].value)

//     // console.log(allInput['role'].id)
//     // console.log(allInput['role'].value)
//     //ทำได้หลายวิธี
//     // console.log(allInput[0].value)
//     // console.log('-------------------')
//     // console.log(inp_username.value)
//     // console.log(inp_password.value)
//     // console.log(e.target)
//     // alert('Submmiting...')
//     // console.log('ok, submit')
// }

// loginForm.addEventListener('submit', dhlLoing)