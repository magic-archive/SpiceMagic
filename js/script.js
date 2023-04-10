

function loadFile(filename) {
  //alert(filename);
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

function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
  loadFile(filePath + 'Recipe.txt');
  loadImage(filePath + 'Image.jpg')
  loadFile = '..\\dataImages\\Kheer.txt';
}
function loadImage(imageName) {
  //alert(imageName);
    document.getElementById('image-container').value = imageName;
}
function myRecipe() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
  loadFile(filePath + 'Recipe.txt');
}
function myMethod() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
  loadFile(filePath + 'Method.txt');
}
function myIngredients() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
  loadFile(filePath + 'Ingredients.txt');
}






