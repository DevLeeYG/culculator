let numOne = "";
let operator = "";
let numTow = "";

const $operator = document.querySelector("#operator");
const $result = document.querySelector("#result");

document.querySelector("#num-0").addEventListener("click", () => {
  if (operator) {
    numTow += "0";
  } else {
    numOne += "0";
  }
  $result.value += "0";
});
document.querySelector("#num-1").addEventListener("click", () => {});
document.querySelector("#num-2").addEventListener("click", () => {});
document.querySelector("#num-3").addEventListener("click", () => {});
document.querySelector("#num-4").addEventListener("click", () => {});
document.querySelector("#num-5").addEventListener("click", () => {});
document.querySelector("#num-6").addEventListener("click", () => {});
document.querySelector("#num-7").addEventListener("click", () => {});
document.querySelector("#num-8").addEventListener("click", () => {});
document.querySelector("#num-9").addEventListener("click", () => {});
document.querySelector("#plus").addEventListener("click", () => {});
document.querySelector("#minus").addEventListener("click", () => {});
document.querySelector("#divide").addEventListener("click", () => {});
document.querySelector("#multiply").addEventListener("click", () => {});
document.querySelector("#calculate").addEventListener("click", () => {});
document.querySelector("#clear").addEventListener("click", () => {});
