import Visits from "./Visits.js";

class TherapistVisit extends Visits {
  constructor(id, name, purpose, time, description, day) {
    super(id, name, purpose, time, description);
    this.day = day;
  }
  renderForm(){    
    document.getElementById("createForm")?.remove()
    const addValue = `
    <div class="lableVisit">   <lable id="day">День:</lable><br>
    <input type="text" name=""> </div>
    `
    super.renderForm(addValue)
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