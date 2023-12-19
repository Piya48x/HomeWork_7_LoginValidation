const nav = document.querySelector('nav')

const blackList = ['example', 'w3schools']

const aClick = e => {
    let foundItem = blackList.find(el => e.target.href.includes(el))
    if(foundItem){
        e.preventDefault()
        alert(`Stop to go : ${foundItem}`)
        window.location.assign('https://wikipedia.org')
    }
    console.log(e.target.href)
}

for(let el of nav.children){
    el.addEventListener('click', aClick)
}