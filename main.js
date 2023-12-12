const btnLink = document.querySelectorAll('button')
btnLink.forEach(liEl => {
    liEl.addEventListener('click',()=>{
        btnLink.forEach(newLiEl => {
            if (newLiEl == liEl) {
                newLiEl.classList.add("active")
            }else{
                newLiEl.classList.remove("active")
            }
        })
    })
})

const btn = document.querySelector('#bir')
const btn1 = document.querySelector('#ikki')
const btn2 = document.querySelector('#uch')

btn.addEventListener('click',()=>{
    let umumiy = document.querySelector('.img2')
    let umumiy2 = document.querySelector('.img')
    umumiy.removeChild(umumiy.firstElementChild)
    umumiy2.removeChild(umumiy2.firstElementChild)
})
btn1.addEventListener('click',()=>{
    let yangi = document.createElement("img")
    yangi.setAttribute("src","./Guts.svg")
    document.body.querySelector(".img").appendChild(yangi)
})

btn2.addEventListener('click',()=>{
    let yangi = document.createElement("img")
    yangi.setAttribute("src","./Group 8.svg")
    document.body.querySelector(".img").appendChild(yangi)
    document.querySelector('.img').setAttribute("class","img2")
    let umumiy = document.querySelector('.img2')
    umumiy.removeChild()
    console.log(document.querySelector('.img').firstElementChild);
})
