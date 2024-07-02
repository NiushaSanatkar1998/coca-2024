let div = document.querySelector("div.menu2>div.icon");
console.log(div);
let div1 = document.querySelector("div.menu2>div.icon>div:nth-of-type(1)");
let div2 = document.querySelector("div.menu2>div.icon>div:nth-of-type(2)");
let div3 = document.querySelector("div.menu2>div.icon>div:nth-of-type(3)");
let smenu = document.querySelector("div.menu2>div.h-menu");

div.addEventListener("click", function () {
  div1.classList.toggle("div01");
  div3.classList.toggle("div03");
  div2.classList.toggle("div02");
  smenu.classList.toggle("block");
});
