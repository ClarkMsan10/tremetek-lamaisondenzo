var checkbox = document.querySelector("input[name=hamburger]");
var body = document.querySelector("body")

var sections =  document.querySelectorAll("section")


checkbox.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add("collapse")
    for (var i = 0; i < sections.length; i++){
      sections[i].classList.add('blur');
    }
  } else {
    body.classList.remove("collapse")
    for (var i = 0; i < sections.length; i++){
      sections[i].classList.remove('blur');
    }
  }
});