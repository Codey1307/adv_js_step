//import {URL_USER_INFO, AUTHORIZATION_TOKEN} from "../constants/constants.js"




const postCards = async () => {
  try {
    const data = (await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${"6905f287-0231-463f-9520-1e50f37ba227"}`,
      },
      body: JSON.stringify( new FormData(createForm))
    }))
      let result = await response.json();
      alert(result.message);
      return data;
   
  } catch (err) {
    console.log(err)
  }
}




export default postCards;
