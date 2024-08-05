const select = document.querySelector("select");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const btn = document.querySelector("#btn");
const result = document.querySelector(".result");

console.log(select.value);

btn.addEventListener("click", () => {
  let number1 = num1.value;
  let number2 = num2.value;

  result.innerHTML = doCalculation(Number(number1), Number(number2));
});

function doCalculation(nu1, nu2) {
  if (select.value === "plus") {
    return nu1 + nu2;
  } else if (select.value === "min") {
    return nu1 - nu2;
  } else if (select.value === "dev") {
    return nu1 / nu2;
  } else if (select.value === "multi") {
    return nu1 * nu2;
  }
}
