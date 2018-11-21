let timer = document.querySelector('#counter')
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
let form = document.querySelector('form')
let counter = setInterval(addOne, 1000)
let buttons = document.querySelectorAll('.button')

plus.addEventListener('click', addOne)
minus.addEventListener('click', minusOne)
heart.addEventListener('click', addLike)
pause.addEventListener("click", silenceAll)
form.addEventListener('submit', getFormValues)

function addOne(){
  return timer.innerText = parseInt(timer.innerText) + 1
}

function minusOne(){
  return timer.innerText = parseInt(timer.innerText) - 1
}

let counterTracker = {}
function addLike() {
  let liElement = document.createElement('li')
  liElement.innerText = timer.innerText
  counterTracker[liElement.innerText] ? counterTracker[liElement.innerText] += 1 : counterTracker[liElement.innerText] = 1
  liElement.innerText += ` liked ${counterTracker[liElement.innerText]} times`
  findLikes().appendChild(liElement)
}

function findLikes(){
  return document.querySelector('.likes')
}

function silenceAll(){
  if (pause.innerText === "pause") {
    clearInterval(counter)
    pause.innerText = "resume"
    buttons.forEach(function(button){
      button.disabled = true
    })
  }
  else if (pause.innerText === "resume"){
    counter = setInterval(addOne, 1000)
    pause.innerText = "pause"
    buttons.forEach(function(button){
      button.disabled = false
    })
  }
}

function getFormValues() {
  event.preventDefault()
  let input = document.querySelector('#comment-form').children[0].value
  form.reset()
  addComment(input)
}

function addComment(input){
  let commentLi = document.createElement('li')
  document.querySelector('.comments').appendChild(commentLi)
  commentLi.innerText = input
}
