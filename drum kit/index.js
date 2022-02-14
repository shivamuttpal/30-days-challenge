var numberofdrumbuttons=document.querySelectorAll(".drum").length;


for(var i=0;i<numberofdrumbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttoninnerhtml = this.innerText;
        makesounds(buttoninnerhtml);
        animate(buttoninnerhtml);
    });
}

document.addEventListener("keypress",(event)=>{
    var key=event.key;
    makesounds(key);
    animate(key);  
});

function makesounds(currkey){
    switch (currkey) {
        case "w":
            var drum1=new Audio('drum/drum.mp3');
            drum1.play();
            break;
        case "a":
            var drum1=new Audio('drum/drum.mp3');
            drum1.play();
            break;
        case "s":
            var drum1=new Audio('drum/drum.mp3');
            drum1.play();
            break;
        case "d":
            var drum1=new Audio('drum/drum.mp3');
            drum1.play();
            break;
        case "j":
            var drum1=new Audio('drum/drum.mp3');
            drum1.play();
            break;
        case "k":
            var drum1=new Audio('drum/drum.mp3');
            drum1.play();
            break;
        case "l":
            var drum1=new Audio('drum/drum.mp3');
            drum1.play();
            break;
    
        default: console.log(buttoninnerhtml)
            break;
    }
}
function animate(currkey){
    var add=document.querySelector("."+currkey);
    add.style=`
    transform: scale(1.4);
    margin-right: 40px;
    margin-left: 46px;
    box-shadow: 0px 0px 20px rgb(3, 88, 111);
    `;
    setTimeout(removestyle, 200);

    function removestyle() {
        add.style=``;
    }
}