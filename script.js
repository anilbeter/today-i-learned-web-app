const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*
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

[2, 4, 6, 8].forEach(el => console.log(el * 2)); // 4 8 12 16

const times2 = [2, 4, 6, 8].map(el => el * 2);
console.log(times2);
// (4) [4, 8, 12, 16]

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const categoryNames = CATEGORIES.map(el => el.name);
console.log(categoryNames);
// (8) ['technology', 'science', 'finance', 'society', 'entertainment', 'health', 'history', 'news']

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const factAges = initialFacts.map(el => calcFactAge(el.createdIn));
console.log(factAges);
// (3) [2, 4, 8]
console.log(factAges.join(" & "));
// 2 & 4 & 8
*/
