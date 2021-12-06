function changeDetails(detailID, buttonID) {
    var button = document.getElementById(buttonID)
    if (button.innerHTML == "Open details") {
      document.getElementById(detailID).open = true;
      button.innerHTML = "Close details"
    }
    else {
      document.getElementById(detailID).open = false;
      button.innerHTML = "Open details"
    }
}    

function openTag() {
  var tag = document.getElementsByClassName("nav-more")[0]
  var more = document.getElementsByClassName("nav-more-ul")[0]
  var lis = more.getElementsByTagName("li")

  if (tag.getAttribute("data-open") == "false") {
    for (var i=0; i<lis.length; i++) {
      lis[i].style.display="inline"
    }
    tag.setAttribute("data-open", "true");
  }
  else {
    for (var i=0; i<lis.length; i++) {
      lis[i].style.display="none"
    }
    tag.setAttribute("data-open", "false");
  }
}