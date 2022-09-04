const search = document.getElementById("search");
const searchBtn = document.getElementById("btn");
const content = document.getElementById("page-content");
const closeButton = document.getElementById("closebtn");
const message = document.getElementById("message");
const hbtn = document.getElementById("hbtn");
const overlay = document.getElementById("overlay");

searchBtn.onclick = function () {
  searchURL();
};

closeButton.onclick = function () {
  closePage();
};
hbtn.onclick = function () {
  ham();
};
document.body.onkeydown = function (e) {
  if (e.keyCode === 13) {
    searchURL();
  }
};

function searchURL() {
  if (search.value.includes("https://") || search.value.includes("http://")) {
    content.src = search.value;
  } else {
    content.src = "https://" + search.value;
  }
  if (!search.value.includes(".")) {
    message.innerText = "Bowser browser dosen't own any search engine";
    search.value = "Please type in a valid domain";
    setTimeout(function () {
      search.value = "";
      message.innerText = "";
    }, 2000);
    return;
  }
  content.style.visibility = "visible";
}

function closePage() {
  if (content.style.visibility === "hidden") {
    window.close();
  }
  search.select();
  search.focus();
  content.style.visibility = "hidden";
}

function ham() {
  if (overlay.style.width === "0%") {
    overlay.style.width = "300px";
  } else {
    overlay.style.width = "0%";
  }
}
