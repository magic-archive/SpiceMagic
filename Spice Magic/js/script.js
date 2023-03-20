const article = document.querySelector("#content");
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