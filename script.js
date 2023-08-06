const box = document.querySelector(".box-wrap");
const btn = document.querySelector(".btn");
let deg = 0;

btn.onclick = () => {
  deg += 90;
  box.style.transform = "rotate("+deg + "deg)";
};
