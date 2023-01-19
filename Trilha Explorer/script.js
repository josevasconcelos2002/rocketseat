/* 
const o valor nao pode ser alterado
let -> o valor da variavel pode ser alterado mais tarde 
*/
const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  gym: ["01-16", "01-18"],
  study: ["01-16", "01-17", "01-18"],
  programming: ["01-16", "01-17", "01-18", "01-19"],
}

nlwSetup.setData(data)
nlwSetup.load()
