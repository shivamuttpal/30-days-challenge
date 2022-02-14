const inputs = document.querySelectorAll('.controls input');
var image1=document.querySelectorAll("img")[0];


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}



var changed = document.querySelector("D");

document.addEventListener("keypress", (event)=>{
  var key=event.key;
  var randomNumber = Math.floor(Math.random() * 6)+1;
  var randomNumbertext = "doreamon"+randomNumber+".jpg";
  if(key=="d"){
    image1.setAttribute("src" , randomNumbertext); 
  }
})

 