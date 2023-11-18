import Visits from "./Visits.js";

class CardioVisit extends Visits {
  constructor(id, name, purpose, time, description, pressure, index, diseases, age) {
    super(id, name, purpose, time, description);

    this.pressure = pressure;
    this.index = index;
    this.diseases = diseases;
    this.age = age;
  }
  renderForm(){    
    document.getElementById("createForm")?.remove()
    const addValue = `
    <div class="lableVisit">
    <lable id="pressure">Звичайний тиск:</lable>
    <input type="text" name=""></div>
    <div class="lableVisit">
    <lable id="index">Індекс маси тіла:</lable>
    <input type="text" name=""></div>
    <div class="lableVisit">
    <lable id="diseases">Захворювання:</lable>
    <input type="text" name=""></div>
    <div class="lableVisit">
    <lable id="age">Вік:</lable>
    <input type="text" name=""></div>
    `
    super.renderForm(addValue)
  }
  render(selector) {
    document.querySelector("body").insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.name}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.time}</span>
  <span>${this.pressure}</span>
  <span>${this.index}</span>
  <span>${this.diseases}</span>
  <span>${this.age}</span>
  </div>`)}
}

export default CardioVisit;