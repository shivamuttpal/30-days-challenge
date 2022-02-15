const inputs = document.querySelectorAll('.controls input');
var image1 = document.querySelectorAll("img")[0];


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}



var changed = document.querySelector("D");

var number = 2;
document.addEventListener("keypress", (event) => {
  if (number == 7) number = 1;
  var key = event.key;
  var randomNumbertext = "doreamon" + number + ".jpg";
  ++randomNumber;
  if (key == "d") {
    image1.setAttribute("src", randomNumbertext);
  }
})