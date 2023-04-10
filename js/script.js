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
  var filePath = '..\\dataImages' + '\\' + selectedOption + '\\';
  loadFile(filePath + 'Recipe.txt');
  //loadImage(filePath + 'Image.jpg')
}


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





