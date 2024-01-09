  /* ---------- CONTACT MODAL (POPUP) ---------- */

  let contactModal = document.getElementById("contactModal");

  // Get the button that opens the modal
  let menuContact = document.getElementById("menuContact");
  
  // Get the <span> element that closes the modal
  let spanContact = document.getElementsByClassName("close-contact")[0];
  
  // When the user clicks the button, open the modal 
  menuContact.onclick = function() {
    contactModal.style.display = "block";
  }
  
  // When the user clicks on <span> (x), close the modal
  spanContact.onclick = function() {
    contactModal.style.display = "none";
  }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == contactModal) {
        contactModal.style.display = "none"
      }
    }