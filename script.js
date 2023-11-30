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

const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact[0]);
// Lisbon is the capital of Portugal

// const [text, createdIn, isCorrect] = fact;
// console.log(text, createdIn, isCorrect);
// Lisbon is the capital of Portugal 2015 true

const [firstIndex] = fact;
console.log(firstIndex);
// Lisbon is the capital of Portugal

// Spread operator
const newFact = [...fact, "society"];
console.log(newFact);
// (4) ['Lisbon is the capital of Portugal', 2015, true, 'society']

const factObj = {
  text: "Lisbon is the capital of Portugal",
  category: "society",
  createdIn: 2015,
  isCorrect: true,
  createSummary() {
    return `The fact ${
      this.text
    } is from the category ${this.category.toUpperCase()}`;
  },
};
console.log(factObj.text);
// Lisbon is the capital of Portugal
console.log(factObj["text"]);
// Lisbon is the capital of Portugal

// Destructure obj
const { category: kategori, isCorrect } = factObj;
console.log(kategori, isCorrect);
// society true
console.log(factObj.createSummary());
// The fact Lisbon is the capital of Portugal is from the category SOCIETY
