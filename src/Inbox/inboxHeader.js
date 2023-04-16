function inboxHeader() { 

const headerLeft = document.getElementById("mainHeaderLeft"); 
const inboxHeader = document.createElement("span"); 
// set the id attribute

inboxHeader.innerHTML = "INBOX";
headerLeft.prepend(inboxHeader);

console.log("hey");
} 



export default inboxHeader;