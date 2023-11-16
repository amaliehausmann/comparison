
/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */


/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/


const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');

// myAnsverButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   /* din kode her. Skriv en alert der skriver "du har svarret rigtigt" hvis svarret er true
//   og "du har svarret forkert" hvis svaret er false*/
//   if(myAnsverInput.value==="true"){
//     alert('Du har svaret rigtigt');
//   } else{
//     alert('Du har svaret forkert')
//   }
//   let myAnswer = myAnsverInput.value;
//   console.log('Answer is: ' + myAnswer);
// });

/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/
myAnsverButton.addEventListener('click', (e) => {
  e.preventDefault();
  /* din kode her. Skriv en alert der skriver "du har svarret rigtigt" hvis svarret er true
  og "du har svarret forkert" hvis svaret er false*/
  if(myAnsverInput.value==="true" || myAnsverInput.value=="also true"){
    alert('Du har svaret rigtigt');
  } else{
    alert('Du har svaret forkert')
  }
  let myAnswer = myAnsverInput.value;
  console.log('Answer is: ' + myAnswer);
});



/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/

document.getElementById('myform').addEventListener('submit', function(event){
  event.preventDefault();

  let emailValue = document.getElementById('myEmail').value;
  if(emailValue.trim().length > 3) {
    console.log("Emailen er længere end 3 tegn og er gyldig");
  } else {
    alert("Emailen skal være længere end 3 tegn.");
  }
});

document.getElementById('myform').addEventListener('submit', function(event){
  event.preventDefault();

  let ageValue = document.getElementById('myAge').value;
  if(ageValue > 12) {
    console.log("Alderen er højere end 12 og er gyldig");
  } else {
    alert("Du er ikke gammel nok");
  }
});








/* helper functions*/
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
