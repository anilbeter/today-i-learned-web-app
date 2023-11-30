const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "Impossible year";
}
const age1 = calcFactAge(2015);
console.log(age1);

// console.log(new Date("2023-12-31"));
// Sun Dec 31 2023 03:00:00 GMT+0300 (GMT+03:00)

const calcFactAge2 = year => new Date().getFullYear() - year;
console.log(calcFactAge2(2015));
// 8
