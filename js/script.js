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
   loadFile('file:\\\C:\\Documents\\Projects\\SpiceMagic\\dataImages\\Khaman.txt')
  }
   if (selectedOption == 'Paneer')
   {
   //alert("You selected " + selectedOption);
   loadFile('Paneer.txt')
   }
   if (selectedOption == 'Gulab Jamun')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\GulabJamun.txt')
}
}
/*
function loadFile(filename) {
var xhr = new XMLHttpRequest();
	xhr.open('GET', filename, true);
	xhr.onreadystatechange = function() {
    alert(xhr.readyState);
    alert(xhr.status);
		if (xhr.readyState == 4 && xhr.status == 200) {
      alert(filename);
			document.getElementById('text-container').value = xhr.responseText;
		}
	};
	xhr.send();
}
*/

function loadFile(filename) {
  alert(filename);
  //document.getElementById('text-container').value = "foobar ...";

  fetch(filename)
  .then(response => response.text())
  .then(text => {
    alert(response.text());
    document.getElementById('text-container').value = text;
  })
  .catch(error => {
    console.error('Error loading file:', error);
  });

}





