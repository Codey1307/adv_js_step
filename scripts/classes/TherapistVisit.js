import { getForm } from "../helpers/getForm.js";
import Visits from "./Visits.js";

class TherapistVisit extends Visits {
  constructor({id, doctors, fullName, purpose, timing, description, status, age}) {
super({id, doctors, fullName, purpose, timing, description, status});
    this.age = age;
  }
  renderForm(){       
    const addValue = `
    <div class="lableVisit" id="formForDoctor">
    <lable id="day">Вік:</lable>
    <input type="number" name="age" required></div>
    `
    super.renderForm(addValue)
    const option = document.getElementById('selectDoc');
    console.log(option)
    option.value='TherapistVisit';
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
    <span class="cardInfo">${this.age}</span></div>`
    e.target.remove()
    })
    
    card.append(readMoreBtn);
    document.querySelector(".grid-container").prepend(card);
  //   document.querySelector(".grid-container").insertAdjacentHTML('beforeend', `
  // <div class="card" id=${this.id}>
  // <svg id="deleteBtn" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"/></svg>
  // <span class="cardInfo">${this.doctors}</span>
  // <span class="cardInfo">${this.fullName}</span>
  // <a href="" class="read_more_btn">Показати більше</a>
  // <span class="cardInfo">${this.purpose}</span>
  // <span class="cardInfo">${this.description}</span>
  // <span class="cardInfo">${this.timing}</span>
  // <span class="cardInfo">${this.status}</span>
  // <span class="cardInfo">${this.age}</span>
  // </div>`)}
}
}

export default TherapistVisit;