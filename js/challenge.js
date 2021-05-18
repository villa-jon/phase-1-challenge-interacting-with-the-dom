document.addEventListener("DOMContentLoaded", () => {
const counter  = document.getElementById('counter');
const subtract = document.getElementById("minus");
const add = document.getElementById("plus"); 
const heart = document.getElementById("heart");
let likes = document.querySelector(".likes");
const pause = document.getElementById("pause");
const comment = document.getElementById("comment-form")
let ul = document.createElement("ul")
let listWriting = document.getElementById("list")
listWriting.appendChild(ul)


const timer = setInterval(() => {
    counter.innerText++
  }, 1000);

subtract.addEventListener("click", function() {
  let count = parseInt(counter.innerHTML)
    counter.innerText = count - 1;  
  });

add.addEventListener("click", function() {
  let count = parseInt(counter.innerHTML)
    counter.innerText = count + 1;
  });
 
  heart.addEventListener("click", function() {
  if (document.getElementById(counter.innerText) === null) {
    let li = document.createElement("li");
    li.id = counter.innerText
    li.data = 1
   li.innerText = counter.innerText + ' has been liked ' + li.data + ' times';
    likes.appendChild(li);
  } else {
      let li = document.getElementById(counter.innerText);
      li.data++;
      li.innerHTML = counter.innerText + ' has been liked ' + li.data + ' times';
  }
  
  });

pause.data = false; 
pause.addEventListener("click", function() {
  if (pause.data === false) {
       pause.data = !pause.data;
       pause.innerText = "resume";
       window.clearInterval(timer);
       add.disabled = true;
       subtract.disabled = true;
       heart.disabled = true;
    } else { 
      pause.innerText = "pause";
      add.disabled = false;
      subtract.disabled = false;
      heart.disabled = false; 
    } 
      // when you pause a button on spotify, not only does it stop the music where it 
      // is but it changes the symbol. Allows the entire song to not restart, but to stop where it is. 
      // You want to access the timer and make it stop once we confirm that this is "pause"
 
} );
  // console.log(count)

comment.addEventListener('submit', function(w) {
    w.preventDefault()
    const input = w.target[0].value
    let li = document.createElement('li')
    li.innerText = input
    ul.appendChild(li)

    const deleteBtn = document.createElement("button")
    deleteBtn.innerText = ('delete') 
    deleteBtn.addEventListener("click", removeDelete)
  
    input.innerText = ' '

    li.appendChild(deleteBtn)
    w.target.reset
}) 

function removeDelete(w) {
  w.target.parentElement.remove()
}

})
