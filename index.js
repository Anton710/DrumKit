function handler (text){
    var audio;
    switch (text) {
        case 'f':
            audio = new Audio("sounds/crash.mp3");
            audio.play();    
            break;
        case 'a':
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;  
        case 's':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;    
    
        case 'd':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;    
    
        case 'j':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;    
    
        case 'k':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break; 
        case 'l':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;     
    
        default:console.log(text);
            break;
    }
}


for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
           this.style.color = "black";
            // console.log(this);
            //console.log(this.innerHTML);
            var buttonInnerHtml = this.innerHTML;
            handler(buttonInnerHtml);
            animation(buttonInnerHtml);
           
        });  
}
// detecting keyboard press
document.addEventListener("keypress",function(event) {
   
    console.log(event.key);
    var key_press = event.key;
    handler(key_press);
    animation(key_press);
    
})

function animation(key_press){

   let activeButton = document.querySelector("."+key_press);
   activeButton.classList.add("pressed");

   const myTimeout = setTimeout(function(){

    activeButton.classList.remove("pressed");

   }, 100);

    


}