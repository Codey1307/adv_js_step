import Visits from "./Visits.js";

class TherapistVisit extends Visits {
  constructor(id, name, purpose, time, description, day) {
    super(id, name, purpose, time, description);
    this.day = day;
  }
  renderForm(){    
    const submitBtn = document.getElementById("submitBtn").parentElement
   
    const addValue = `
    <div class="lableVisit" id="formForDoctor">
    <lable id="day">Вік:</lable>
    <input type="number" name="age" required></div>
    `
    submitBtn.insertAdjacentHTML("beforebegin", addValue)
  }
  render(selector) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.name}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.time}</span>
  <span>${this.day}</span>
  </div>`)}
}

export default TherapistVisit;