import Visits from "./Visits.js";

class DentistVisit extends Visits {
  constructor(id, name, purpose, time, description, lastVisit) {
    super(id, name, purpose, time, description);

    this.lastVisit = lastVisit;
  }
renderForm(){    
  document.getElementById("createForm")?.remove()
  const addValue = `
  <div class="lableVisit"> <lable id="lastVisit">останній візит:</lable><br>
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
  <span>${this.lastVisit}</span>
  </div>`)}
}

export default DentistVisit;