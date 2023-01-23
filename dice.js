let button=document.querySelector('p');
let output=document.getElementById("output")
let image=document.querySelector('img');
let image_1="dice_images/dice_images/dice_1.png";
let image_2="dice_images/dice_images/dice_2.png";
let image_3="dice_images/dice_images/dice_3.png";
let image_4="dice_images/dice_images/dice_4.png";
let image_5="dice_images/dice_images/dice_5.png";
let image_6="dice_images/dice_images/dice_6.png";
const roll=()=>{
let number=Math.floor(Math.random() * 7);
if(number===2){
image.src=image_2;
output.innerHTML="Output :2"
output.style.display="block";
}
else if(number===3){
image.src=image_3
output.innerHTML="Output :3"
output.style.display="block";
}
else if(number===4){
image.src=image_4
output.innerHTML="Output :4"
output.style.display="block";
}
else if(number===5){
image.src=image_5
output.innerHTML="Output :5"
output.style.display="block";
}
else if(number===6){
image.src=image_6
output.innerHTML="Output :6"
output.style.display="block";
}
else{
image.src=image_1;
output.style.display="block";
output.innerHTML="Output :1"}
button.innerHTML='Roll again!';
}
button.addEventListener('click',roll);