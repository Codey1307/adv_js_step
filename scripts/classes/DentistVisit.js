import { getForm } from "../helpers/getForm.js";
import Visits from "./Visits.js";
import { readMore } from "../readMoreCards/readMoreCards.js";

class DentistVisit extends Visits {
  constructor({id, doctors, fullName, purpose, timing, description, status, lastVisit}) {
    super({id, doctors, fullName, purpose, timing, description, status});

    this.lastVisit = lastVisit;
  }
renderForm(){      
    const addValue = `    
  <div class="lableVisit" id="formForDoctor">
  <lable id="lastVisit">Останній візит:</lable>
  <input type="date" name="lastVisit" required></div>
  `
  super.renderForm(addValue)
  const option = document.getElementById('selectDoc');
  option.value='DentistVisit';
  option.addEventListener("change", function (event) {
    console.log(event.target.value)
   getForm(event.target.value)
  }
  )
}
render() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = this.id
  card.innerHTML = `<svg id="deleteBtn" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
  <span class="cardInfo">${this.doctors}</span>
  <span class="cardInfo">${this.fullName}</span>`

  const readMoreBtn = document.createElement("button");
  readMoreBtn.innerText = "Показати більше";
  readMoreBtn.classList.add("read_more_btn");
  readMoreBtn.addEventListener("click", (e) => {
    card.innerHTML = `
    <svg id="deleteBtn" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
  <span class="cardInfo">${this.doctors}</span>
  <span class="cardInfo">${this.fullName}</span>
  <span class="cardInfo">${this.description}</span>
  <span class="cardInfo">${this.timing}</span>
  <span class="cardInfo">${this.status}</span>
  <span class="cardInfo">${this.lastVisit}</span></div>`
  e.target.remove()
  })
  
  card.append(readMoreBtn);
  document.querySelector(".grid-container").prepend(card);
}
}

export default DentistVisit;