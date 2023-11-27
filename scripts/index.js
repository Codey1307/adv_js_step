// 726f8982-072f-4309-934f-3fa2041c134c
//korotejev@gmail.com
//123

import {
    openModal,
    createModal,
    getAuthForm,
    authFormHandler,
    authWithEmailAndPassword,
    showBtnCreateVisit,
    isAuthorized,
    logout
} from "./Authorization/authorization.js";

import DentistVisit from "./classes/DentistVisit.js";
import CardioVisit from "./classes/CardioVisit.js";
import TherapistVisit from "./classes/TherapistVisit.js";
import Visits from "./classes/Visits.js";
import {getForm} from "./helpers/getForm.js";
import {CreateFormFilter} from "./FilterCards/filterCards.js"
import filterCards from "./FilterCards/filterCards.js";
import {renderCards} from "./CreateCard/createCards.js";
import {filterUrgency} from "./FilterCards/filterCards.js";
import {deleteCard} from "./deleteCard/deleteCard.js";
import { readMore } from "./readMoreCards/readMoreCards.js";



export var arrCardsVisits = [];


export async function cardInfo() {
    const requests = await fetch("https://ajax.test-danit.com/api/v2/cards",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(data => data.json())
    Promise.all(requests)
        .then(responses => {
            // console.log('responses', responses)
            arrCardsVisits = responses;

            if (responses.length < 1) {
                const div = document.querySelector('.main-container');
                const h2 = document.createElement('h2');
                h2.className = "title-main";
                h2.innerHTML = "У Вас відсутні картки запланованих зустрічей до лікарів";
                div.append(h2);

                return;
            }

            const h2 = document.createElement('h2');
            h2.remove()

            renderCards(responses);
        })
}

const btnVisit = document.getElementById('createVisit-btn')
btnVisit.addEventListener("click", function (event) {
    new Visits({}).renderForm()
    const option = document.getElementById('selectDoc');
    console.log(option)
    option.addEventListener("change", function (event) {
            console.log(event.target.value)
            getForm(event.target.value)
        }
    )
})





 
  