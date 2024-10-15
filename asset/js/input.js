const inp = document.querySelector('div>input')
const btn = document.querySelector('div>button')
const ul = document.querySelector('div>ul')

btn.addEventListener('click', (e) => {

  if (inp.value != '') {
    let li = document.createElement('li')
    li.innerHTML =
      `<h2>${inp.value}</h2>
      <input type='text' id='inp'>
    <i class="bi bi-exclamation"></i>
  <i onclick='_delete(this)' class="bi bi-x-octagon"></i>
  <i onclick='check(this)' class="bi bi-file-check"></i>
  <i onclick='edit(this)' class="bi bi-pen"></i> `
  e.target.focus()
    ul.appendChild(li)
    inp.value = ''
    
  }
  else {
    // alert('put something')
   const alert = document.querySelector('.alert')   
    console.log(alert);
    alert.style.opacity='1'
    const alert_btn = document.querySelector('.alert>button')
    alert_btn.addEventListener('click',()=>{
      alert.style.opacity='0'
    })
    
  }
})

function _delete(s) {
  s.parentElement.classList.add('li-h')
  s.parentElement.remove()

  // setTimeout(() => {

  // }, 2000);
}
function check(e) {
  e.parentElement.children[0].classList.toggle('line')
  e.classList.toggle('checkout')
  e.parentElement.children[2].classList.toggle('active')



}
let flag = 1
function edit(t) {
  if (flag % 2) {
    let temp = t.parentElement.children[0].innerHTML
    console.log(temp);
    t.parentElement.children[0].innerHTML = ''
    t.style.color = 'yellow'
    t.parentElement.children[1].classList.add('inp')
    t.parentElement.children[1].value = temp
  } else {
    t.style.color = 'black'
    t.parentElement.children[1].classList.remove('inp')
    let temp = t.parentElement.children[1].value
      if(temp !=''){
        t.parentElement.children[0].innerHTML = temp
      }else{
        t.parentElement.remove()
      }
  }
  flag++
}

//////////////////////////////////////////////////////dark mode///////////////////////////////////////////

const dark = document.querySelector('.dark')
const sun = document.getElementById('sun')
const moon = document.getElementById('moon')
console.log(sun);
console.log(moon);
const img = document.getElementById('img-moon')
console.log(img);
const h1 = document.querySelector('h1')
console.log(dark);
dark.addEventListener('click',()=>{
sun.classList.toggle('out')
moon.classList.toggle('in')
img.classList.toggle('z')
h1.classList.toggle('txt-black')
ul.classList.toggle('bg-black')
console.log(ul);

})