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
  var filePath;
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  if (selectedOption == 'Khaman')
  {
    filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
    //alert("You selected " + filePath);
    //loadFile(filePath + 'Recipe.txt');
    //loadImage(filePath + 'Image.jpg')
    loadFile('..\\dataImages\\Khaman\\Recipe.txt')
  }
   if (selectedOption == 'Samosas')
   {
   //alert("You selected " + selectedOption);
   //loadFile('..\\dataImages\\Samosas.docx')
     loadFile('..\\dataImages\\Kheer.txt')
   }
   if (selectedOption == 'Undhiyu')
   {
   //alert("You selected " + selectedOption);
   //loadFile('..\\dataImages\\Undhiyu.docx')
   loadFile('..\\dataImages\\Kheer.txt')
}
if (selectedOption == 'Dahi Tikhari')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Dahi Tikhari.txt')
}
if (selectedOption == 'Masala Khichdi')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Masala Khichdi.txt')
}
if (selectedOption == 'Thepla')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Thepla.txt')
}
if (selectedOption == 'Jalebi')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Jalebi.txt')
}
if (selectedOption == 'Kheer')
   {
   //alert("You selected " + selectedOption);
   loadFile('..\\dataImages\\Kheer.txt')
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
function loadImage(imageName) {
  alert(imageName);

    document.getElementById('image-container').value = imageName;


}





