let box = document.querySelector('.burger__box')
let ul = document.querySelector('.nav')
let btn = document.querySelector('.navsb')
let burger = document.querySelector('.burger')

let toggleBurger = ()=>{
    box.classList.toggle('active')
    ul.classList.toggle('active')
    btn.classList.toggle('active')
    burger.classList.toggle('active')

}
