/* 
const o valor nao pode ser alterado
let -> o valor da variavel pode ser alterado mais tarde 
*/
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt").slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia ja existe")
    return //para o programa
  }
  alert("Adicionado")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("habits", JSON.stringify(nlwSetup.data))
}

//const data = {
//gym: ["01-16", "01-18"],
//study: ["01-16", "01-17", "01-18"],
//programming: ["01-16", "01-17", "01-18", "01-19"],
//}
const data = JSON.parse(localStorage.getItem("habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()