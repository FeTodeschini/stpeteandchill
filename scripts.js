function checkAvailability(house){

    dateFrom = document.getElementById(house + "-date-from").value;
    dateTo = document.getElementById(house + "-date-to").value;

    if (house == "bb") house = "Blue Breeze";
    if (house == "gp") house = "Golden Palm";

    if (dateFrom == '' || dateTo == ''){
      alert (`Please select the period for which you want to check the availability of ${house}.`);
      return;
    }   

    if (dateFrom >= dateTo){
      alert("The final date for checking the availability needs to be greater than the initial date.");
      return
    }

    message = `I would like to check the availability of ${house} from ${dateFrom} to ${dateTo}.`;
    window.location.href = `mailto:laura@addventuresproperties.com?Subject=${house}'s Availability&Body=${message}`;

}

/*---------- MODAL (POPUP) ---------- */

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("laura");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}