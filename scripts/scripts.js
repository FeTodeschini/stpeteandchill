function checkAvailability(house){

    dateFrom = document.getElementById(house + "-date-from").value;
    dateTo = document.getElementById(house + "-date-to").value;

    if (house == "bb") house = "Blue Breeze";
    if (house == "gp") house = "Golden Palm";
    if (house == "qj") house = "Quiet Jungle";

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

function collapseMenu(){
  document.getElementById('navi-toggle').checked = false;
}


