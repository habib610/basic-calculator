const allBtn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");
const backSpace = document.querySelector('.back-space');

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", function () {
    let number = allBtn[i].getAttribute("data-num");
    screen.value += number;
  });
}
equalBtn.addEventListener("click", function () {
  if (screen.value == "") {
    alert('Value is empty')
  }
  else{
    let value = eval(screen.value);
    screen.value = value;
  }
});
clearBtn.addEventListener('click', function(){
    screen.value = '';
})
backSpace.addEventListener('click', function(){
    let current = screen.value;
    let mine = current.slice(0,-1);
    screen.value = mine;
})
