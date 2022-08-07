const contact = document.getElementById("contact");
const contactExpanded = document.getElementById("contact-expanded")


contact.addEventListener("click", toggleOnOff);
    
   


function toggleOnOff() {
    if ( contactExpanded.style.display === "none") {
        contactExpanded.style.display = "block";
    } else {
        contactExpanded.style.display = "none";
    }
}

