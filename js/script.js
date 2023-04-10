/*const article = document.querySelector("#content");
const btn = document.querySelector("#show-More")

btn.addEventListener("click", showMore);

function showMore() {
  if (article.className == "open") {
    // read less
    article.className = "";
    btn.innerHTML = "Show More";
  } else {
    //read more
    article.className = "open";
    btn.innerHTML = "Show Less";
  }
}
*/

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  if (selectedOption == 'Khaman')
  {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Khaman.docx')
  }
   if (selectedOption == 'Samosas')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Samosas.docx')
   }
   if (selectedOption == 'Undhiyu')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Undhiyu.docx')
}
if (selectedOption == 'Dahi Tikhari')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Dahi Tikhari.docx')
}
if (selectedOption == 'Masala Khichdi')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Masala Khichdi.docx')
}
if (selectedOption == 'Thepla')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Thepla.docx')
}
if (selectedOption == 'Jalebi')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Jalebi.docx')
}
if (selectedOption == 'Kheer')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Kheer.docx')
}

}
function loadFile(filename) {
  //alert(filename);
  
  fetch(filename)
  .then(response => response.text())
  .then(text => {
     document.getElementById('text-container').value = text;
  })
  .catch(error => {
    console.error('Error loading file:', error);
  });

}
