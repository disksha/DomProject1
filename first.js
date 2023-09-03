var isstatus=document.querySelector("h5");
var isimg=document.querySelector("img");
var add=document.querySelector("#Add");
var remove=document.querySelector("#Remove")
// var check=0

add.addEventListener("click",function(){
    // if(check==0){
      isstatus.innerHTML="Bhagvan G"
      isstatus.style.color="green";
    //   check=1;
    isimg.src='images/img2.jpg';
    // }

})
remove.addEventListener("click",function(){
    isstatus.innerHTML="Kanha G";
    isstatus.style.color="blue";
    isimg.src='images/images1.jpg';

})
