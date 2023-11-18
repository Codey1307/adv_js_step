

class Visits {
  constructor(id, name, purpose, time, description) {
    this.id = id;
    this.name = name;
    this.purpose = purpose;
    this.time = time;
    this.description = description;
  }

  render(selector) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.name}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.time}</span>
  </div>`)}

  renderForm(addContent){
    document.querySelector("body").insertAdjacentHTML('beforeend', `
    <form id="createForm" class="modal formDoc">
    
    <div class="lableVisit"><lable id="nameForm">І'мя:</lable>
    <input type="text" name=""></div>
    <div class="lableVisit"><lable id="purposeForm">Мета:</lable><br>
    <input type="text" name=""></div>
    <div class="lableVisit"><lable id="timeForm">Час:</lable><br>
    <input type="text"></div>
    <div class="lableVisit"><lable id="descrForm">Опис:</lable><br>
    <input type="text"></div>
    <select id="selectDoc" name="doctors">
    <option value="choose">вибрати лікаря</option>
    <option value="DentistVisit">Dentist</option>
    <option value="TherapistVisit">Therapist</option>
    <option value="CardioVisit">Cardio</option>
  </select>
    ${addContent}
    <input id="submitBtn" type="submit" value="Створити">
  </form>
    `    )
    const form = document.getElementById("createForm")
    mui.overlay('on', form);
}


}
export default Visits;

