import {getForm} from "../helpers/getForm.js";
import Visits from "./Visits.js";

class CardioVisit extends Visits {
    constructor({id, doctors, fullName, purpose, timing, description, status, pressure, index, diseases, age}) {
        super({id, doctors, fullName, purpose, timing, description, status});
        this.pressure = pressure;
        this.index = index;
        this.diseases = diseases;
        this.age = age;
    }

    renderForm() {
        const addValue = `
    <div class="lableVisit" id="formForDoctor">
    <lable id="pressure">Звичайний тиск:</lable>
    <input type="number" name="pressure" required></div>
    <div class="lableVisit">
    <lable id="index">Індекс маси тіла:</lable>
    <input type="number" name="index" required></div>
    <div class="lableVisit">
    <lable id="diseases">Захворювання:</lable>
    <input type="text" name="diseases" required></div>
    <div class="lableVisit">
    <lable id="age">Вік:</lable>
    <input type="number" name="age" required></div>
    `
        super.renderForm(addValue)
        const option = document.getElementById('selectDoc');
        console.log(option)
        option.value = 'CardioVisit';
        option.addEventListener("change", function (event) {
                console.log(event.target.value)
                getForm(event.target.value)


            }
        )
    }

    render() {
        document.querySelector(".grid-container").insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span class="cardInfo">${this.doctors}</span>
  <span class="cardInfo">${this.fullName}</span>
  <span class="cardInfo">${this.purpose}</span>
  <span class="cardInfo">${this.description}</span>
  <span class="cardInfo">${this.timing}</span>
  <span class="cardInfo">${this.status}</span>
  <span class="cardInfo">${this.pressure}</span>
  <span class="cardInfo">${this.index}</span>
  <span class="cardInfo">${this.diseases}</span>
  <span class="cardInfo">${this.age}</span>
  </div>`)
    }
}

export default CardioVisit;