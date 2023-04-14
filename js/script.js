function myFunction() {
  var dropdown = document.getElementById("myDropdown");
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
  loadHTML(filePath + 'recipe.htm')
  //loadFile(filePath + 'Recipe.txt');
}

function loadHTML(filename) {
  //alert(filename);
  fetch(filename)
  .then(response => response.text())
  .then(data => {
    document.getElementById('recipe-container').innerHTML = data;
  })
  .catch(error => {
    console.error('Error loading file:', error);
  });
}
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






