

function loadFile(filename) {
  alert(filename);
  fetch(filename)
  .then(response => response.text())
  .then(text => {
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
  loadHTML(filePath + 'Recipe.html')
  //loadFile(filePath + 'Recipe.txt');
  //loadImage(filePath + 'Image.jpg')
}
function loadHTML(filename) {
  alert(filename);
  fetch(filename)
  .then(response => response.text())
  .then(data => {
    document.getElementById('recipe-container').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading file:', error);
  });
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





