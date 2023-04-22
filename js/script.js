function myFunction1() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
  loadHTML(filePath + 'recipe.htm')
 }
function loadHTML(filename) {
  fetch(filename)
  .then(response => response.text())
  .then(data => {
    document.getElementById('recipe-container').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading file:', error);
  });

function myFunction() {
  var selectedLang; 
  let engL =  document.getElementById("radio1");
  let hinL = document.getElementById("radio2");
  let gujL = document.getElementById("radio3");
  if (engL.checked)
   selectedLang = engL.value;
   if (hinL.checked)
   selectedLang = hinL.value;
   if (gujL.checked)
   selectedLang = gujL.value;
var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\' + selectedLang;
  loadHTML(filePath)
}







